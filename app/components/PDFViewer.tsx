"use client";

import { useEffect, useRef, useState } from "react";

interface PDFViewerProps {
  src: string;
}

declare global {
  interface Window {
    pdfjsLib: any;
  }
}

export function PDFViewer({ src }: PDFViewerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRefsRef = useRef<Map<number, HTMLCanvasElement>>(new Map());
  const [loading, setLoading] = useState(true);
  const [totalPages, setTotalPages] = useState(0);
  const [renderedPages, setRenderedPages] = useState<Set<number>>(new Set());
  const pdfRef = useRef<any>(null);
  const renderTasksRef = useRef<Map<number, any>>(new Map());

  useEffect(() => {
    let mounted = true;

    const loadPDF = async () => {
      if (!window.pdfjsLib) {
        const script = document.createElement("script");
        script.src =
          "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js";
        await new Promise((resolve) => {
          script.onload = resolve;
          document.head.appendChild(script);
        });
      }

      const pdfjsLib = window.pdfjsLib;
      pdfjsLib.GlobalWorkerOptions.workerSrc =
        "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";

      try {
        const pdf = await pdfjsLib.getDocument(src).promise;
        if (!mounted) return;

        pdfRef.current = pdf;
        setTotalPages(pdf.numPages);
        setLoading(false);
      } catch (error) {
        console.error("Error loading PDF:", error);
        if (mounted) setLoading(false);
      }
    };

    loadPDF();

    return () => {
      mounted = false;
    };
  }, [src]);

  const renderPage = async (pageNum: number) => {
    const pdf = pdfRef.current;
    if (!pdf) return;

    const canvas = canvasRefsRef.current.get(pageNum);
    if (!canvas) return;

    // 既にレンダリング済みの場合はスキップ
    if (renderedPages.has(pageNum)) return;

    // 前のレンダリングタスクをキャンセル
    const existingTask = renderTasksRef.current.get(pageNum);
    if (existingTask) {
      try {
        existingTask.cancel();
      } catch (error) {
        // キャンセルエラーは無視
      }
      renderTasksRef.current.delete(pageNum);
    }

    try {
      const page = await pdf.getPage(pageNum);
      const viewport = page.getViewport({ scale: 1 });

      // 画面幅を取得
      const screenWidth = window.innerWidth;
      const padding = 32; // px-4 (16px * 2)
      const sidePadding = screenWidth > 768 ? 112 : 48; // md:px-14 (56px * 2) or px-6 (24px * 2)

      // PCなど横幅が大きい場合は画面幅の1/2に制限、小さい場合は全幅
      const maxContentWidth =
        screenWidth > 768
          ? (screenWidth - sidePadding) * (1 / 2)
          : screenWidth - sidePadding;

      const containerWidth = Math.min(
        maxContentWidth,
        screenWidth - padding - sidePadding,
      );

      if (containerWidth <= 0) return;

      const scale = containerWidth / viewport.width;
      const scaledViewport = page.getViewport({ scale });

      const devicePixelRatio = window.devicePixelRatio || 1;
      const resolutionMultiplier = 2;
      const scaleFactor = devicePixelRatio * resolutionMultiplier;

      canvas.width = scaledViewport.width * scaleFactor;
      canvas.height = scaledViewport.height * scaleFactor;

      canvas.style.width = `${scaledViewport.width}px`;
      canvas.style.height = `${scaledViewport.height}px`;

      const ctx = canvas.getContext("2d")!;
      if (!ctx) return;

      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(scaleFactor, scaleFactor);

      // 白背景を描画
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, scaledViewport.width, scaledViewport.height);

      const renderTask = page.render({
        canvasContext: ctx,
        viewport: scaledViewport,
      });

      renderTasksRef.current.set(pageNum, renderTask);
      await renderTask.promise;
      renderTasksRef.current.delete(pageNum);

      setRenderedPages((prev) => new Set(prev).add(pageNum));
    } catch (error: any) {
      const errorName = error?.name || "";
      const errorMessage = error?.message || "";

      if (
        errorName !== "RenderingCancelledException" &&
        !errorMessage.includes("cancelled") &&
        !errorMessage.includes("canceled")
      ) {
        console.error(`Error rendering page ${pageNum}:`, error);
      }
      renderTasksRef.current.delete(pageNum);
    }
  };

  useEffect(() => {
    if (!pdfRef.current || loading || totalPages === 0) return;

    // 全ページを順番にレンダリング
    const renderAllPages = async () => {
      for (let i = 1; i <= totalPages; i++) {
        await renderPage(i);
      }
    };

    renderAllPages();
  }, [loading, totalPages]);

  useEffect(() => {
    if (!pdfRef.current || loading) return;

    let timeoutId: NodeJS.Timeout;

    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        if (pdfRef.current && !loading) {
          // リサイズ時に全ページを再レンダリング
          setRenderedPages(new Set());
          for (let i = 1; i <= totalPages; i++) {
            renderPage(i);
          }
        }
      }, 100);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("resize", handleResize);
      // クリーンアップ時に全レンダリングタスクをキャンセル
      renderTasksRef.current.forEach((task) => {
        try {
          task.cancel();
        } catch (error) {
          // キャンセルエラーは無視
        }
      });
      renderTasksRef.current.clear();
    };
  }, [loading, totalPages]);

  const setCanvasRef =
    (pageNum: number) => (canvas: HTMLCanvasElement | null) => {
      if (canvas) {
        canvasRefsRef.current.set(pageNum, canvas);
      } else {
        canvasRefsRef.current.delete(pageNum);
      }
    };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-slate-400">読み込み中...</div>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="flex flex-col items-start w-full">
      {/* PDF表示エリア（画面全体をスクロール） */}
      <div className="flex flex-col items-start w-full md:w-1/2 gap-4 py-4">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
          <div key={pageNum} className="w-full flex justify-center">
            <canvas
              ref={setCanvasRef(pageNum)}
              className="max-w-full h-auto shadow-sm bg-white"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

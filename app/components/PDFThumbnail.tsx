"use client";

import { useEffect, useRef, useState } from "react";

interface PDFThumbnailProps {
  src: string;
  title: string;
}

declare global {
  interface Window {
    pdfjsLib: any;
  }
}

export function PDFThumbnail({ src, title }: PDFThumbnailProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(true);
  const pdfRef = useRef<any>(null);
  const pageRef = useRef<any>(null);

  const renderPDF = async (
    container: HTMLElement,
    canvas: HTMLCanvasElement,
  ) => {
    if (!pdfRef.current || !pageRef.current) return;

    const displayWidth = container.clientWidth;

    // コンテナのサイズが0の場合は待機
    if (displayWidth === 0) {
      return;
    }

    const displayHeight = (displayWidth * 9) / 16;

    // デバイスのピクセル比を取得（Retinaディスプレイなどでは2以上）
    const devicePixelRatio = window.devicePixelRatio || 1;
    // 解像度を上げるための倍率（2倍に設定）
    const resolutionMultiplier = 2;
    const scaleFactor = devicePixelRatio * resolutionMultiplier;

    // Canvasの実際の解像度を上げる
    canvas.width = displayWidth * scaleFactor;
    canvas.height = displayHeight * scaleFactor;

    // CSSサイズは表示サイズのまま
    canvas.style.width = `${displayWidth}px`;
    canvas.style.height = `${displayHeight}px`;

    const ctx = canvas.getContext("2d")!;
    if (!ctx) return;

    // コンテキストをリセット
    ctx.setTransform(1, 0, 0, 1, 0, 0);

    // 高解像度対応のためスケールを調整
    ctx.scale(scaleFactor, scaleFactor);

    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, displayWidth, displayHeight);

    const originalViewport = pageRef.current.getViewport({ scale: 1 });
    const scale = displayHeight / originalViewport.height;
    const viewport = pageRef.current.getViewport({ scale });
    const offsetX = (displayWidth - viewport.width) / 2;

    ctx.save();
    ctx.translate(offsetX, 0);
    await pageRef.current.render({ canvasContext: ctx, viewport }).promise;
    ctx.restore();
  };

  useEffect(() => {
    let mounted = true;
    let resizeObserver: ResizeObserver | null = null;

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

      const pdf = await pdfjsLib.getDocument(src).promise;
      if (!mounted) return;

      const page = await pdf.getPage(1);
      pdfRef.current = pdf;
      pageRef.current = page;

      const canvas = canvasRef.current;
      const container = containerRef.current;
      if (!canvas || !container) return;

      // 初回レンダリング
      await renderPDF(container, canvas);
      if (mounted) setLoading(false);

      // ResizeObserverでコンテナサイズの変更を監視
      resizeObserver = new ResizeObserver(async () => {
        if (mounted && canvas && container) {
          await renderPDF(container, canvas);
        }
      });

      resizeObserver.observe(container);
    };

    loadPDF();

    return () => {
      mounted = false;
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
    };
  }, [src]);

  return (
    <div className="flex flex-col group">
      {/* サムネイル */}
      <div
        ref={containerRef}
        className="
          relative isolate
          aspect-[16/9]
          overflow-hidden
          rounded-lg
          border-[1px]
          border-[#E0E0E0]
          transition-all duration-300
          group-hover:border-[#D1180A]
          w-full
        "
      >
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center bg-slate-100 text-sm text-slate-400">
            Loading...
          </div>
        )}
        <canvas ref={canvasRef} className="w-full h-full rounded-lg" />
      </div>

      {/* タイトル */}
      <div className="mt-4 text-start">
        <h3 className="text-xl font-bold text-[#2F2F2F] transition-colors duration-300 group-hover:text-[#D1180A]">
          {title}
        </h3>
      </div>
    </div>
  );
}

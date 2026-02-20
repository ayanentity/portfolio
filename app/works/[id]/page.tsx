import { Header } from "../../components/Header";
import { PDFViewer } from "../../components/PDFViewer";
import { getWorkById } from "../data";
import { notFound } from "next/navigation";
import Link from "next/link";

interface WorkDetailPageProps {
  params: Promise<{ id: string }>;
}

export default async function WorkDetailPage({ params }: WorkDetailPageProps) {
  const { id } = await params;
  const work = getWorkById(id);

  if (!work) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="relative min-h-screen pb-16 pt-24 md:pt-28">
        <div className="relative z-10 w-full px-6 pt-6 md:px-14">
          {/* 戻るボタン */}
          <Link
            href="/works"
            className="inline-block mb-16 text-[40px] font-bold tracking-[0.04em] text-[#D1180A] transition-colors"
          >
            ← Back to All Works
          </Link>

          {/* PDFビューアー */}
          <PDFViewer src={work.pdfPath} />
        </div>
      </main>
    </div>
  );
}

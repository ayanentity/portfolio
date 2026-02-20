import { Header } from "../components/Header";
import { PDFThumbnail } from "../components/PDFThumbnail";
import Link from "next/link";
import { works } from "./data";

export default function WorksPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="relative min-h-screen pb-16 pt-24 md:pt-28">
        <div className="relative z-10 w-full mb-6 px-6 pt-6 md:px-14">
          <h2 className="mb-16 text-[40px] font-bold tracking-[0.04em] text-[#D1180A]">
            All Works
          </h2>

          {/* デスクトップ版: グリッドレイアウト */}
          <div className="hidden md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-24">
            {works.map((work) => (
              <Link key={work.id} href={`/works/${work.id}`} className="group">
                <PDFThumbnail src={work.pdfPath} title={work.title} />
              </Link>
            ))}
          </div>

          {/* モバイル版: 縦並びレイアウト */}
          <div className="md:hidden space-y-6">
            {works.map((work) => (
              <Link key={work.id} href={`/works/${work.id}`} className="block">
                <PDFThumbnail src={work.pdfPath} title={work.title} />
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

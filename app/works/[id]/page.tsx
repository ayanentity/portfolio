import Image from "next/image";
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
          <Link
            href="/works"
            className="inline-block mb-16 text-[40px] font-bold tracking-[0.04em] text-[#D1180A] transition-colors"
          >
            ← Back to All Works
          </Link>

          <div className="mt-8 flex w-full justify-center">
            {work.imagePages?.length ? (
              <div className="flex w-full flex-col items-center md:w-2/3">
                <div className="flex w-full flex-col items-center gap-4 py-4">
                  {work.imagePages.map((src, index) => (
                    <Image
                      key={src}
                      src={src}
                      alt={`${work.title} — ${index + 1}`}
                      width={1920}
                      height={1080}
                      className="h-auto w-full max-w-full bg-white object-contain shadow-sm"
                      sizes="(max-width: 768px) 100vw, 66vw"
                    />
                  ))}
                </div>
              </div>
            ) : work.pdfPath ? (
              <PDFViewer src={work.pdfPath} />
            ) : null}
          </div>
        </div>
      </main>
    </div>
  );
}

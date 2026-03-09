import Image from "next/image";
import { Header } from "../components/Header";
import { readdir } from "fs/promises";
import path from "path";

const GALLERY_IMG_DIR = "gallery-img";
const IMAGE_EXT = /\.(jpe?g|png|webp)$/i;

async function getGalleryImages(): Promise<string[]> {
  const dir = path.join(process.cwd(), "public", GALLERY_IMG_DIR);
  const files = await readdir(dir);
  return files.filter((f) => IMAGE_EXT.test(f)).sort();
}

export default async function GalleryPage() {
  const images = await getGalleryImages();

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="relative min-h-screen pb-16 pt-24 md:pt-28">
        <div className="relative z-10 w-full px-6 md:px-14">
          <h2 className="mb-6 text-[40px] font-bold tracking-[0.04em] text-[#D1180A]">
            Gallery
          </h2>

          {/* デスクトップ: 3x3 グリッド */}
          <div className="hidden md:grid md:grid-cols-3 md:gap-2">
            {images.map((filename) => (
              <div
                key={filename}
                className="relative aspect-[4/3] overflow-hidden bg-slate-100"
              >
                <Image
                  src={`/${GALLERY_IMG_DIR}/${filename}`}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            ))}
          </div>

          {/* スマホ・縦長: 1列 */}
          <div className="flex flex-col gap-2 md:hidden">
            {images.map((filename) => (
              <div
                key={filename}
                className="relative w-full aspect-[9/16] overflow-hidden bg-slate-100"
              >
                <Image
                  src={`/${GALLERY_IMG_DIR}/${filename}`}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

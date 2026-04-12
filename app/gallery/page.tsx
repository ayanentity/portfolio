import { GalleryGrid } from "../components/GalleryGrid";
import { Header } from "../components/Header";
import { RevealOnScroll } from "../components/RevealOnScroll";
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
        <div className="relative z-10 w-full mb-6 px-6 pt-6 md:px-14">
          <RevealOnScroll>
            <h2 className="mb-6 text-[40px] font-bold tracking-[0.04em] text-[#D1180A]">
              Gallery
            </h2>
          </RevealOnScroll>

          <RevealOnScroll delay={0.05}>
            <p className="mb-6 body-text text-[#2F2F2F]">
              これまでに参加したイベントや発表会、制作作品の思い出の写真：特に気に入っているものを集めました！
            </p>
          </RevealOnScroll>

          <GalleryGrid images={images} />

          <RevealOnScroll delay={0.06}>
            <footer className="mt-14 text-center text-xs text-[#2F2F2F]">
              ©2026 Nakazato Ayane
            </footer>
          </RevealOnScroll>
        </div>
      </main>
    </div>
  );
}

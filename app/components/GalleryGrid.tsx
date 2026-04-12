"use client";

import Image from "next/image";
import { RevealOnScroll } from "./RevealOnScroll";

const GALLERY_IMG_DIR = "gallery-img";

type GalleryGridProps = {
  images: string[];
};

export function GalleryGrid({ images }: GalleryGridProps) {
  return (
    <>
      <div className="hidden md:grid md:grid-cols-3 md:gap-2">
        {images.map((filename, index) => (
          <RevealOnScroll key={filename} delay={index * 0.04}>
            <div className="relative aspect-[4/3] overflow-hidden bg-slate-100 transition-transform duration-300 ease-out motion-reduce:transform-none">
              <Image
                src={`/${GALLERY_IMG_DIR}/${filename}`}
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          </RevealOnScroll>
        ))}
      </div>
      <div className="flex flex-col gap-2 md:hidden">
        {images.map((filename, index) => (
          <RevealOnScroll key={filename} delay={index * 0.04}>
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
              <Image
                src={`/${GALLERY_IMG_DIR}/${filename}`}
                alt=""
                fill
                className="object-cover"
                sizes="100vw"
              />
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </>
  );
}

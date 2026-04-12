"use client";

import Link from "next/link";
import type { Work } from "../works/data";
import { PDFThumbnail } from "./PDFThumbnail";
import { RevealOnScroll } from "./RevealOnScroll";
import { WorkImageThumbnail } from "./WorkImageThumbnail";

const cardLinkClass =
  "group block transition-transform duration-300 ease-out motion-reduce:transform-none hover:-translate-y-1 hover:md:scale-[1.02] active:md:scale-[0.99]";

type WorksGridProps = {
  works: Work[];
};

export function WorksGrid({ works }: WorksGridProps) {
  return (
    <>
      <div className="hidden md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-24">
        {works.map((work, index) => (
          <RevealOnScroll key={work.id} delay={index * 0.05}>
            <Link href={`/works/${work.id}`} className={cardLinkClass}>
              {work.imagePages?.[0] ? (
                <WorkImageThumbnail
                  src={work.imagePages[0]}
                  title={work.title}
                />
              ) : work.pdfPath ? (
                <PDFThumbnail src={work.pdfPath} title={work.title} />
              ) : null}
            </Link>
          </RevealOnScroll>
        ))}
      </div>

      <div className="md:hidden space-y-6">
        {works.map((work, index) => (
          <RevealOnScroll key={work.id} delay={index * 0.05}>
            <Link href={`/works/${work.id}`} className={cardLinkClass}>
              {work.imagePages?.[0] ? (
                <WorkImageThumbnail
                  src={work.imagePages[0]}
                  title={work.title}
                />
              ) : work.pdfPath ? (
                <PDFThumbnail src={work.pdfPath} title={work.title} />
              ) : null}
            </Link>
          </RevealOnScroll>
        ))}
      </div>
    </>
  );
}

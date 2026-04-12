"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

type WorkDetailImagesProps = {
  title: string;
  imagePages: string[];
};

export function WorkDetailImages({ title, imagePages }: WorkDetailImagesProps) {
  const reduceMotion = useReducedMotion();

  return (
    <div className="flex w-full flex-col items-center md:w-2/3">
      <div className="flex w-full flex-col items-center gap-4 py-4">
        {imagePages.map((src, index) =>
          reduceMotion ? (
            <Image
              key={src}
              src={src}
              alt={`${title} — ${index + 1}`}
              width={1920}
              height={1080}
              className="h-auto w-full max-w-full bg-white object-contain shadow-sm"
              sizes="(max-width: 768px) 100vw, 66vw"
            />
          ) : (
            <motion.div
              key={src}
              className="w-full"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15, margin: "0px 0px -40px 0px" }}
              transition={{
                duration: 0.55,
                delay: 0.04,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <Image
                src={src}
                alt={`${title} — ${index + 1}`}
                width={1920}
                height={1080}
                className="h-auto w-full max-w-full bg-white object-contain shadow-sm"
                sizes="(max-width: 768px) 100vw, 66vw"
              />
            </motion.div>
          ),
        )}
      </div>
    </div>
  );
}

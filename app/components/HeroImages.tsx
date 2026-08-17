"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

export function HeroImages() {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return (
      <>
        <Image
          src="/home/SP_FV.png"
          alt="Ayane's identity Ayanentity"
          width={2121}
          height={3240}
          className="h-auto w-full object-contain md:hidden"
          sizes="100vw"
          priority
        />
        <Image
          src="/home/PC_FV.png"
          alt="Ayane's identity Ayanentity"
          width={4584}
          height={3240}
          className="hidden h-auto w-full object-contain md:block"
          sizes="100vw"
          priority
        />
      </>
    );
  }

  return (
    <motion.div
      className="relative w-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      <Image
        src="/home/SP_FV.png"
        alt="Ayane's identity Ayanentity"
        width={2121}
        height={3240}
        className="h-auto w-full object-contain md:hidden"
        sizes="100vw"
        priority
      />
      <Image
        src="/home/PC_FV.png"
        alt="Ayane's identity Ayanentity"
        width={4584}
        height={3240}
        className="hidden h-auto w-full object-contain md:block"
        sizes="100vw"
        priority
      />
    </motion.div>
  );
}

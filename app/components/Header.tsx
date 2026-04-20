"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const navItems = [
  { label: "About", href: "/#about", external: false },
  { label: "Works", href: "/works", external: false },
  { label: "Blog", href: "https://note.com/ayanen_tity", external: true },
  { label: "Gallery", href: "/gallery", external: false },
  { label: "GitHub", href: "https://github.com/ayanentity", external: true },
  { label: "Contact", href: "/contact", external: false },
];

const linkUnderlineClass =
  "relative inline-block text-sm font-semibold tracking-[0.04em] text-[#2F2F2F] transition-colors duration-200 after:pointer-events-none after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-[#D1180A] after:transition-all after:duration-200 hover:text-[#D1180A] hover:after:w-full";

export function Header() {
  const [open, setOpen] = useState(false);
  const reduceMotion = useReducedMotion();
  const toggle = () => setOpen((prev) => !prev);
  const close = () => setOpen(false);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 h-[80px] border-b border-slate-200 bg-white">
        <div className="mx-auto flex h-full items-center justify-between px-6 md:px-14">
          <Link
            href="/"
            onClick={close}
            className="transition-opacity duration-200 hover:opacity-85"
          >
            <span className="text-2xl font-bold tracking-[0.04em] text-[#D1180A]">
              I am Ayanentity
            </span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) =>
              item.external ? (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkUnderlineClass}
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className={linkUnderlineClass}
                >
                  {item.label}
                </Link>
              ),
            )}
          </nav>

          <button
            onClick={toggle}
            className="rounded-md p-2 md:hidden"
            aria-expanded={open}
            aria-label={open ? "メニューを閉じる" : "メニューを開く"}
          >
            <div className="flex h-5 w-6 flex-col justify-between">
              <span
                className={`h-[2px] bg-black transition ${
                  open ? "translate-y-[6px] rotate-45" : ""
                }`}
              />
              <span
                className={`h-[2px] bg-black transition ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`h-[2px] bg-black transition ${
                  open ? "-translate-y-[6px] -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </header>

      {reduceMotion ? (
        <div
          className={`fixed inset-x-0 top-[80px] z-40 md:hidden transition-all duration-200 ${
            open
              ? "pointer-events-auto opacity-100"
              : "pointer-events-none opacity-0"
          }`}
        >
          <nav className="border-t border-slate-200 bg-white px-6 py-6 shadow">
            <ul className="flex flex-col gap-6 text-center">
              {navItems.map((item) =>
                item.external ? (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={close}
                    className="text-lg font-semibold text-[#2F2F2F] transition-colors hover:text-[#D1180A] active:text-[#D1180A]"
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={close}
                    className="text-lg font-semibold text-[#2F2F2F] transition-colors hover:text-[#D1180A] active:text-[#D1180A]"
                  >
                    {item.label}
                  </Link>
                ),
              )}
            </ul>
          </nav>
        </div>
      ) : (
        <AnimatePresence>
          {open && (
            <motion.div
              className="fixed inset-x-0 top-[80px] z-40 md:hidden"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.nav
                className="border-t border-slate-200 bg-white px-6 py-6 shadow"
                initial="closed"
                animate="open"
                variants={{
                  open: {
                    transition: { staggerChildren: 0.06, delayChildren: 0.04 },
                  },
                  closed: {},
                }}
              >
                <ul className="flex flex-col gap-6 text-center">
                  {navItems.map((item) => (
                    <motion.li
                      key={item.label}
                      variants={{
                        open: { opacity: 1, y: 0 },
                        closed: { opacity: 0, y: 8 },
                      }}
                      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                    >
                      {item.external ? (
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={close}
                          className="text-lg font-semibold text-[#2F2F2F] transition-colors hover:text-[#D1180A] active:text-[#D1180A]"
                        >
                          {item.label}
                        </a>
                      ) : (
                        <Link
                          href={item.href}
                          onClick={close}
                          className="text-lg font-semibold text-[#2F2F2F] transition-colors hover:text-[#D1180A] active:text-[#D1180A]"
                        >
                          {item.label}
                        </Link>
                      )}
                    </motion.li>
                  ))}
                </ul>
              </motion.nav>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </>
  );
}

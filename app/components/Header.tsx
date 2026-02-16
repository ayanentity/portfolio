"use client";

import { useState } from "react";
import Link from "next/link";

const navItems = [
  { label: "About", href: "/#about", external: false },
  { label: "Works", href: "/works", external: false },
  { label: "Blog", href: "https://note.com/ayanen_tity", external: true },
  { label: "Gallery", href: "/gallery", external: false },
  { label: "Contact", href: "/contact", external: false },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen((prev) => !prev);
  const close = () => setOpen(false);

  return (
    <>
      {/* ===== Header bar (always 80px) ===== */}
      <header className="fixed inset-x-0 top-0 z-50 h-[80px] border-b border-slate-200 bg-white">
        <div className="mx-auto flex h-full items-center justify-between px-6 md:px-14">
          {/* Brand */}
          <Link href="/" onClick={close}>
            <span className="text-2xl font-bold tracking-[0.04em] text-[#D1180A]">
              I am Ayanentity
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) =>
              item.external ? (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold tracking-[0.04em] text-[#2F2F2F] hover:text-[#D1180A]"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-sm font-semibold tracking-[0.04em] text-[#2F2F2F] hover:text-[#D1180A]"
                >
                  {item.label}
                </Link>
              ),
            )}
          </nav>

          {/* Hamburger */}
          <button
            onClick={toggle}
            className="md:hidden rounded-md p-2"
            aria-expanded={open}
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

      {/* ===== Mobile menu (overlay) ===== */}
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
                  className="text-lg font-semibold text-[#2F2F2F] hover:text-[#D1180A] active:text-[#D1180A]"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={close}
                  className="text-lg font-semibold text-[#2F2F2F] hover:text-[#D1180A] active:text-[#D1180A]"
                >
                  {item.label}
                </Link>
              ),
            )}
          </ul>
        </nav>
      </div>
    </>
  );
}

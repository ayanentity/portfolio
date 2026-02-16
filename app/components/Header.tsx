 "use client";

 import { useState } from "react";
 import Link from "next/link";

 const navItems = [
   { label: "About", href: "/#about", external: false },
   { label: "Works", href: "/works", external: false },
   {
     label: "Blog",
     href: "https://note.com/ayanen_tity",
     external: true,
   },
   { label: "Contact", href: "/contact", external: false },
 ];

 export function Header() {
   const [open, setOpen] = useState(false);

   const toggle = () => setOpen((prev) => !prev);
   const close = () => setOpen(false);

   return (
     <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200 bg-white">
       <div className="mx-auto flex h-[80px] max-w-6xl items-center justify-between px-6 md:px-14">
         {/* Brand - "I am Ayanentity" */}
         <Link href="/" className="flex items-center" onClick={close}>
           <span className="text-2xl font-bold tracking-[0.04em] text-[#D1180A]">
             I am Ayanentity
           </span>
         </Link>

         {/* Desktop nav: About / Works / Blog / Contact */}
         <nav className="hidden items-center gap-8 md:flex">
           {navItems.map((item) =>
             item.external ? (
               <a
                 key={item.label}
                 href={item.href}
                 target="_blank"
                 rel="noopener noreferrer"
                 className="text-sm font-semibold tracking-[0.04em] text-[#2F2F2F] transition-colors hover:text-[#D1180A]"
               >
                 {item.label}
               </a>
             ) : (
               <Link
                 key={item.label}
                 href={item.href}
                 className="text-sm font-semibold tracking-[0.04em] text-[#2F2F2F] transition-colors hover:text-[#D1180A]"
               >
                 {item.label}
               </Link>
             )
           )}
         </nav>

         {/* Mobile hamburger */}
         <button
           type="button"
           className="inline-flex items-center justify-center rounded-md p-2 text-slate-800 hover:bg-slate-100 md:hidden"
           aria-label="Toggle navigation"
           aria-expanded={open}
           onClick={toggle}
         >
           <div className="flex h-5 w-6 flex-col justify-between">
             <span
               className={`block h-[2px] w-full rounded-full bg-current transition-transform duration-200 ${
                 open ? "translate-y-[6px] rotate-45" : ""
               }`}
             />
             <span
               className={`block h-[2px] w-full rounded-full bg-current transition-opacity duration-200 ${
                 open ? "opacity-0" : "opacity-100"
               }`}
             />
             <span
               className={`block h-[2px] w-full rounded-full bg-current transition-transform duration-200 ${
                 open ? "-translate-y-[6px] -rotate-45" : ""
               }`}
             />
           </div>
         </button>
       </div>

       {/* Mobile nav panel */}
       <div
         className={`md:hidden ${
           open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
         } transition-opacity duration-200`}
       >
         <nav className="border-t border-slate-200 bg-white px-6 pb-4 pt-3 shadow-sm">
           <div className="flex flex-col gap-3">
             {navItems.map((item) =>
               item.external ? (
                 <a
                   key={item.label}
                   href={item.href}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="text-sm font-semibold tracking-[0.04em] text-[#2F2F2F] transition-colors hover:text-[#D1180A]"
                   onClick={close}
                 >
                   {item.label}
                 </a>
               ) : (
                 <Link
                   key={item.label}
                   href={item.href}
                   className="text-sm font-semibold tracking-[0.04em] text-[#2F2F2F] transition-colors hover:text-[#D1180A]"
                   onClick={close}
                 >
                   {item.label}
                 </Link>
               )
             )}
           </div>
         </nav>
       </div>
     </header>
   );
 }


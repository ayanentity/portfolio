import { Header } from "../components/Header";
import { RevealOnScroll } from "../components/RevealOnScroll";
import { WorksGrid } from "../components/WorksGrid";
import { works } from "./data";

export default function WorksPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="relative min-h-screen pb-16 pt-24 md:pt-28">
        <div className="relative z-10 w-full mb-6 px-6 pt-6 md:px-14">
          <RevealOnScroll>
            <h2 className="mb-16 text-[40px] font-bold tracking-[0.04em] text-[#D1180A]">
              All Works
            </h2>
          </RevealOnScroll>

          <WorksGrid works={works} />

          <RevealOnScroll delay={0.08}>
            <footer className="mt-14 text-center text-xs text-[#2F2F2F]">
              ©2026 Nakazato Ayane
            </footer>
          </RevealOnScroll>
        </div>
      </main>
    </div>
  );
}

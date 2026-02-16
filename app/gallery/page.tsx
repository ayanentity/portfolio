import Image from "next/image";
import { Header } from "../components/Header";

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-white pt-24 md:pt-28">
      <Header />
      <div className="mx-auto max-w-6xl px-6 md:px-14">
        <h1 className="mb-6 text-[40px] font-bold tracking-[0.04em] text-[#D1180A]">
          Gallery
        </h1>
        <p className="body-text text-[#2F2F2F]">
          ここに過去の活動様子の写真を表示します。（仮ページ）
        </p>
      </div>
    </main>
  );
}

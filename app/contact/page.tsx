import Image from "next/image";
import { Header } from "../components/Header";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* main を画面高にする */}
      <main className="relative min-h-screen pb-16 pt-24 md:pt-28">
        {/* 左：テキストエリア */}
        <div className="relative z-10 w-full mb-6 px-6 pt-6 md:w-1/2 md:px-14">
          <h2 className="mb-6 text-[40px] font-bold tracking-[0.04em] text-[#D1180A]">
            Contact
          </h2>

          <h3 className="mb-6 gap-2 text-[32px] font-extrabold leading-snug text-[#2F2F2F] md:text-4xl">
            みなさんと一緒に
            <br />
            ものづくりがしたいです
          </h3>

          <p className="mb-4 body-text text-[#2F2F2F]">
            デザインに関するご相談やお誘いなど、ぜひお気軽にご連絡ください。
            チームでアイデアを出し合いながら、ものづくりに取り組むことが大好きです。
          </p>

          <p className="mb-8 body-text text-[#2F2F2F]">
            以下のメールアドレス、もしくはX(Twitter)よりご連絡いただけると嬉しいです。
          </p>

          <div className="flex items-center gap-4 text-sm text-[#2F2F2F]">
            <span className="font-semibold">iam@ayanentity.com</span>
            <a
              href="https://x.com/ayanen_tity"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X (Twitter) @ayanentity へ移動"
              className="inline-flex h-8 w-8 items-center justify-center rounded-full "
            >
              <Image
                src="/icons/twitter-x.png"
                alt="X (Twitter) アイコン"
                width={20}
                height={20}
                className="object-contain"
              />
            </a>
          </div>
        </div>
        {/* Mobile only */}
        <div className="mt-10 grid gap-4 md:hidden">
          <div className="relative h-52 overflow-hidden bg-slate-100">
            <Image
              src="/contacts/ContactsPage-image1-10b823.png"
              alt=""
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
          <div className="relative h-52 overflow-hidden bg-slate-100">
            <Image
              src="/contacts/ContactsPage-image2.png"
              alt=""
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </div>

        {/* 右：画面いっぱいの写真 */}
        <section className="absolute right-0 top-0 hidden h-screen w-1/2 md:grid md:grid-rows-2">
          <div className="relative">
            <Image
              src="/contacts/ContactsPage-image1-10b823.png"
              alt=""
              fill
              className="object-cover"
              sizes="50vw"
              priority
            />
          </div>
          <div className="relative">
            <Image
              src="/contacts/ContactsPage-image2.png"
              alt=""
              fill
              className="object-cover"
              sizes="50vw"
            />
          </div>
        </section>
      </main>
    </div>
  );
}

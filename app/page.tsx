import Image from "next/image";
import { Header } from "./components/Header";

const designerChips = [
  { label: "イラスト制作", left: "62%", top: "20%" },
  { label: "UIデザイン", left: "72%", top: "18%" },
  { label: "グラフィックデザイン", left: "82%", top: "20%" },
  { label: "UX設計", left: "58%", top: "40%" },
  { label: "動画編集", left: "70%", top: "32%" },
  { label: "ポスターデザイン", left: "82%", top: "32%" },
  { label: "写真撮影", left: "18%", top: "80%" },
  { label: "3Dモデリング", left: "33%", top: "90%" },
  { label: "ワークショップデザイン", left: "10%", top: "60%" },
];

const generalChips = [
  { label: "資料作成", left: "60%", top: "10%" },
  { label: "企画立案", left: "78%", top: "8%" },
  { label: "GitHub", left: "40%", top: "28% " },
  { label: "プレゼン発表", left: "60%", top: "30%" },
  { label: "ドキュメンテーション", left: "20%", top: "28%" },
  { label: "ファシリテーション", left: "64%", top: "48%" },
  { label: "リーダーシップ", left: "46%", top: "20%" },
  { label: "インタビュースキル", left: "80%", top: "41%" },
  { label: "マーケティング思考", left: "40%", top: "55%" },
];

export default function Home() {
  return (
    <div id="top" className="min-h-screen bg-white">
      <Header />

      <main className="relative min-h-screen pb-32">
        {/* Hero: ビューポート幅いっぱい（max-w-7xl の外） */}
        <section
          aria-label="Hero"
          className="flex w-full min-h-[calc(100vh-80px)] items-center justify-center"
        >
          <div className="relative w-full">
            <Image
              src="/home/ogp.png"
              alt="Ayane's identity Ayanentity"
              width={1200}
              height={630}
              className="h-auto w-full object-contain"
              sizes="100vw"
              priority
            />
          </div>
        </section>

        <div className="mx-auto w-full max-w-7xl px-6 md:px-14">
          {/* ===== About me ===== */}
          <section className="mt-14 md:mt-20">
            <div className="flex flex-col gap-8">
              <h2 className="mb-6 text-[40px] font-bold tracking-[0.04em] text-[#D1180A]">
                About me
              </h2>

              <div className="grid gap-10 md:grid-cols-2 md:items-start">
                <div>
                  <h3 className="text-2xl font-extrabold text-[#2F2F2F]">
                    Nakazato Ayane
                  </h3>
                  <p className="mt-1 text-sm font-bold text-[#D1180A]">
                    Designer
                  </p>

                  <p className="mt-4 text-sm leading-relaxed text-[#2F2F2F]">
                    2003.5.20 / 沖縄県うるま市生まれ
                    <br />
                    小さい頃からものづくりが好きで、ハッカソンやインターン、個人活動を通して幅広いデザインに取り組んでいます。プロダクトからグラフィックまで、チームでアイデアを形にすることが大好きです。
                  </p>

                  <ul className="mt-6 space-y-2 text-xs font-bold leading-relaxed text-[#2F2F2F]">
                    <li>
                      2024.5　　
                      PBL学習「使ってもらって学ぶフィールド指向システムデザイン
                      すうぃふと2024」
                    </li>
                    <li>2025.3 　　Agile PBL祭り2025 登壇</li>
                    <li>2025.3 　　株式会社Progate デザイナーインターン</li>
                    <li>2025.5 　　高度ICT演習「Dotto」開発チームに参加</li>
                    <li>
                      2025.10 　　JPHACKS 2025 Hack Day 札幌会場Audience Award賞
                    </li>
                    <li>
                      2025.11 　　JPHACKS 2025 Award Day
                      イノベータ認定作品に選出
                    </li>
                    <li>2026.3 　　技育展2025 決勝出場</li>
                    <li>2026.3 　　P2HACKS 2025 Post-PBL部門 最優秀賞 </li>
                    <li>
                      2026.3 　　Progate Women's ハッカソン 2026 studist賞
                    </li>
                    <li>2026.3 　　Agile PBL祭り2026 登壇</li>
                    <li>2026.3 　　公立はこだて未来大学 卒業</li>
                  </ul>
                </div>

                <div className="flex justify-items-center pl-10 md:justify-end">
                  <div className="w-full max-w-[520px]">
                    <div className="relative h-full aspect-[4/4] overflow-hidden bg-white">
                      <Image
                        src="/home/about-right.png"
                        alt=""
                        fill
                        className="object-contain"
                        sizes="(max-width: 400px) 100vw, 260px"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ===== Interests ===== */}
          <section className="mt-60 md:mt-20">
            <h2 className="mb-24 text-[40px] font-bold tracking-[0.04em] text-[#D1180A]">
              What are your interests?
            </h2>

            <div className="flex flex-col gap-2">
              <div className="inline-flex flex-col gap-2">
                <span className="inline-flex w-fit rounded-sm bg-[#D1180A] px-2 py-1 text-[8px] md:text-[10px] font-bold text-white">
                  Designer Skill
                </span>
                <span className="inline-flex w-fit rounded-sm border border-[#D1180A] bg-white px-2 py-1 text-[8px] md:text-[10px] font-bold text-[#D1180A]">
                  General Skill
                </span>
              </div>

              <div className="mt-6 flex w-full justify-center">
                <div className="relative w-full max-w-5xl">
                  <div className="relative mx-auto w-full aspect-[16/9] md:aspect-[21/9]">
                    {/* axes */}
                    <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-[#E0E0E0]" />
                    <div className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-[#E0E0E0]" />

                    {/* labels */}
                    <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-6 text-[8px] md:text-[10px] font-semibold text-[#2F2F2F]">
                      経験あり
                    </div>
                    <div className="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-5 text-[8px] md:text-[10px] font-semibold text-[#2F2F2F]">
                      未経験
                    </div>
                    <div className="absolute left-0 top-1/2 -translate-x-8 -translate-y-1/2 text-[8px] md:text-[10px] font-semibold text-[#2F2F2F]">
                      興味あり
                    </div>
                    <div className="absolute right-0 top-1/2 translate-x-6 -translate-y-1/2 text-[8px] md:text-[10px] font-semibold text-[#2F2F2F]">
                      好き
                    </div>

                    {/* chips */}
                    {designerChips.map((c, idx) => (
                      <span
                        key={`d-${idx}`}
                        className="absolute inline-flex rounded-sm bg-[#D1180A] px-2 py-1 text-[6px] md:text-[10px] font-bold text-white"
                        style={{ left: c.left, top: c.top }}
                      >
                        {c.label}
                      </span>
                    ))}
                    {generalChips.map((c, idx) => (
                      <span
                        key={`g-${idx}`}
                        className="absolute inline-flex rounded-sm border border-[#D1180A] bg-white px-2 py-1 text-[6px] md:text-[10px] font-bold text-[#D1180A]"
                        style={{ left: c.left, top: c.top }}
                      >
                        {c.label}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <footer className="mt-14 text-center text-xs text-[#2F2F2F]">
            ©2026 Nakazato Ayane
          </footer>
        </div>
      </main>
    </div>
  );
}

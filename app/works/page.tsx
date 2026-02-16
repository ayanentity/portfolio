import { Header } from "../components/Header";

export default function WorksPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <main className="mx-auto max-w-6xl px-6 pt-28 pb-16">
        <h1 className="mb-4 text-3xl font-bold text-slate-900">Works</h1>
        <p className="text-slate-600">
          ここに制作実績一覧を表示します。（仮ページ）
        </p>
      </main>
    </div>
  );
}


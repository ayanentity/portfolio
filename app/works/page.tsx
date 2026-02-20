import { Header } from "../components/Header";

export default function WorksPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <Header />
      <main className="mx-auto max-w-6xl px-6 pt-28 pb-16">
        <h1 className="mb-8 text-3xl font-bold text-slate-900 dark:text-white">
          Works
        </h1>
        
        <div className="space-y-8">
          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
              Business Card
            </h2>
            <div className="w-full border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
              <iframe
                src="/works/business-card.pdf"
                className="w-full h-[50vh] min-h-[400px]"
                title="Business Card PDF"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}


import type { Metadata } from "next";
import {
  NEWS,
  CATEGORY_LABEL,
  CATEGORY_COLOR,
} from "@/lib/data";

export const metadata: Metadata = {
  title: "News",
  description: "Latest news from the H2CI Lab at POSTECH.",
};

function formatDate(d: string) {
  const parts = d.split("-");
  const date = new Date(Number(parts[0]), Number(parts[1]) - 1, Number(parts[2] ?? 1));
  return date.toLocaleDateString("en-US", { year: "numeric", month: "short" });
}

export default function NewsPage() {
  const sorted = [...NEWS].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <div className="py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Page header */}
        <div className="mb-16">
          <div className="brand-divider w-10 mb-5" />
          <h1 className="text-4xl sm:text-5xl font-extrabold text-stone-900 tracking-tight">
            News
          </h1>
        </div>

        {/* News list */}
        <div className="space-y-4">
          {sorted.map((item) => (
            <div
              key={item.id}
              className="card-hover bg-white rounded-xl border border-stone-100 shadow-sm p-5 flex gap-5 items-start"
            >
              <div className="flex-shrink-0 w-20 text-right">
                <span className="text-xs font-semibold text-stone-400 leading-tight block">
                  {formatDate(item.date)}
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                  <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${CATEGORY_COLOR[item.category]}`}>
                    {CATEGORY_LABEL[item.category]}
                  </span>
                </div>
                <p className="text-stone-800 text-sm leading-relaxed">{item.content}</p>
                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 mt-2 text-xs font-medium text-orange-600 hover:text-orange-700 transition-colors"
                  >
                    View →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {sorted.length === 0 && (
          <p className="text-center text-stone-400 py-16">No news yet.</p>
        )}
      </div>
    </div>
  );
}

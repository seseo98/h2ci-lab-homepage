import type { Metadata } from "next";
import { NEWS } from "@/lib/data";

export const metadata: Metadata = {
  title: "News",
  description: "Latest news from the H2CI Lab at POSTECH.",
};

function formatDate(d: string) {
  const parts = d.split("-");
  const date = new Date(Number(parts[0]), Number(parts[1]) - 1, Number(parts[2] ?? 1));
  return date.toLocaleDateString("en-US", { year: "numeric", month: "short" });
}

const TIMELINE_COLOR = "#A61955";
const CARD_GRADIENT_LEFT  = "linear-gradient(90deg, #F6A700, #CE602A, #A61955)";
const CARD_GRADIENT_RIGHT = "linear-gradient(90deg, #A61955, #CE602A, #F6A700)";

function NewsCard({ item, isLeft }: { item: (typeof NEWS)[number]; isLeft: boolean }) {
  const inner = (
    <div className="bg-white rounded-[10px]">
      <div className="px-6 py-5">
        <p className="text-stone-900 text-base font-bold leading-snug mb-2 text-left">
          {item.title}
        </p>
        <p className="text-stone-600 text-sm leading-relaxed text-left">
          {item.content}
        </p>
        <p className="text-stone-400 text-xs mt-2 text-left">
          {formatDate(item.date)}
        </p>
      </div>
    </div>
  );

  const wrapper = "block p-[2px] rounded-xl transition-opacity" + (item.link ? " cursor-pointer hover:opacity-80" : "");

  return item.link ? (
    <a href={item.link} target="_blank" rel="noopener noreferrer" className={wrapper} style={{ background: isLeft ? CARD_GRADIENT_LEFT : CARD_GRADIENT_RIGHT }}>
      {inner}
    </a>
  ) : (
    <div className={wrapper} style={{ background: isLeft ? CARD_GRADIENT_LEFT : CARD_GRADIENT_RIGHT }}>
      {inner}
    </div>
  );
}

export default function NewsPage() {
  const sorted = [...NEWS].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <div className="py-16 sm:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Page header */}
        <div className="mb-16 text-center">
          <div className="brand-divider w-24 mb-5 mx-auto" />
          <h1 className="font-rajdhani text-4xl sm:text-5xl font-extrabold text-stone-900 tracking-tight">
            News
          </h1>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical center line */}
          <div
            className="absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2"
            style={{ backgroundColor: TIMELINE_COLOR }}
          />
          {/* Top dot */}
          <div
            className="absolute left-1/2 top-0 w-3 h-3 rounded-full -translate-x-1/2 -translate-y-1.5"
            style={{ backgroundColor: TIMELINE_COLOR }}
          />

          <div className="space-y-10 pb-8">
            {sorted.map((item, i) => {
              const isLeft = i % 2 === 0;
              return (
                <div key={item.id} className="flex items-start w-full">
                  {isLeft ? (
                    <>
                      <div className="w-[45%]">
                        <NewsCard item={item} isLeft={true} />
                      </div>
                      <div className="w-[5%] pt-8 flex items-center">
                        <div className="w-full h-0.5" style={{ backgroundColor: TIMELINE_COLOR }} />
                      </div>
                      <div className="w-[50%]" />
                    </>
                  ) : (
                    <>
                      <div className="w-[50%]" />
                      <div className="w-[5%] pt-8 flex items-center">
                        <div className="w-full h-0.5" style={{ backgroundColor: TIMELINE_COLOR }} />
                      </div>
                      <div className="w-[45%]">
                        <NewsCard item={item} isLeft={false} />
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {sorted.length === 0 && (
          <p className="text-center text-stone-400 py-16">No news yet.</p>
        )}
      </div>
    </div>
  );
}

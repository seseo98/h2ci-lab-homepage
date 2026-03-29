import fs from "fs";
import path from "path";
import { PUBLICATIONS, RESEARCH_AREAS, NEWS } from "@/lib/data";
import HeroSection from "@/components/HeroSection";
import LabPhotoCarousel from "@/components/LabPhotoCarousel";

function formatDate(d: string) {
  const parts = d.split("-");
  const date = new Date(Number(parts[0]), Number(parts[1]) - 1, Number(parts[2] ?? 1));
  return date.toLocaleDateString("en-US", { year: "numeric", month: "short" });
}

export default function HomePage() {
  const labPhotoDir = path.join(process.cwd(), "public", "lab_photo");
  const labPhotos = fs
    .readdirSync(labPhotoDir)
    .filter((f) => /\.(jpe?g|png|webp|gif)$/i.test(f))
    .sort((a, b) => b.localeCompare(a))
    .map((f) => `/lab_photo/${f}`);

  const recentPubs = PUBLICATIONS.slice(0, 5);
  const recentNews = [...NEWS].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 5);

  const TIMELINE_COLOR = "#A61955";
  const CARD_GRADIENT_LEFT  = "linear-gradient(90deg, #F6A700, #CE602A, #A61955)";
  const CARD_GRADIENT_RIGHT = "linear-gradient(90deg, #A61955, #CE602A, #F6A700)";

  return (
    <div>
      {/* ── Hero ────────────────────────────────────────────── */}
      <HeroSection />

      {/* ── Lab Photo Carousel ──────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <LabPhotoCarousel photos={labPhotos} />
        </div>
      </section>

      {/* ── News ─────────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <div className="brand-divider w-32 mb-4 mx-auto" />
            <h2 className="section-title">Latest News</h2>
          </div>

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

            <div className="-space-y-2 pb-4">
              {recentNews.map((item, i) => {
                const isLeft = i % 2 === 0;
                const gradient = isLeft ? CARD_GRADIENT_LEFT : CARD_GRADIENT_RIGHT;
                const cardInner = (
                  <div className="bg-white rounded-[10px] px-5 py-4">
                    <p className="text-stone-900 text-sm font-bold leading-snug mb-1 text-left">{item.title}</p>
                    <p className="text-stone-600 text-xs leading-relaxed text-left">{item.content}</p>
                    <p className="text-stone-400 text-xs mt-1.5 text-left">{formatDate(item.date)}</p>
                  </div>
                );
                const cardWrapper = item.link ? (
                  <a href={item.link} target="_blank" rel="noopener noreferrer"
                    className="block p-[2px] rounded-xl transition-opacity hover:opacity-80 cursor-pointer"
                    style={{ background: gradient }}>
                    {cardInner}
                  </a>
                ) : (
                  <div className="p-[2px] rounded-xl" style={{ background: gradient }}>
                    {cardInner}
                  </div>
                );
                return (
                  <div key={item.id} className="flex items-start w-full">
                    {isLeft ? (
                      <>
                        <div className="w-[45%]">{cardWrapper}</div>
                        <div className="w-[5%] pt-6 flex items-center">
                          <div className="w-full h-0.5" style={{ backgroundColor: TIMELINE_COLOR }} />
                        </div>
                        <div className="w-[50%]" />
                      </>
                    ) : (
                      <>
                        <div className="w-[50%]" />
                        <div className="w-[5%] pt-6 flex items-center">
                          <div className="w-full h-0.5" style={{ backgroundColor: TIMELINE_COLOR }} />
                        </div>
                        <div className="w-[45%]">{cardWrapper}</div>
                      </>
                    )}
                  </div>
                );
              })}
            </div>

            {/* More button */}
            <div className="flex justify-center pt-2">
              <a
                href="/news"
                className="relative z-10 w-16 h-16 rounded-full flex items-center justify-center text-white text-sm font-semibold shadow-md transition-transform hover:scale-110"
                style={{ background: CARD_GRADIENT_LEFT }}
              >
                More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Research Areas ────────────────────────────────────── */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="brand-divider w-36 mx-auto mb-4" />
            <h2 className="section-title">Research Areas</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {RESEARCH_AREAS.map((area) => (
              <div key={area.title} className="text-left">
                <div className="text-5xl mb-5">{area.icon}</div>
                <h3 className="font-bold text-stone-900 text-lg mb-3">{area.title}</h3>
                <p className="text-stone-500 text-sm leading-relaxed">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Recent Publications ───────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <div className="brand-divider w-44 mb-4 mx-auto" />
            <h2 className="section-title">Recent Publications</h2>
          </div>

          <div className="space-y-4">
            {recentPubs.map((pub) => {
              const CardTag = pub.doi ? "a" : "div";
              const cardProps = pub.doi
                ? { href: pub.doi, target: "_blank", rel: "noopener noreferrer" }
                : {};
              return (
                <CardTag
                  key={pub.id}
                  {...(cardProps as object)}
                  className={`block bg-white rounded-xl p-6 border border-stone-100 shadow-sm transition-all duration-200 ${
                    pub.doi ? "hover:shadow-md hover:-translate-y-0.5 cursor-pointer" : ""
                  }`}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span
                      className="inline-block text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-md text-white"
                      style={{ backgroundColor: "#A61955CC" }}
                    >
                      {pub.year}
                    </span>
                    {pub.award && (
                      <span className="award-badge">🏆 {pub.award}</span>
                    )}
                  </div>
                  <h4 className="font-bold text-stone-900 text-base leading-snug mb-2">
                    {pub.title}
                  </h4>
                  <p className="text-stone-500 text-sm mb-2">{pub.authors}</p>
                  <p className="text-sm italic font-medium text-stone-700">{pub.venue}</p>
                </CardTag>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

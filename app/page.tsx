import { PUBLICATIONS, RESEARCH_AREAS, NEWS, CATEGORY_LABEL, CATEGORY_COLOR, LAB } from "@/lib/data";
import HeroCarousel from "@/components/HeroCarousel";

function formatDate(d: string) {
  const parts = d.split("-");
  const date = new Date(Number(parts[0]), Number(parts[1]) - 1, Number(parts[2] ?? 1));
  return date.toLocaleDateString("en-US", { year: "numeric", month: "short" });
}

export default function HomePage() {
  const recentPubs = PUBLICATIONS.slice(0, 4);
  const recentNews = [...NEWS].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 4);

  return (
    <div>
      {/* ── Hero ────────────────────────────────────────────── */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden -mt-16">
        {/* 그라디언트 배경 — 항상 유지 */}
        <div className="absolute inset-0 bg-brand-gradient opacity-[0.92]" />

        {/* Decorative circles */}
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full border border-white/10 opacity-30" />
        <div className="absolute top-[5%] right-[5%] w-[400px] h-[400px] rounded-full border border-white/10 opacity-20" />
        <div className="absolute bottom-[-5%] left-[-5%] w-[400px] h-[400px] rounded-full border border-white/10 opacity-20" />

        {/* Subtle grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          {/* 사진 있으면 → 좌우 반반 / 없으면 → 텍스트 중앙 */}
          <div className={`flex items-center gap-12 ${LAB.heroPhotos.length > 0 ? "flex-col sm:flex-row" : "justify-center"}`}>

            {/* ── 텍스트 영역 ── */}
            <div className={LAB.heroPhotos.length > 0 ? "flex-1 min-w-0" : "max-w-3xl text-center sm:text-left"}>
              {/* Eyebrow */}
              <div className={`inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 ${LAB.heroPhotos.length === 0 && "mx-auto sm:mx-0"}`}>
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                <span className="text-white/90 text-sm font-medium">POSTECH · Pohang, South Korea</span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-[1.05] tracking-tight mb-6">
                H2CI
                <br />
                <span className="text-white/80 font-light text-4xl sm:text-5xl lg:text-6xl mt-1 block">
                  Lab
                </span>
              </h1>

              <p className="text-xl sm:text-2xl text-white/90 font-light leading-relaxed mb-3">
                Health &amp; Human-Computer Interaction Lab
              </p>

              <p className="text-base sm:text-lg text-white/70 leading-relaxed max-w-2xl">
                We investigate how technology can better support health monitoring,
                communication, and care — bridging the gap between HCI research and
                real-world healthcare systems.
              </p>
            </div>

            {/* ── 슬라이드쇼 (사진 있을 때만 표시) ── */}
            {LAB.heroPhotos.length > 0 && (
              <HeroCarousel photos={LAB.heroPhotos} interval={4000} />
            )}
          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-16">
            <path d="M0 80L1440 80L1440 20C1200 60 960 0 720 20C480 40 240 0 0 20L0 80Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* ── News ─────────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="brand-divider w-10 mb-4" />
            <h2 className="section-title">Latest News</h2>
            <p className="section-subtitle">Papers, awards &amp; lab updates</p>
          </div>

          <div className="space-y-3">
            {recentNews.map((item) => (
              <div
                key={item.id}
                className="card-hover bg-white rounded-xl border border-stone-100 shadow-sm p-5 flex gap-5 items-start"
              >
                <div className="flex-shrink-0 w-20 text-right">
                  <span className="text-xs font-semibold text-stone-400">{formatDate(item.date)}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full mb-1.5 inline-block ${CATEGORY_COLOR[item.category]}`}>
                    {CATEGORY_LABEL[item.category]}
                  </span>
                  <p className="text-stone-800 text-sm leading-relaxed">{item.content}</p>
                  {item.link && (
                    <a href={item.link} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 mt-1.5 text-xs font-medium text-orange-600 hover:text-orange-700 transition-colors">
                      View →
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Recent Publications ───────────────────────────────── */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="brand-divider w-10 mb-4" />
            <h2 className="section-title">Recent Publications</h2>
            <p className="section-subtitle">Selected work from the H2CI Lab</p>
          </div>

          <div className="space-y-4">
            {recentPubs.map((pub, i) => (
              <div
                key={pub.id}
                className="card-hover bg-white rounded-xl p-6 border border-stone-100 shadow-sm flex gap-5 items-start"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="flex-shrink-0 text-center">
                  <span className="text-xs font-bold text-orange-500 bg-orange-50 px-2.5 py-1 rounded-lg block whitespace-nowrap">
                    {pub.venueShort}
                  </span>
                  <span className="text-xs text-stone-400 mt-1 block">{pub.year}</span>
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-start gap-2 flex-wrap mb-1">
                    {pub.award && (
                      <span className="award-badge flex-shrink-0">
                        🏆 {pub.award}
                      </span>
                    )}
                  </div>
                  <h4 className="font-semibold text-stone-900 text-base leading-snug mb-1.5">
                    {pub.doi ? (
                      <a href={pub.doi} target="_blank" rel="noopener noreferrer" className="hover:text-orange-600 transition-colors">
                        {pub.title}
                      </a>
                    ) : pub.title}
                  </h4>
                  <p className="text-stone-500 text-sm">{pub.authors}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Research Areas ────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="brand-divider w-10 mx-auto mb-4" />
            <h2 className="section-title">Research Areas</h2>
            <p className="section-subtitle max-w-xl mx-auto">
              At the intersection of health, technology, and human experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {RESEARCH_AREAS.map((area) => (
              <div key={area.title} className="card-hover bg-white rounded-2xl p-7 border border-stone-100 shadow-sm group">
                <div className="w-12 h-12 rounded-xl bg-brand-subtle flex items-center justify-center text-2xl mb-5 group-hover:scale-110 transition-transform duration-200">
                  {area.icon}
                </div>
                <h3 className="font-bold text-stone-900 text-lg mb-3">{area.title}</h3>
                <p className="text-stone-500 text-sm leading-relaxed mb-4">{area.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {area.tags.map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}

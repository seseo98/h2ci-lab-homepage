import Link from "next/link";
import { MEMBERS, PUBLICATIONS, RESEARCH_AREAS, NEWS, CATEGORY_LABEL, CATEGORY_COLOR, LAB } from "@/lib/data";
import MemberAvatar from "@/components/MemberAvatar";
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

              <p className="text-base sm:text-lg text-white/70 leading-relaxed mb-10 max-w-2xl">
                We investigate how technology can better support health monitoring,
                communication, and care — bridging the gap between HCI research and
                real-world healthcare systems.
              </p>

              <div className={`flex flex-wrap gap-4 ${LAB.heroPhotos.length === 0 && "justify-center sm:justify-start"}`}>
                <Link href="/research" className="btn-primary bg-white text-stone-800 hover:bg-white/90" style={{ backgroundImage: "none" }}>
                  Our Research
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link href="/publications" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white border border-white/30 hover:bg-white/10 transition-all duration-200">
                  Publications
                </Link>
                <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white border border-white/30 hover:bg-white/10 transition-all duration-200">
                  Join Us
                </Link>
              </div>
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
              <div
                key={area.title}
                className="card-hover bg-white rounded-2xl p-7 border border-stone-100 shadow-sm group"
              >
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

          <div className="text-center mt-10">
            <Link href="/research" className="btn-secondary">
              Explore Our Research
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Recent Publications ───────────────────────────────── */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
            <div>
              <div className="brand-divider w-10 mb-4" />
              <h2 className="section-title">Recent Publications</h2>
              <p className="section-subtitle">Selected work from the H2CI Lab</p>
            </div>
            <Link href="/publications" className="btn-secondary text-sm">
              View All
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          <div className="space-y-4">
            {recentPubs.map((pub, i) => (
              <div
                key={pub.id}
                className="card-hover bg-white rounded-xl p-6 border border-stone-100 shadow-sm flex gap-5 items-start"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                {/* Year badge */}
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
                      <a
                        href={pub.doi}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-orange-600 transition-colors"
                      >
                        {pub.title}
                      </a>
                    ) : (
                      pub.title
                    )}
                  </h4>
                  <p className="text-stone-500 text-sm">{pub.authors}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── News ─────────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
            <div>
              <div className="brand-divider w-10 mb-4" />
              <h2 className="section-title">Latest News</h2>
              <p className="section-subtitle">Papers, awards &amp; lab updates</p>
            </div>
            <Link href="/news" className="btn-secondary text-sm">
              All News
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
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

      {/* ── People Preview ─────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="brand-divider w-10 mx-auto mb-4" />
            <h2 className="section-title">Our Team</h2>
            <p className="section-subtitle">
              Researchers passionate about health technology and human-centered design
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {MEMBERS.map((member) => (
              <div key={member.id} className="text-center group">
                <div className="card-hover rounded-2xl p-5 border border-stone-100">
                  <MemberAvatar member={member} size="lg" className="mx-auto mb-4" />
                  <h4 className="font-semibold text-stone-900 text-sm">{member.name}</h4>
                  <p className="text-xs text-stone-500 mt-0.5">{member.roleLabel}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/people" className="btn-secondary">
              Meet the Team
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Join Us CTA ──────────────────────────────────────── */}
      <section className="py-20 bg-brand-subtle">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="brand-divider w-10 mx-auto mb-6" />
          <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-4">
            Interested in Joining?
          </h2>
          <p className="text-stone-500 text-lg leading-relaxed mb-8">
            We are looking for motivated graduate and undergraduate students who are
            passionate about health technology and human-centered research.
          </p>
          <Link href="/contact" className="btn-primary">
            Get in Touch
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { RESEARCH_AREAS, PUBLICATIONS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Research",
  description: "Research areas and projects at H2CI Lab, POSTECH.",
};

export default function ResearchPage() {
  return (
    <div className="py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Page header */}
        <div className="mb-16">
          <div className="brand-divider w-10 mb-5" />
          <h1 className="font-rajdhani text-4xl sm:text-5xl font-extrabold text-stone-900 tracking-tight mb-3">
            Research
          </h1>
        </div>

        {/* Research areas */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {RESEARCH_AREAS.map((area) => (
              <div
                key={area.title}
                className="card-hover bg-white rounded-2xl p-8 border border-stone-100 shadow-sm group"
              >
                <div className="w-14 h-14 rounded-2xl bg-brand-subtle flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-200">
                  {area.icon}
                </div>
                <h3 className="font-bold text-stone-900 text-xl mb-3">{area.title}</h3>
                <p className="text-stone-500 leading-relaxed mb-5">{area.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {area.tags.map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Research approach */}
        <section className="mb-20 bg-stone-50 rounded-2xl p-10">
          <h2 className="text-2xl font-bold text-stone-900 mb-6">Our Approach</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Understand",
                desc: "Interviews, surveys, and log analysis to understand how stakeholders use existing tools",
              },
              {
                step: "02",
                title: "Design",
                desc: "Developing prototypes and systems to explore novel design ideas for health contexts",
              },
              {
                step: "03",
                title: "Deploy",
                desc: "Real-world field deployments to test designs with actual users and healthcare providers",
              },
              {
                step: "04",
                title: "Evaluate",
                desc: "Rigorous evaluation of health outcomes, user experience, and design implications",
              },
            ].map((item) => (
              <div key={item.step} className="flex flex-col">
                <span className="text-gradient text-4xl font-extrabold mb-3">{item.step}</span>
                <h4 className="font-bold text-stone-900 mb-2">{item.title}</h4>
                <p className="text-stone-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Selected publications */}
        <section>
          <div className="flex items-end justify-between mb-8">
            <h2 className="text-2xl font-bold text-stone-900">Selected Publications</h2>
            <Link href="/publications" className="text-sm text-orange-600 hover:text-orange-700 font-medium transition-colors">
              View all →
            </Link>
          </div>
          <div className="space-y-4">
            {PUBLICATIONS.slice(0, 5).map((pub) => (
              <div key={pub.id} className="bg-white rounded-xl border border-stone-100 shadow-sm p-5 flex gap-5 items-start card-hover">
                <span className="text-xs font-bold text-orange-500 bg-orange-50 px-2.5 py-1 rounded-lg flex-shrink-0 whitespace-nowrap">
                  {pub.venueShort}
                </span>
                <div>
                  {pub.award && (
                    <span className="award-badge mb-2 inline-block">🏆 {pub.award}</span>
                  )}
                  <h4 className="font-semibold text-stone-900 text-sm leading-snug mb-1">
                    {pub.doi ? (
                      <a href={pub.doi} target="_blank" rel="noopener noreferrer" className="hover:text-orange-600 transition-colors">
                        {pub.title}
                      </a>
                    ) : pub.title}
                  </h4>
                  <p className="text-stone-500 text-xs">{pub.authors}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

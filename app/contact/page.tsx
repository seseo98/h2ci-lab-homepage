import type { Metadata } from "next";
import { LAB } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact H2CI Lab at POSTECH and learn about joining our team.",
};

export default function ContactPage() {
  return (
    <div className="py-16 sm:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Page header */}
        <div className="mb-16">
          <div className="brand-divider w-10 mb-5" />
          <h1 className="font-rajdhani text-4xl sm:text-5xl font-extrabold text-stone-900 tracking-tight mb-3">
            Contact
          </h1>
          <p className="text-stone-500 text-lg max-w-xl">
            Interested in our research or want to join the H2CI Lab? We&apos;d love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

          {/* ── Contact info (left) ──────────────────────────── */}
          <div className="lg:col-span-2 space-y-5">
            {/* Email */}
            <div className="bg-white rounded-2xl border border-stone-100 shadow-sm p-6">
              <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-stone-900 mb-1">Email</h3>
              <a
                href={`mailto:${LAB.email}`}
                className="text-sm text-orange-600 hover:text-orange-700 transition-colors"
              >
                {LAB.email}
              </a>
            </div>

            {/* Location */}
            <div className="bg-white rounded-2xl border border-stone-100 shadow-sm p-6">
              <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-stone-900 mb-1">Location</h3>
              <p className="text-stone-500 text-sm leading-relaxed">{LAB.location}</p>
              <a
                href="https://maps.google.com/?q=POSTECH+Pohang+South+Korea"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 mt-3 text-xs text-orange-600 hover:text-orange-700 font-medium transition-colors"
              >
                View on map →
              </a>
            </div>

            {/* PI */}
            <div className="bg-white rounded-2xl border border-stone-100 shadow-sm p-6">
              <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="font-semibold text-stone-900 mb-1">Principal Investigator</h3>
              <p className="text-sm text-stone-700 font-medium">Eunkyung Jo, PhD</p>
              <p className="text-xs text-stone-500 mt-0.5">Assistant Professor, CSE/GSAI</p>
              <a
                href="https://eunkyungjo.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 mt-3 text-xs text-orange-600 hover:text-orange-700 font-medium transition-colors"
              >
                Visit website →
              </a>
            </div>
          </div>

          {/* ── Join Us (right) ──────────────────────────────── */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl border border-stone-100 shadow-sm p-8">
              <h2 className="text-2xl font-bold text-stone-900 mb-2">Join Our Lab</h2>
              <div className="brand-divider w-8 mb-5" />
              <p className="text-stone-500 leading-relaxed mb-8">
                We are always looking for motivated and curious researchers to join the H2CI Lab.
                We value diverse backgrounds — whether you come from computer science, medicine,
                psychology, or design.
              </p>

              {/* Positions */}
              <div className="space-y-5 mb-8">
                {[
                  {
                    title: "Ph.D. Students",
                    icon: "🎓",
                    desc: "We look for students with strong curiosity and motivation for research in HCI, health informatics, or related areas. Background in CS, biomedical engineering, or social sciences is welcome.",
                  },
                  {
                    title: "M.S. Students",
                    icon: "📚",
                    desc: "We accept MS students interested in health technology and human-computer interaction research. Please check POSTECH's admission schedule.",
                  },
                  {
                    title: "Undergraduate Researchers",
                    icon: "🔬",
                    desc: "POSTECH undergrads interested in HCI and health technology are welcome to reach out about research opportunities.",
                  },
                ].map((pos) => (
                  <div
                    key={pos.title}
                    className="flex gap-4 p-5 rounded-xl bg-stone-50 border border-stone-100"
                  >
                    <span className="text-2xl flex-shrink-0">{pos.icon}</span>
                    <div>
                      <h4 className="font-semibold text-stone-900 mb-1.5">{pos.title}</h4>
                      <p className="text-stone-500 text-sm leading-relaxed">{pos.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* How to apply */}
              <div className="bg-brand-subtle rounded-xl p-6 border border-orange-100">
                <h4 className="font-bold text-stone-900 mb-2">How to Reach Out</h4>
                <p className="text-stone-500 text-sm leading-relaxed mb-4">
                  If you&apos;re interested in joining, please email Prof. Jo with:
                </p>
                <ul className="space-y-1.5 text-sm text-stone-500 mb-5">
                  {[
                    "A brief introduction about yourself",
                    "Your CV or resume",
                    "Your research interests and why you want to join H2CI Lab",
                    "Relevant experience or publications (if any)",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <svg className="w-4 h-4 mt-0.5 text-orange-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href={`mailto:${LAB.email}?subject=Interest in Joining H2CI Lab`}
                  className="btn-primary w-full justify-center"
                >
                  Send Email
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { MEMBERS } from "@/lib/data";
import MemberAvatar from "@/components/MemberAvatar";

export const metadata: Metadata = {
  title: "People",
  description: "Meet the researchers of H2CI Lab at POSTECH.",
};

export default function PeoplePage() {
  const pi = MEMBERS.find((m) => m.role === "pi")!;
  const phds = MEMBERS.filter((m) => m.role === "phd");
  const masters = MEMBERS.filter((m) => m.role === "ms");
  const undergrads = MEMBERS.filter((m) => m.role === "undergrad");

  return (
    <div className="py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Page header */}
        <div className="mb-16">
          <div className="brand-divider w-10 mb-5" />
          <h1 className="text-4xl sm:text-5xl font-extrabold text-stone-900 tracking-tight mb-3">
            People
          </h1>
          <p className="text-stone-500 text-lg max-w-xl">
            Meet the researchers behind H2CI Lab — driven by curiosity, care, and creativity.
          </p>
        </div>

        {/* ── Principal Investigator ─────────────────────────── */}
        <section className="mb-16">
          <h2 className="text-xs font-bold text-orange-500 uppercase tracking-widest mb-7">
            Principal Investigator
          </h2>
          <div className="bg-white rounded-2xl border border-stone-100 shadow-sm overflow-hidden">
            <div className="p-8 sm:p-10 flex flex-col sm:flex-row gap-8 items-start">
              <MemberAvatar member={pi} size="xl" className="flex-shrink-0" />

              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-1">
                  <h3 className="text-2xl font-bold text-stone-900">{pi.name}</h3>
                  <span className="text-stone-500 text-lg">({pi.nameKr})</span>
                </div>
                <p className="text-orange-600 font-medium mb-1">{pi.roleLabel}</p>
                <p className="text-stone-500 text-sm mb-5">{pi.affiliation}</p>

                <p className="text-stone-600 leading-relaxed mb-6 max-w-2xl">{pi.bio}</p>

                {/* Research interests */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {pi.research.map((r) => (
                    <span key={r} className="tag">{r}</span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex flex-wrap gap-3">
                  {pi.website && (
                    <a
                      href={pi.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-stone-600 hover:text-orange-600 transition-colors border border-stone-200 rounded-lg px-3 py-1.5 hover:border-orange-200 hover:bg-orange-50"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9" />
                      </svg>
                      Website
                    </a>
                  )}
                  {pi.email && (
                    <a
                      href={`mailto:${pi.email}`}
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-stone-600 hover:text-orange-600 transition-colors border border-stone-200 rounded-lg px-3 py-1.5 hover:border-orange-200 hover:bg-orange-50"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      Email
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── PhD Students ───────────────────────────────────── */}
        {phds.length > 0 && (
          <section className="mb-16">
            <h2 className="text-xs font-bold text-orange-500 uppercase tracking-widest mb-7">
              Ph.D. Students
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {phds.map((member) => (
                <StudentCard key={member.id} member={member} />
              ))}
            </div>
          </section>
        )}

        {/* ── MS Students ────────────────────────────────────── */}
        {masters.length > 0 && (
          <section className="mb-16">
            <h2 className="text-xs font-bold text-orange-500 uppercase tracking-widest mb-7">
              M.S. Students
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {masters.map((member) => (
                <StudentCard key={member.id} member={member} />
              ))}
            </div>
          </section>
        )}

        {/* ── Undergrad ──────────────────────────────────────── */}
        {undergrads.length > 0 && (
          <section className="mb-16">
            <h2 className="text-xs font-bold text-orange-500 uppercase tracking-widest mb-7">
              Undergraduate Researchers
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {undergrads.map((member) => (
                <StudentCard key={member.id} member={member} />
              ))}
            </div>
          </section>
        )}

        {/* ── Join Us ────────────────────────────────────────── */}
        <section className="bg-brand-subtle rounded-2xl p-8 sm:p-10 text-center">
          <h3 className="text-xl font-bold text-stone-900 mb-3">Join Our Team</h3>
          <p className="text-stone-500 mb-6 max-w-lg mx-auto">
            We welcome motivated students interested in HCI, health technology, and human-centered
            AI. Reach out to learn more about opportunities.
          </p>
          <Link href="/contact" className="btn-primary">
            Contact Us
          </Link>
        </section>
      </div>
    </div>
  );
}

function StudentCard({ member }: { member: (typeof MEMBERS)[number] }) {
  return (
    <div className="card-hover bg-white rounded-2xl border border-stone-100 shadow-sm p-6 flex gap-5 items-start">
      <MemberAvatar member={member} size="lg" className="flex-shrink-0" />
      <div className="flex-1 min-w-0">
        <div className="flex flex-wrap items-center gap-2 mb-0.5">
          <h3 className="font-bold text-stone-900">{member.name}</h3>
          <span className="text-stone-400 text-sm">({member.nameKr})</span>
        </div>
        <p className="text-orange-600 text-sm font-medium">{member.roleLabel}</p>
        <p className="text-stone-500 text-xs mb-3">{member.affiliation}</p>
        <p className="text-stone-500 text-sm leading-relaxed mb-3 line-clamp-3">
          {member.bio}
        </p>
        <div className="flex flex-wrap gap-1.5 mb-3">
          {member.research.map((r) => (
            <span key={r} className="tag text-xs">{r}</span>
          ))}
        </div>
        {member.website && (
          <a
            href={member.website}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-orange-600 hover:text-orange-700 font-medium transition-colors inline-flex items-center gap-1"
          >
            Website →
          </a>
        )}
      </div>
    </div>
  );
}

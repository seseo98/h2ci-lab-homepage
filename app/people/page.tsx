import type { Metadata } from "next";
import { MEMBERS, COLLABORATORS } from "@/lib/data";

export const metadata: Metadata = {
  title: "People",
  description: "Meet the researchers of H2CI Lab at POSTECH.",
};

const ROLE_ORDER = ["pi", "phd", "ms", "undergrad", "intern", "admin", "alumni"];

export default function PeoplePage() {
  const sorted = [...MEMBERS].sort(
    (a, b) => ROLE_ORDER.indexOf(a.role) - ROLE_ORDER.indexOf(b.role)
  );

  return (
    <div className="py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Page header */}
        <div className="mb-12 text-center">
          <div className="brand-divider w-24 mb-5 mx-auto" />
          <h1 className="font-rajdhani text-4xl sm:text-5xl font-extrabold text-stone-900 tracking-tight">
            People
          </h1>
        </div>

        {/* ── Members grid ─────────────────────────────────── */}
        <section className="mb-16">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {sorted.map((m) => (
              <MemberCard key={m.id} member={m} />
            ))}
          </div>
        </section>

        {/* ── Collaborators ──────────────────────────────────── */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-stone-900 mb-7">Collaborators</h2>
          <ul className="space-y-2">
            {COLLABORATORS.map((c) => (
              <li key={c.name} className="text-base">
                <a
                  href={c.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-stone-900 inline-block transition-transform duration-200 hover:-translate-y-0.5"
                >
                  {c.name}
                </a>
                <span className="text-stone-400">&nbsp;&nbsp;{c.affiliation}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}

function MemberCard({ member }: { member: (typeof MEMBERS)[number] }) {
  const initials = member.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="flex flex-col">
      {/* Square photo */}
      <div className="w-full aspect-square rounded-2xl overflow-hidden bg-stone-100 mb-4">
        {member.photo ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={member.photo}
            alt={member.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-3xl font-bold text-white bg-gradient-to-br from-orange-400 to-red-500">
            {initials}
          </div>
        )}
      </div>

      {/* Info */}
      <div className="text-left">
        <h3 className="font-bold text-stone-900 text-base leading-snug">{member.name}</h3>
        <p className="text-stone-400 text-sm">{member.nameKr}</p>
        <p className="text-stone-500 text-xs font-medium mt-1 mb-2">{member.roleLabel}</p>

        {/* Research bullet points */}
        {member.research.length > 0 && (
          <ul className="mb-3 space-y-0.5">
            {member.research.map((r) => (
              <li key={r} className="text-xs text-stone-500 flex items-start gap-1">
                <span className="mt-0.5 shrink-0">•</span>
                <span>{r}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Icon buttons */}
        <div className="flex gap-2">
          {member.email && (
            <a
              href={`mailto:${member.email}`}
              className="w-8 h-8 rounded-full border border-stone-200 flex items-center justify-center text-stone-500 hover:text-orange-600 hover:border-orange-200 hover:bg-orange-50 transition-colors"
              aria-label="Email"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          )}
          {member.website && (
            <a
              href={member.website}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full border border-stone-200 flex items-center justify-center text-stone-500 hover:text-orange-600 hover:border-orange-200 hover:bg-orange-50 transition-colors"
              aria-label="Website"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 22V12h6v10" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

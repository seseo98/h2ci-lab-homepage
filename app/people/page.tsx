import type { Metadata } from "next";
import fs from "fs";
import path from "path";
import { MEMBERS, COLLABORATORS } from "@/lib/data";
import LabPhotoCarousel from "@/components/LabPhotoCarousel";

export const metadata: Metadata = {
  title: "People",
  description: "Meet the researchers of H2CI Lab at POSTECH.",
};

export default function PeoplePage() {
  const labPhotoDir = path.join(process.cwd(), "public", "lab_photo");
  const labPhotos = fs
    .readdirSync(labPhotoDir)
    .filter((f) => /\.(jpe?g|png|webp|gif)$/i.test(f))
    .sort((a, b) => b.localeCompare(a))
    .map((f) => `/lab_photo/${f}`);

  const pi = MEMBERS.find((m) => m.role === "pi")!;
  const phds = MEMBERS.filter((m) => m.role === "phd");
  const masters = MEMBERS.filter((m) => m.role === "ms");
  const undergrads = MEMBERS.filter((m) => m.role === "undergrad");
  const interns = MEMBERS.filter((m) => m.role === "intern");
  const admins = MEMBERS.filter((m) => m.role === "admin");

  return (
    <div className="py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Page header */}
        <div className="mb-8 text-center">
          <div className="brand-divider w-24 mb-5 mx-auto" />
          <h1 className="font-rajdhani text-4xl sm:text-5xl font-extrabold text-stone-900 tracking-tight">
            People
          </h1>
        </div>

        {/* Lab photo carousel */}
        <div className="mb-16">
          <LabPhotoCarousel photos={labPhotos} />
        </div>

        {/* ── Faculty ─────────────────────────────────────────── */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-stone-900 mb-7">Faculty</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            <MemberCard member={pi} />
          </div>
        </section>

        {/* ── PhD Students ───────────────────────────────────── */}
        {phds.length > 0 && (
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-stone-900 mb-7">Ph.D. Students</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {phds.map((m) => (
                <MemberCard key={m.id} member={m} />
              ))}
            </div>
          </section>
        )}

        {/* ── M.S. Students ──────────────────────────────────── */}
        {masters.length > 0 && (
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-stone-900 mb-7">M.S. Students</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {masters.map((m) => (
                <MemberCard key={m.id} member={m} />
              ))}
            </div>
          </section>
        )}

        {/* ── Undergrad ──────────────────────────────────────── */}
        {undergrads.length > 0 && (
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-stone-900 mb-7">Undergraduate Researchers</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {undergrads.map((m) => (
                <MemberCard key={m.id} member={m} />
              ))}
            </div>
          </section>
        )}

        {/* ── Undergraduate Interns ──────────────────────────── */}
        {interns.length > 0 && (
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-stone-900 mb-7">Undergraduate Interns</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {interns.map((m) => (
                <MemberCard key={m.id} member={m} />
              ))}
            </div>
          </section>
        )}

        {/* ── Administrator ──────────────────────────────────── */}
        {admins.length > 0 && (
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-stone-900 mb-7">Administrator</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {admins.map((m) => (
                <MemberCard key={m.id} member={m} />
              ))}
            </div>
          </section>
        )}

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
      <div className="text-center">
        <h3 className="font-bold text-stone-900 text-base leading-snug">{member.name}</h3>
        <p className="text-stone-400 text-sm mb-3">{member.nameKr}</p>

        {/* Research tags */}
        <div className="flex flex-wrap justify-center gap-1 mb-3">
          {member.research.map((r) => (
            <span key={r} className="tag text-xs">{r}</span>
          ))}
        </div>

        {/* Icon buttons */}
        <div className="flex justify-center gap-2">
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

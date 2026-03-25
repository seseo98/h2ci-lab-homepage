import type { Metadata } from "next";
import { PUBLICATIONS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Publications",
  description: "Publications from the H2CI Lab at POSTECH.",
};


export default function PublicationsPage() {
  const years = Array.from(new Set(PUBLICATIONS.map((p) => p.year))).sort(
    (a, b) => b - a
  );

  return (
    <div className="py-16 sm:py-24 bg-stone-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Page header */}
        <div className="mb-14 text-center">
          <div className="brand-divider w-36 mb-5 mx-auto" />
          <h1 className="font-rajdhani text-4xl sm:text-5xl font-extrabold text-stone-900 tracking-tight">
            Publications
          </h1>
        </div>

        {/* Publications grouped by year */}
        <div className="space-y-14">
          {years.map((year) => {
            const pubs = PUBLICATIONS.filter((p) => p.year === year);
            return (
              <div key={year}>
                {/* Year heading */}
                <div className="mb-6">
                  <h2 className="text-3xl font-extrabold text-stone-900 mb-2">{year}</h2>
                  <div className="h-px bg-stone-200" />
                </div>

                {/* Cards */}
                <div className="space-y-4">
                  {pubs.map((pub) => {
                    const CardTag = pub.doi ? "a" : "div";
                    const cardProps = pub.doi
                      ? { href: pub.doi, target: "_blank", rel: "noopener noreferrer" }
                      : {};

                    return (
                      <CardTag
                        key={pub.id}
                        {...(cardProps as object)}
                        className={`block bg-white rounded-xl border border-stone-100 shadow-sm p-6 transition-all duration-200 ${
                          pub.doi ? "hover:shadow-md hover:-translate-y-0.5 cursor-pointer" : ""
                        }`}
                      >
                        {/* Award badge */}
                        {pub.award && (
                          <div className="mb-3">
                            <span className="award-badge">🏆 {pub.award}</span>
                          </div>
                        )}

                        {/* Type badge */}
                        <div className="mb-2">
                          <span
                            className="inline-block text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-md text-white"
                            style={{ backgroundColor: pub.type === "conference" ? "#F6A700CC" : "#A61955CC" }}
                          >
                            {pub.type}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="font-bold text-stone-900 leading-snug mb-2 text-base">
                          {pub.title}
                        </h3>

                        {/* Authors */}
                        <p className="text-stone-500 text-sm mb-2">{pub.authors}</p>

                        {/* Venue */}
                        <p className="text-sm italic font-medium text-stone-700">
                          {pub.venue}
                        </p>
                      </CardTag>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {PUBLICATIONS.length === 0 && (
          <p className="text-center text-stone-400 py-16">No publications yet.</p>
        )}
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import { PUBLICATIONS } from "@/lib/data";

export default function PublicationsPage() {
  const years = Array.from(new Set(PUBLICATIONS.map((p) => p.year))).sort(
    (a, b) => b - a
  );
  const [filterYear, setFilterYear] = useState<number | "all">("all");
  const [filterType, setFilterType] = useState<"all" | "conference" | "journal">("all");

  const filtered = PUBLICATIONS.filter((p) => {
    const yearMatch = filterYear === "all" || p.year === filterYear;
    const typeMatch = filterType === "all" || p.type === filterType;
    return yearMatch && typeMatch;
  });

  return (
    <div className="py-16 sm:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Page header */}
        <div className="mb-12">
          <div className="brand-divider w-10 mb-5" />
          <h1 className="text-4xl sm:text-5xl font-extrabold text-stone-900 tracking-tight mb-3">
            Publications
          </h1>
          <p className="text-stone-500 text-lg">
            {PUBLICATIONS.length} publications · Selected work from H2CI Lab
          </p>
        </div>

        {/* Filter bar */}
        <div className="flex flex-wrap gap-3 mb-10 pb-8 border-b border-stone-100">
          {/* Year filter */}
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs font-semibold text-stone-400 uppercase tracking-wider">Year:</span>
            <button
              onClick={() => setFilterYear("all")}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                filterYear === "all"
                  ? "bg-gradient-to-r from-orange-500 to-rose-500 text-white shadow-sm"
                  : "bg-stone-100 text-stone-600 hover:bg-stone-200"
              }`}
            >
              All
            </button>
            {years.map((y) => (
              <button
                key={y}
                onClick={() => setFilterYear(y)}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                  filterYear === y
                    ? "bg-gradient-to-r from-orange-500 to-rose-500 text-white shadow-sm"
                    : "bg-stone-100 text-stone-600 hover:bg-stone-200"
                }`}
              >
                {y}
              </button>
            ))}
          </div>

          {/* Type filter */}
          <div className="flex items-center gap-2 ml-auto">
            <span className="text-xs font-semibold text-stone-400 uppercase tracking-wider">Type:</span>
            {(["all", "conference", "journal"] as const).map((t) => (
              <button
                key={t}
                onClick={() => setFilterType(t)}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium capitalize transition-all ${
                  filterType === t
                    ? "bg-gradient-to-r from-orange-500 to-rose-500 text-white shadow-sm"
                    : "bg-stone-100 text-stone-600 hover:bg-stone-200"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* Publications list grouped by year */}
        {years
          .filter((y) => filterYear === "all" || y === filterYear)
          .map((year) => {
            const pubs = filtered.filter((p) => p.year === year);
            if (pubs.length === 0) return null;
            return (
              <div key={year} className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-2xl font-extrabold text-gradient">{year}</span>
                  <div className="flex-1 h-px bg-stone-100" />
                </div>
                <div className="space-y-4">
                  {pubs.map((pub) => (
                    <div
                      key={pub.id}
                      className="card-hover bg-white rounded-xl border border-stone-100 shadow-sm p-6 group"
                    >
                      {/* Award badge */}
                      {pub.award && (
                        <div className="mb-3">
                          <span className="award-badge">🏆 {pub.award}</span>
                        </div>
                      )}

                      {/* Title */}
                      <h3 className="font-semibold text-stone-900 leading-snug mb-2 text-[15px] group-hover:text-orange-700 transition-colors">
                        {pub.doi ? (
                          <a
                            href={pub.doi}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {pub.title}
                          </a>
                        ) : (
                          pub.title
                        )}
                      </h3>

                      {/* Authors */}
                      <p className="text-stone-500 text-sm mb-3">{pub.authors}</p>

                      {/* Venue + links */}
                      <div className="flex flex-wrap items-center gap-3">
                        <span
                          className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full ${
                            pub.type === "conference"
                              ? "bg-orange-50 text-orange-700"
                              : "bg-rose-50 text-rose-700"
                          }`}
                        >
                          {pub.type === "conference" ? "📄" : "📰"} {pub.venueShort}
                        </span>

                        {pub.doi && (
                          <a
                            href={pub.doi}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-stone-400 hover:text-orange-600 font-medium transition-colors inline-flex items-center gap-1"
                          >
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                            DOI
                          </a>
                        )}
                        {pub.pdf && (
                          <a
                            href={pub.pdf}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-stone-400 hover:text-orange-600 font-medium transition-colors inline-flex items-center gap-1"
                          >
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            PDF
                          </a>
                        )}

                        <div className="flex flex-wrap gap-1.5 ml-auto">
                          {pub.tags.slice(0, 3).map((tag) => (
                            <span key={tag} className="tag">{tag}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}

        {filtered.length === 0 && (
          <div className="text-center py-20 text-stone-400">
            <p className="text-lg">No publications found for selected filters.</p>
          </div>
        )}
      </div>
    </div>
  );
}

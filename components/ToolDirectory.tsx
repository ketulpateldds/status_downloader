import React from "react";
import Link from "next/link";
import { platformList } from "@/content/platforms";
import { ArrowUpRight } from "lucide-react";

export function ToolDirectory() {
  return (
    <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b border-border gap-4">
        <div>
          <span className="font-mono text-xs uppercase text-signal font-semibold tracking-wider block mb-1">
            &bull; ARCHIVAL DIRECTORY
          </span>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl text-ink">
            Platform Utilities & Dedicated Dispatches
          </h2>
        </div>
        <p className="font-sans text-xs text-ink-muted max-w-md leading-relaxed">
          Each platform encodes video with distinct compression heuristics and
          CDNs. Explore dedicated tools tuned specifically for each service.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {platformList.map((plat) => (
          <Link
            key={plat.slug}
            href={"/" + plat.slug}
            className="wire-card p-6 flex flex-col justify-between group hover:shadow-tactile hover:-translate-y-1 transition-all"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-semibold px-2 py-0.5 wire-border bg-paper text-ink">
                  {plat.slug.toUpperCase()}
                </span>
                <div className="w-7 h-7 wire-border flex items-center justify-center text-ink-muted group-hover:text-signal group-hover:border-signal transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              <div>
                <h3 className="font-serif font-bold text-xl text-ink group-hover:text-signal transition-colors">
                  {plat.name}
                </h3>
                <p className="font-sans text-xs text-ink-muted mt-2 leading-relaxed">
                  {plat.tagline}
                </p>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-border-subtle flex flex-wrap gap-1 font-mono text-[10px] text-ink-faint">
              {plat.toolModes.map((mode) => (
                <span
                  key={mode.id}
                  className="bg-paper-2 px-1.5 py-0.5 border border-border-subtle"
                >
                  {mode.label}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

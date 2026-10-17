import React from 'react';
import Link from 'next/link';
import { Search, ArrowLeft, ArrowRight, HelpCircle, Download } from 'lucide-react';
import { popularPlatformsList } from '@/data/platforms';

export default function NotFound() {
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-20 text-center space-y-8 font-sans">
      
      {/* 404 Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-brand-blue text-xs font-bold uppercase tracking-wider">
        <span>ERROR 404 &bull; PAGE NOT FOUND</span>
      </div>

      {/* Headline */}
      <h1 className="text-4xl sm:text-5xl font-extrabold text-navy tracking-tight leading-tight">
        Oops! We Couldn&apos;t Find <br />
        That Page
      </h1>

      <p className="text-base text-navy-muted leading-relaxed max-w-lg mx-auto">
        The link you followed might be broken or the page may have been moved. Try searching below or explore our popular downloaders.
      </p>

      {/* Search Input using standard GET form */}
      <form action="/help" method="GET" className="max-w-md mx-auto relative">
        <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          name="q"
          placeholder="Search tools, platforms, or help..."
          className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white border border-slate-200 text-sm text-navy placeholder:text-slate-400 shadow-soft focus:outline-none focus:border-brand-blue focus:ring-4 focus:ring-blue-500/10 transition-all"
        />
      </form>

      {/* Popular platforms pills */}
      <div className="pt-4 space-y-3">
        <div className="text-xs font-bold uppercase text-slate-400 tracking-wider">
          POPULAR DOWNLOADERS
        </div>
        <div className="flex flex-wrap items-center justify-center gap-2">
          {popularPlatformsList.slice(0, 6).map((plat) => (
            <Link
              key={plat.slug}
              href={`/${plat.slug}`}
              className="px-3.5 py-1.5 rounded-xl bg-white border border-slate-200 text-xs font-bold text-navy hover:text-brand-blue hover:border-brand-blue shadow-sm transition-all"
            >
              {plat.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Return Home Button */}
      <div className="pt-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-gradient text-white text-sm font-bold shadow-glow hover:opacity-95 transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home Downloader</span>
        </Link>
      </div>

    </div>
  );
}

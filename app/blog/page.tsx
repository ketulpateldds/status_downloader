import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { sampleArticles } from '@/content/blog';
import { ArrowRight, BookOpen, Clock, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Guides, Tutorials & Tips · Dispatch',
  description: 'Simple guides on downloading videos, extracting high-quality MP3 audio, and converting media on any device.',
};

export default function BlogIndexPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-50 text-brand-blue text-xs font-bold uppercase tracking-wider">
          <BookOpen className="w-3.5 h-3.5" />
          <span>HELPFUL GUIDES & TUTORIALS</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-navy tracking-tight">
          How-To Guides & Tips
        </h1>
        <p className="text-base text-navy-muted leading-relaxed">
          Step-by-step instructions for saving videos, converting audio, and getting the best quality on iPhone, Android, and PC.
        </p>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {sampleArticles.map((article) => (
          <article
            key={article.slug}
            className="bg-white rounded-3xl border border-slate-100 shadow-soft overflow-hidden card-hover flex flex-col group"
          >
            {article.imageUrl && (
              <div className="h-56 w-full overflow-hidden bg-slate-100 relative">
                <img
                  src={article.imageUrl}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold bg-white/95 text-navy shadow-sm backdrop-blur-sm">
                  {article.category}
                </span>
              </div>
            )}

            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-xs text-navy-muted">
                  <span>{article.publishedDate}</span>
                  <span>&bull;</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {article.readTime}
                  </span>
                </div>

                <h2 className="text-xl sm:text-2xl font-bold text-navy group-hover:text-brand-blue transition-colors">
                  <Link href={`/blog/${article.slug}`}>
                    {article.title}
                  </Link>
                </h2>

                <p className="text-sm text-navy-muted leading-relaxed line-clamp-3">
                  {article.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-navy-muted">By {article.author}</span>
                <Link
                  href={`/blog/${article.slug}`}
                  className="inline-flex items-center gap-1 text-sm font-bold text-brand-blue hover:underline"
                >
                  <span>Read Guide</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Downloader CTA */}
      <div className="bg-band-gradient rounded-3xl p-8 sm:p-10 text-white text-center space-y-4 shadow-card">
        <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
          Ready to save your media?
        </h3>
        <p className="text-white/85 max-w-lg mx-auto text-sm sm:text-base">
          Get started with our free, high-speed downloader. No account or installation required.
        </p>
        <div className="pt-2">
          <Link
            href="/#downloader"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-brand-blue font-bold text-sm shadow-md hover:bg-slate-50 transition-all"
          >
            <span>Go to Downloader</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

    </div>
  );
}

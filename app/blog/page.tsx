import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { sampleArticles } from '@/content/blog';
import { ArrowRight, BookOpen, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Archival Dispatches & Codec Research · Dispatch Blog',
  description: 'Deep dives on public digital preservation, stream multiplexing, video codecs, and fair use copyright law.',
};

export default function BlogIndexPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16 space-y-12">
      <div className="border-b border-border pb-6 space-y-2">
        <span className="font-mono text-xs uppercase text-signal font-semibold tracking-wider">
          &bull; EDITORIAL DISPATCHES
        </span>
        <h1 className="font-serif font-bold text-4xl sm:text-5xl text-ink">
          The Archival Gazette
        </h1>
        <p className="font-sans text-sm text-ink-muted max-w-xl leading-relaxed">
          Essays and technical field notes on public web preservation, video bitrate engineering, and digital rights ethics.
        </p>
      </div>

      <div className="space-y-8">
        {sampleArticles.map((article) => (
          <article
            key={article.slug}
            className="wire-card p-6 sm:p-8 space-y-4 hover:shadow-tactile hover:-translate-y-0.5 transition-all"
          >
            <div className="flex flex-wrap items-center justify-between text-xs font-mono text-ink-muted gap-2">
              <span className="px-2 py-0.5 bg-paper-2 border border-border text-signal font-semibold uppercase">
                {article.category}
              </span>
              <div className="flex items-center gap-3 text-ink-faint">
                <span>{article.publishedDate}</span>
                <span>·</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {article.readTime}
                </span>
              </div>
            </div>

            <h2 className="font-serif font-bold text-2xl sm:text-3xl text-ink hover:text-signal transition-colors">
              <Link href={`/blog/${article.slug}`}>
                {article.title}
              </Link>
            </h2>

            <p className="font-sans text-sm text-ink-muted leading-relaxed">
              {article.excerpt}
            </p>

            <div className="pt-4 border-t border-border-subtle flex items-center justify-between font-mono text-xs">
              <span className="text-ink-muted">BY {article.author}</span>
              <Link
                href={`/blog/${article.slug}`}
                className="text-signal hover:underline font-semibold flex items-center gap-1"
              >
                <span>Read Dispatch</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

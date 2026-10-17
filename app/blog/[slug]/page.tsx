import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { sampleArticles } from '@/content/blog';
import { Clock, ArrowLeft, ArrowRight, Share2, Sparkles, BookOpen } from 'lucide-react';

interface BlogPostProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return sampleArticles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: BlogPostProps): Promise<Metadata> {
  const { slug } = await params;
  const post = sampleArticles.find((a) => a.slug === slug);
  if (!post) return { title: 'Guide Not Found · Dispatch' };

  return {
    title: `${post.title} · Dispatch Guides`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      siteName: 'Dispatch',
      images: post.imageUrl ? [{ url: post.imageUrl }] : undefined,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostProps) {
  const { slug } = await params;
  const post = sampleArticles.find((a) => a.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      
      {/* Back button */}
      <div>
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm font-semibold text-navy-muted hover:text-brand-blue transition-colors px-3 py-1.5 rounded-lg bg-white border border-slate-200/80 shadow-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>All Guides</span>
        </Link>
      </div>

      {/* Header */}
      <div className="space-y-4 pb-6 border-b border-slate-100">
        <div className="flex items-center gap-2 text-xs font-bold text-brand-blue uppercase tracking-wider">
          <span className="px-2.5 py-1 rounded-full bg-blue-50 border border-blue-100">
            {post.category}
          </span>
          <span className="text-slate-300">&bull;</span>
          <span className="text-navy-muted flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            {post.readTime}
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-navy tracking-tight leading-[1.2]">
          {post.title}
        </h1>

        <div className="flex items-center justify-between text-xs sm:text-sm text-navy-muted pt-2">
          <span>By <strong className="text-navy">{post.author}</strong></span>
          <span>{post.publishedDate}</span>
        </div>
      </div>

      {/* Cover Image */}
      {post.imageUrl && (
        <div className="rounded-3xl overflow-hidden shadow-card max-h-[420px] w-full">
          <img
            src={post.imageUrl}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* Content */}
      <div className="bg-white rounded-3xl border border-slate-100 p-6 sm:p-10 shadow-soft space-y-6 text-navy-muted text-base sm:text-lg leading-relaxed">
        
        {/* Intro Excerpt Callout */}
        <div className="p-4 sm:p-5 rounded-2xl bg-blue-50/70 border border-blue-100 text-navy font-medium text-base">
          {post.excerpt}
        </div>

        {/* Markdown content rendering */}
        <div className="space-y-5 text-navy leading-relaxed">
          {post.contentMarkdown.split('\n\n').map((paragraph, idx) => {
            if (paragraph.startsWith('### ')) {
              return (
                <h2 key={idx} className="text-xl sm:text-2xl font-extrabold text-navy pt-4">
                  {paragraph.replace('### ', '')}
                </h2>
              );
            }
            if (paragraph.startsWith('- ')) {
              const items = paragraph.split('\n');
              return (
                <ul key={idx} className="list-disc pl-6 space-y-2 text-navy-muted text-base">
                  {items.map((it, i) => (
                    <li key={i}>{it.replace(/^- \*\*(.*?)\*\*:?/, '$1:').replace(/^- /, '')}</li>
                  ))}
                </ul>
              );
            }
            if (/^\d+\. /.test(paragraph)) {
              const items = paragraph.split('\n');
              return (
                <ol key={idx} className="list-decimal pl-6 space-y-2 text-navy-muted text-base">
                  {items.map((it, i) => (
                    <li key={i}>{it.replace(/^\d+\. /, '')}</li>
                  ))}
                </ol>
              );
            }
            return (
              <p key={idx} className="text-base text-navy-muted leading-relaxed">
                {paragraph}
              </p>
            );
          })}
        </div>

      </div>

      {/* Footer Navigation */}
      <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
        <Link
          href="/blog"
          className="text-sm font-semibold text-navy-muted hover:text-navy flex items-center gap-1.5"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Guides</span>
        </Link>

        <Link
          href="/#downloader"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-gradient text-white text-sm font-bold shadow-glow hover:opacity-95 transition-all"
        >
          <span>Try Dispatch Free</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

    </article>
  );
}

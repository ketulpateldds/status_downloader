import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { sampleArticles } from '@/content/blog';
import { Clock, ArrowLeft, Share2 } from 'lucide-react';

interface BlogPostProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return sampleArticles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: BlogPostProps): Promise<Metadata> {
  const { slug } = await params;
  const post = sampleArticles.find((a) => a.slug === slug);
  if (!post) return { title: 'Dispatch Not Found' };

  return {
    title: `${post.title} · Dispatch Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: BlogPostProps) {
  const { slug } = await params;
  const post = sampleArticles.find((a) => a.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 py-16 space-y-8 font-sans">
      <Link
        href="/blog"
        className="inline-flex items-center gap-1.5 font-mono text-xs text-ink-muted hover:text-signal"
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        <span>BACK TO ALL DISPATCHES</span>
      </Link>

      <div className="space-y-4 border-b border-border pb-6">
        <div className="flex items-center gap-2 font-mono text-xs text-signal font-semibold uppercase">
          <span>&bull; {post.category}</span>
          <span>·</span>
          <span className="text-ink-muted">{post.readTime}</span>
        </div>

        <h1 className="font-serif font-bold text-3xl sm:text-5xl text-ink leading-tight">
          {post.title}
        </h1>

        <div className="font-mono text-xs text-ink-faint flex items-center justify-between pt-2">
          <span>WRITTEN BY {post.author.toUpperCase()}</span>
          <span>{post.publishedDate}</span>
        </div>
      </div>

      <div className="prose prose-neutral dark:prose-invert max-w-none text-ink-muted leading-relaxed font-sans space-y-6 text-sm sm:text-base">
        <p className="font-serif text-lg text-ink italic leading-relaxed border-l-2 border-signal pl-4 my-6">
          {post.excerpt}
        </p>

        <div className="space-y-4">
          {post.contentMarkdown.split('\n\n').map((paragraph, idx) => {
            if (paragraph.startsWith('# ')) {
              return null; // already displayed as H1
            }
            if (paragraph.startsWith('### ')) {
              return (
                <h3 key={idx} className="font-serif font-bold text-xl text-ink pt-4">
                  {paragraph.replace('### ', '')}
                </h3>
              );
            }
            if (paragraph.startsWith('> ')) {
              return (
                <blockquote key={idx} className="border-l-2 border-signal pl-4 font-serif text-ink italic py-1">
                  {paragraph.replace('> ', '')}
                </blockquote>
              );
            }
            return (
              <p key={idx} className="leading-relaxed">
                {paragraph}
              </p>
            );
          })}
        </div>
      </div>

      <div className="pt-8 border-t border-border flex items-center justify-between font-mono text-xs text-ink-muted">
        <Link href="/blog" className="hover:underline">
          &larr; More Editorial Dispatches
        </Link>
        <Link href="/" className="text-signal hover:underline font-bold">
          Open Downloader Workbench &rarr;
        </Link>
      </div>
    </article>
  );
}

import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ShieldCheck, Heart, Sparkles, Zap, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Dispatch · Fast, Safe & Free Media Downloader',
  description: 'Learn why we built Dispatch: to provide a clean, fast, and easy-to-use media tool for everyone without ads or complications.',
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-50 text-brand-blue text-xs font-bold uppercase tracking-wider">
          <Heart className="w-3.5 h-3.5 fill-current" />
          <span>OUR MISSION & STORY</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-navy tracking-tight">
          About Dispatch
        </h1>
        <p className="text-base text-navy-muted leading-relaxed">
          Built so anyone &mdash; regardless of technical skills &mdash; can save and convert public videos, music, and photos in seconds.
        </p>
      </div>

      {/* Main Content */}
      <div className="bg-white rounded-3xl border border-slate-100 p-6 sm:p-10 shadow-soft space-y-8 text-navy-muted text-base leading-relaxed">
        
        <div className="space-y-4">
          <h2 className="text-2xl font-extrabold text-navy">
            A Better Way to Save Your Media
          </h2>
          <p>
            For years, online video downloaders have had a terrible reputation: full of deceptive pop-ups, fake download buttons, confusing technical terms, and intrusive ads. Everyday people who just wanted to save a cooking recipe video, study lecture, or family memory were faced with a frustrating maze.
          </p>
          <p>
            <strong className="text-navy">We built Dispatch to change that forever.</strong> Designed with bright, friendly colors and plain language, Dispatch treats you with respect. There are no misleading ads, no software to install, and no accounts required.
          </p>
        </div>

        {/* 3 Core Values */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
          <div className="p-5 rounded-2xl bg-blue-50/60 border border-blue-100 space-y-2">
            <Zap className="w-6 h-6 text-brand-blue" />
            <h3 className="font-bold text-base text-navy">Lightning Fast</h3>
            <p className="text-xs text-navy-muted">
              Paste your link and your file is ready in seconds. No waiting queues or slow limits.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-emerald-50/60 border border-emerald-100 space-y-2">
            <ShieldCheck className="w-6 h-6 text-emerald-600" />
            <h3 className="font-bold text-base text-navy">100% Private</h3>
            <p className="text-xs text-navy-muted">
              We never save or store your files. Downloads transfer directly to your device with complete privacy.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-purple-50/60 border border-purple-100 space-y-2">
            <Sparkles className="w-6 h-6 text-purple-600" />
            <h3 className="font-bold text-base text-navy">Zero Tech Skills</h3>
            <p className="text-xs text-navy-muted">
              Simple 3-step process that works intuitively on iPhone, Android, Mac, and Windows.
            </p>
          </div>
        </div>

        <div className="space-y-4 pt-2">
          <h2 className="text-2xl font-extrabold text-navy">
            Commitment to Fair Use & Safety
          </h2>
          <p>
            Dispatch operates strictly on open, publicly viewable web URLs. We never bypass passwords or private groups. We support educators, creators, and individuals saving content for personal offline study under international fair use doctrines.
          </p>
        </div>

      </div>

      {/* CTA Band */}
      <div className="bg-band-gradient rounded-3xl p-8 sm:p-10 text-white text-center space-y-4 shadow-card">
        <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
          Experience the difference today
        </h3>
        <p className="text-white/85 max-w-md mx-auto text-sm sm:text-base">
          Join millions of happy users saving videos and music without hassle.
        </p>
        <div className="pt-2">
          <Link
            href="/#downloader"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-brand-blue font-bold text-sm shadow-md hover:bg-slate-50 transition-all"
          >
            <span>Try Dispatch Free</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

    </div>
  );
}

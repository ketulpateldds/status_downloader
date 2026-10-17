import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { AlertCircle, ShieldAlert } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Disclaimer & Trademark Notice · Dispatch',
  description: 'Notice of non-affiliation and trademark ownership.',
};

export default function DisclaimerPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      
      {/* Header */}
      <div className="text-center max-w-xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-50 text-amber-800 text-xs font-bold uppercase tracking-wider">
          <ShieldAlert className="w-3.5 h-3.5 text-amber-600" />
          <span>LEGAL DISCLAIMER</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-navy tracking-tight">
          Disclaimer
        </h1>
        <p className="text-base text-navy-muted">
          Notice of non-affiliation and fair use doctrines.
        </p>
      </div>

      <div className="bg-white rounded-3xl border border-slate-100 p-6 sm:p-10 shadow-soft space-y-8 text-navy-muted text-base leading-relaxed">
        
        <div className="space-y-3">
          <h2 className="text-xl font-bold text-navy">Non-Affiliation Notice</h2>
          <p>
            Dispatch is an independent online web utility. We are <strong>NOT affiliated, associated, authorized, endorsed by, or in any way officially connected</strong> with YouTube, Google LLC, Instagram, Facebook, Meta Platforms Inc., TikTok, ByteDance Ltd., X Corp., Pinterest Inc., or Snap Inc.
          </p>
          <p>
            All product names, logos, brands, and registered trademarks displayed on this website belong to their respective owners. Their use on this website is for descriptive and identification purposes only.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-xl font-bold text-navy">User Responsibility</h2>
          <p>
            Dispatch does not host or store media files. The tools provided are intended solely for personal offline archiving and fair use study. Users bear full responsibility for ensuring they have the legal right or explicit permission to save and store any content.
          </p>
        </div>

      </div>

      {/* Respect Copyright & Creator Rights Policy Note */}
      <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-center text-navy-muted space-y-1">
        <div className="font-semibold text-navy">
          Respect Copyright & Creator Rights
        </div>
        <p>
          Only download public content that you own or have permission to
          save. Dispatch supports ethical personal use and fair use study.
          Read our full{" "}
          <Link
            href="/dmca"
            className="text-brand-blue hover:underline font-semibold"
          >
            DMCA Policy
          </Link>
          .
        </p>
      </div>

    </div>
  );
}

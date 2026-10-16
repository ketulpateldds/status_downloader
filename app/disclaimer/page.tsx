import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Legal Disclaimer · Dispatch',
  description: 'Notice of non-affiliation and fair use doctrines.',
};

export default function DisclaimerPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 space-y-8 font-sans text-sm text-ink-muted leading-relaxed">
      <div className="border-b border-border pb-6 space-y-2">
        <span className="font-mono text-xs uppercase text-signal font-semibold tracking-wider">
          &bull; LEGAL ADVISORY
        </span>
        <h1 className="font-serif font-bold text-4xl text-ink">
          Notice of Non-Affiliation & Fair Use
        </h1>
      </div>

      <div className="space-y-4">
        <h2 className="font-serif font-bold text-xl text-ink">Non-Affiliation Trademark Notice</h2>
        <p>
          Dispatch is an independent web utility and is NOT affiliated, associated, authorized, endorsed by, or in any way officially connected with Instagram, Meta Platforms Inc., YouTube, Google LLC, TikTok, ByteDance Ltd., X Corp., Pinterest Inc., Snap Inc., or any of their subsidiaries or affiliates.
        </p>
        <p>
          All product names, logos, and brands are property of their respective owners. All company, product, and service names used on this website are for identification and descriptive purposes only.
        </p>
      </div>
    </div>
  );
}

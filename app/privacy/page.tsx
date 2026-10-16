import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Stateless Privacy Policy · Dispatch',
  description: 'Zero tracking, no persistent database logs, no advertising cross-site cookies.',
};

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 space-y-8 font-sans text-sm text-ink-muted leading-relaxed">
      <div className="border-b border-border pb-6 space-y-2">
        <span className="font-mono text-xs uppercase text-signal font-semibold tracking-wider">
          &bull; DATA GOVERNANCE
        </span>
        <h1 className="font-serif font-bold text-4xl text-ink">
          Stateless Privacy Policy
        </h1>
        <p className="text-xs text-ink-faint font-mono">
          LAST UPDATED: OCTOBER 2026 · VERSION 1.2
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="font-serif font-bold text-xl text-ink">1. Zero Persistent Logging</h2>
        <p>
          Dispatch does not operate user accounts, does not store IP addresses, and does not retain a history of the URLs you paste. When you submit a link for inspection, the request executes in ephemeral server memory and is released immediately once the media stream manifest is delivered to your browser.
        </p>

        <h2 className="font-serif font-bold text-xl text-ink">2. Local Storage Usage</h2>
        <p>
          We use local storage on your device exclusively for:
        </p>
        <ul className="list-disc list-inside space-y-1 pl-2 font-mono text-xs">
          <li>Saving your visual color preference (Light or Dark mode).</li>
          <li>Remembering your acknowledgement of our stateless privacy banner.</li>
        </ul>

        <h2 className="font-serif font-bold text-xl text-ink">3. Third-Party CDNs</h2>
        <p>
          When you download a file, your browser establishes a direct connection to the respective public CDN hosting that content (e.g. Meta, Google, ByteDance). We do not proxy, modify, or inspect the contents of your downloaded files.
        </p>
      </div>
    </div>
  );
}

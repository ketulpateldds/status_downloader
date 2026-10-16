import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service · Dispatch',
  description: 'Rules and terms governing the use of the Dispatch public media utility.',
};

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 space-y-8 font-sans text-sm text-ink-muted leading-relaxed">
      <div className="border-b border-border pb-6 space-y-2">
        <span className="font-mono text-xs uppercase text-signal font-semibold tracking-wider">
          &bull; SERVICE TERMS
        </span>
        <h1 className="font-serif font-bold text-4xl text-ink">
          Terms of Public Service
        </h1>
        <p className="text-xs text-ink-faint font-mono">
          EFFECTIVE DATE: OCTOBER 2026
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="font-serif font-bold text-xl text-ink">1. Acceptable Use</h2>
        <p>
          Dispatch is provided strictly for lawful, personal, non-commercial offline study, academic research, and media preservation. You agree not to use Dispatch to infringe on copyright, harvest private data, or redistribute creator media without verified permission.
        </p>

        <h2 className="font-serif font-bold text-xl text-ink">2. Public Content Only</h2>
        <p>
          You agree not to attempt to use Dispatch to access restricted, password-protected, or private accounts.
        </p>

        <h2 className="font-serif font-bold text-xl text-ink">3. Disclaimer of Warranties</h2>
        <p>
          Dispatch is provided "as is" without warranty of any kind. We do not guarantee uninterrupted availability of external third-party CDN endpoints.
        </p>
      </div>
    </div>
  );
}

import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { FileText, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms of Service · Dispatch',
  description: 'Rules and simple terms governing the use of Dispatch online media downloader.',
};

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      
      {/* Header */}
      <div className="text-center max-w-xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-50 text-brand-blue text-xs font-bold uppercase tracking-wider">
          <FileText className="w-3.5 h-3.5" />
          <span>TERMS OF USE</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-navy tracking-tight">
          Terms of Service
        </h1>
        <p className="text-base text-navy-muted">
          Clear, simple rules written in plain English.
        </p>
      </div>

      <div className="bg-white rounded-3xl border border-slate-100 p-6 sm:p-10 shadow-soft space-y-8 text-navy-muted text-base leading-relaxed">
        
        <div className="space-y-3">
          <h2 className="text-xl font-bold text-navy">1. Personal & Fair Use Only</h2>
          <p>
            Dispatch is provided for personal, non-commercial offline study, educational review, and archiving. You agree not to use this service to infringe on anyone&apos;s copyright, harvest private user data, or redistribute creator media without verified permission.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-xl font-bold text-navy">2. Strictly Public Content</h2>
          <p>
            You agree to only submit links to publicly accessible media. You may not attempt to use Dispatch to bypass passwords, login gates, private groups, or friends-only restrictions.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-xl font-bold text-navy">3. Service Availability</h2>
          <p>
            Dispatch is provided on a free &quot;as is&quot; basis. While we strive for 99.9% uptime, we cannot guarantee continuous availability if third-party social media platforms change their public delivery infrastructure.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-xl font-bold text-navy">4. Changes to Terms</h2>
          <p>
            We may occasionally update these terms to reflect new platform additions or legal requirements. Any updates will be posted here with an updated date.
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

import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ShieldCheck, Lock, Check } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy · Dispatch',
  description: 'We never store your files, logs, or personal data. 100% private and secure.',
};

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      
      {/* Header */}
      <div className="text-center max-w-xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-wider">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
          <span>YOUR PRIVACY IS PROTECTED</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-navy tracking-tight">
          Privacy Policy
        </h1>
        <p className="text-base text-navy-muted">
          We never store your files, personal information, or download history.
        </p>
      </div>

      <div className="bg-white rounded-3xl border border-slate-100 p-6 sm:p-10 shadow-soft space-y-8 text-navy-muted text-base leading-relaxed">
        
        <div className="space-y-3">
          <h2 className="text-xl font-bold text-navy flex items-center gap-2">
            <Lock className="w-5 h-5 text-brand-blue" />
            <span>1. We Never Store Your Files</span>
          </h2>
          <p>
            When you paste a link and download a file, Dispatch acts as a direct conduit between the content delivery network and your personal browser. Files are never saved, cached, or backed up on our servers.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-xl font-bold text-navy flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-brand-blue" />
            <span>2. No Accounts or Passwords</span>
          </h2>
          <p>
            You do not need to register, create an account, or log in to use Dispatch. We never ask for your email address, phone number, or social media passwords.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-xl font-bold text-navy flex items-center gap-2">
            <Check className="w-5 h-5 text-brand-blue" />
            <span>3. No Adware or Surveillance Cookies</span>
          </h2>
          <p>
            We do not use aggressive third-party cross-site tracking cookies. We only store simple browser preferences on your device (such as your chosen language).
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-xl font-bold text-navy flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-brand-blue" />
            <span>4. Direct Connection to Source Networks</span>
          </h2>
          <p>
            Your device fetches media directly from the official public delivery networks (like Meta, Google, or ByteDance). We never inspect, alter, or monetize your downloaded media.
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

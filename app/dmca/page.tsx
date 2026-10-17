'use client';

import React, { useState } from 'react';
import { ShieldCheck, CheckCircle2, Send } from 'lucide-react';

export default function DmcaPage() {
  const [workTitle, setWorkTitle] = useState('');
  const [contentUrl, setContentUrl] = useState('');
  const [ownerName, setOwnerName] = useState('');
  const [ownerEmail, setOwnerEmail] = useState('');
  const [statementChecked, setStatementChecked] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!statementChecked) {
      alert('Please check the verification statement.');
      return;
    }
    setSubmitted(true);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      
      {/* Header */}
      <div className="text-center max-w-xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-50 text-brand-blue text-xs font-bold uppercase tracking-wider">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>COPYRIGHT & DMCA DESK</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-navy tracking-tight">
          DMCA Takedown Notice
        </h1>
        <p className="text-base text-navy-muted">
          We respect creator copyrights and comply fully with 17 U.S.C. &sect; 512 and international copyright laws.
        </p>
      </div>

      <div className="bg-blue-50/70 p-5 rounded-2xl border border-blue-100 text-xs text-navy-muted space-y-2 leading-relaxed">
        <p>
          <strong className="text-navy">Important Notice:</strong> Dispatch does not host, store, or cache any video or audio files on our servers. All media is downloaded directly from third-party hosting networks. However, upon receiving a valid copyright owner notice, we immediately block the specified URLs from being processed through our system.
        </p>
      </div>

      {!submitted ? (
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-3xl border border-slate-100 p-6 sm:p-10 shadow-soft space-y-6"
        >
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-navy uppercase tracking-wider">
              Copyright Owner or Authorized Representative *
            </label>
            <input
              type="text"
              required
              value={ownerName}
              onChange={(e) => setOwnerName(e.target.value)}
              placeholder="Full Legal Name or Studio Name"
              className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-navy placeholder:text-slate-400 focus:outline-none focus:border-brand-blue focus:bg-white transition-all"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold text-navy uppercase tracking-wider">
              Contact Email Address *
            </label>
            <input
              type="email"
              required
              value={ownerEmail}
              onChange={(e) => setOwnerEmail(e.target.value)}
              placeholder="legal@creatorstudio.com"
              className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-navy placeholder:text-slate-400 focus:outline-none focus:border-brand-blue focus:bg-white transition-all"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold text-navy uppercase tracking-wider">
              Title of Copyrighted Work *
            </label>
            <input
              type="text"
              required
              value={workTitle}
              onChange={(e) => setWorkTitle(e.target.value)}
              placeholder="Official Title or Description of the Original Media"
              className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-navy placeholder:text-slate-400 focus:outline-none focus:border-brand-blue focus:bg-white transition-all"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold text-navy uppercase tracking-wider">
              URL(s) to be Blocked *
            </label>
            <textarea
              rows={3}
              required
              value={contentUrl}
              onChange={(e) => setContentUrl(e.target.value)}
              placeholder="https://example.com/post/12345 (one URL per line)"
              className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-navy placeholder:text-slate-400 focus:outline-none focus:border-brand-blue focus:bg-white transition-all"
            />
          </div>

          <div className="pt-2 flex items-start gap-3">
            <input
              type="checkbox"
              id="statement"
              required
              checked={statementChecked}
              onChange={(e) => setStatementChecked(e.target.checked)}
              className="mt-1 w-4 h-4 rounded text-brand-blue border-slate-300 focus:ring-brand-blue cursor-pointer"
            />
            <label htmlFor="statement" className="text-xs text-navy-muted leading-relaxed cursor-pointer">
              I have a good faith belief that the use of the material in the manner complained of is not authorized by the copyright owner, its agent, or the law. The information in this notice is accurate under penalty of perjury.
            </label>
          </div>

          <button
            type="submit"
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-brand-gradient text-white text-sm font-bold shadow-glow hover:opacity-95 active:scale-95 transition-all flex items-center justify-center gap-2"
          >
            <Send className="w-4 h-4" />
            <span>Submit Takedown Request</span>
          </button>
        </form>
      ) : (
        <div className="bg-white rounded-3xl border border-slate-100 p-8 sm:p-12 text-center space-y-4 shadow-soft">
          <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h2 className="text-2xl font-bold text-navy">
            Notice Received
          </h2>
          <p className="text-sm text-navy-muted max-w-md mx-auto leading-relaxed">
            Thank you, {ownerName}. Your takedown request has been received. Our legal team will review and block the specified links within 24 business hours.
          </p>
        </div>
      )}

    </div>
  );
}

'use client';

import React, { useState } from 'react';
import { ShieldAlert, CheckCircle2, FileText } from 'lucide-react';

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
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 space-y-8 font-sans">
      <div className="border-b border-border pb-6 space-y-2">
        <span className="font-mono text-xs uppercase text-signal font-semibold tracking-wider flex items-center gap-1.5">
          <ShieldAlert className="w-4 h-4" />
          <span>COPYRIGHT COMPLIANCE & TAKEDOWN DESK</span>
        </span>
        <h1 className="font-serif font-bold text-4xl sm:text-5xl text-ink">
          DMCA Notice of Infringement
        </h1>
        <p className="text-sm text-ink-muted leading-relaxed">
          Dispatch respects the intellectual property rights of all content creators. We comply strictly with 17 U.S.C. § 512 and the Digital Millennium Copyright Act.
        </p>
      </div>

      <div className="bg-paper-2 p-5 wire-border text-xs text-ink-muted space-y-2 leading-relaxed">
        <p>
          <strong>Notice:</strong> Dispatch operates as a real-time stateless gateway and does not store, host, or cache video files on our servers. However, upon receiving a valid takedown notice from a verified copyright owner, we immediately blacklist the specified URLs from being processed through our inspection engine.
        </p>
      </div>

      {!submitted ? (
        <form onSubmit={handleSubmit} className="wire-border bg-paper-2 p-6 sm:p-8 space-y-6 shadow-tactile">
          <div className="space-y-1">
            <label className="font-mono text-xs font-bold text-ink uppercase">Copyright Owner / Authorized Representative *</label>
            <input
              type="text"
              required
              value={ownerName}
              onChange={(e) => setOwnerName(e.target.value)}
              placeholder="Full Legal Name or Corporation"
              className="w-full p-3 bg-paper wire-border text-sm text-ink focus:outline-none focus:border-signal"
            />
          </div>

          <div className="space-y-1">
            <label className="font-mono text-xs font-bold text-ink uppercase">Contact Email Address *</label>
            <input
              type="email"
              required
              value={ownerEmail}
              onChange={(e) => setOwnerEmail(e.target.value)}
              placeholder="legal@creatorbrand.com"
              className="w-full p-3 bg-paper wire-border text-sm text-ink focus:outline-none focus:border-signal"
            />
          </div>

          <div className="space-y-1">
            <label className="font-mono text-xs font-bold text-ink uppercase">Title of Copyrighted Work *</label>
            <input
              type="text"
              required
              value={workTitle}
              onChange={(e) => setWorkTitle(e.target.value)}
              placeholder="Title or description of the copyrighted creation"
              className="w-full p-3 bg-paper wire-border text-sm text-ink focus:outline-none focus:border-signal"
            />
          </div>

          <div className="space-y-1">
            <label className="font-mono text-xs font-bold text-ink uppercase">Target Social Media URL(s) to Blacklist *</label>
            <textarea
              required
              rows={3}
              value={contentUrl}
              onChange={(e) => setContentUrl(e.target.value)}
              placeholder="https://www.instagram.com/reel/... or https://youtube.com/watch?v=..."
              className="w-full p-3 bg-paper wire-border text-sm text-ink font-mono focus:outline-none focus:border-signal"
            />
          </div>

          <div className="p-4 bg-paper wire-border space-y-2">
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                required
                checked={statementChecked}
                onChange={(e) => setStatementChecked(e.target.checked)}
                className="mt-1"
              />
              <span className="text-xs text-ink-muted leading-relaxed">
                I state under penalty of perjury that I am the copyright owner or authorized to act on behalf of the owner of an exclusive right that is allegedly infringed, and the information in this notice is accurate.
              </span>
            </label>
          </div>

          <button
            type="submit"
            className="wire-btn py-3 px-8 text-xs font-mono uppercase tracking-wider"
          >
            Submit Official DMCA Takedown Request
          </button>
        </form>
      ) : (
        <div className="wire-border bg-paper-2 p-8 text-center space-y-4 shadow-tactile">
          <CheckCircle2 className="w-12 h-12 text-signal mx-auto" />
          <h2 className="font-serif font-bold text-2xl text-ink">
            Takedown Request Logged
          </h2>
          <p className="text-xs text-ink-muted max-w-md mx-auto leading-relaxed">
            Your notice regarding "{workTitle}" has been queued. Our compliance desk evaluates and applies URL blacklisting within 24 hours. A confirmation receipt will be sent to {ownerEmail}.
          </p>
        </div>
      )}
    </div>
  );
}

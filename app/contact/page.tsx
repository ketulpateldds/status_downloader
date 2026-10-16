'use client';

import React, { useState } from 'react';
import { Mail, CheckCircle2, AlertTriangle, Send } from 'lucide-react';

export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('Feedback / Inquiry');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      setError('Please fill in all required fields.');
      return;
    }
    setError(null);
    setSubmitted(true);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 space-y-8 font-sans">
      <div className="border-b border-border pb-6 space-y-2">
        <span className="font-mono text-xs uppercase text-signal font-semibold tracking-wider">
          &bull; COMMUNICATIONS DESK
        </span>
        <h1 className="font-serif font-bold text-4xl sm:text-5xl text-ink">
          Contact Dispatch Desk
        </h1>
        <p className="text-sm text-ink-muted leading-relaxed">
          Inquiries regarding platform availability, bug reports, and technical feedback.
        </p>
      </div>

      {!submitted ? (
        <form onSubmit={handleSubmit} className="wire-border bg-paper-2 p-6 sm:p-8 space-y-6 shadow-tactile">
          {error && (
            <div className="p-4 bg-paper wire-border border-signal text-signal text-xs font-mono flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="font-mono text-xs font-bold text-ink uppercase">Your Name *</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Jane Doe"
                className="w-full p-3 bg-paper wire-border text-sm text-ink focus:outline-none focus:border-signal"
              />
            </div>
            <div className="space-y-1">
              <label className="font-mono text-xs font-bold text-ink uppercase">Email Address *</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="jane@example.com"
                className="w-full p-3 bg-paper wire-border text-sm text-ink focus:outline-none focus:border-signal"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="font-mono text-xs font-bold text-ink uppercase">Topic *</label>
            <select
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full p-3 bg-paper wire-border text-sm text-ink focus:outline-none focus:border-signal"
            >
              <option>Feedback / General Inquiry</option>
              <option>Stream Resolution Bug Report</option>
              <option>Media Format Request</option>
              <option>Partnership / Sponsorship</option>
            </select>
          </div>

          <div className="space-y-1">
            <label className="font-mono text-xs font-bold text-ink uppercase">Message Details *</label>
            <textarea
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Describe your question or observation in detail..."
              className="w-full p-3 bg-paper wire-border text-sm text-ink focus:outline-none focus:border-signal"
            />
          </div>

          <button
            type="submit"
            className="wire-btn py-3 px-8 text-xs font-mono uppercase tracking-wider flex items-center justify-center gap-2"
          >
            <Send className="w-4 h-4 text-signal" />
            <span>Transmit Message to Dispatch Desk</span>
          </button>
        </form>
      ) : (
        <div className="wire-border bg-paper-2 p-8 text-center space-y-4 shadow-tactile">
          <CheckCircle2 className="w-12 h-12 text-signal mx-auto" />
          <h2 className="font-serif font-bold text-2xl text-ink">
            Transmission Received
          </h2>
          <p className="text-xs text-ink-muted max-w-md mx-auto leading-relaxed">
            Thank you, {name}. Your dispatch has been logged. Our technical team responds to verified reports within 24–48 business hours.
          </p>
          <button
            type="button"
            onClick={() => {
              setSubmitted(false);
              setName('');
              setEmail('');
              setMessage('');
            }}
            className="text-xs font-mono text-signal underline font-semibold"
          >
            Send Another Dispatch
          </button>
        </div>
      )}
    </div>
  );
}

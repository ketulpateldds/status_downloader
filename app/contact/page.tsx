'use client';

import React, { useState } from 'react';
import { Mail, CheckCircle2, AlertCircle, Send } from 'lucide-react';

export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('Feedback / Question');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      setError('Please fill in all fields.');
      return;
    }
    setError(null);
    setSubmitted(true);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      
      {/* Header */}
      <div className="text-center max-w-xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-50 text-brand-blue text-xs font-bold uppercase tracking-wider">
          <Mail className="w-3.5 h-3.5" />
          <span>CONTACT & SUPPORT</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-navy tracking-tight">
          Contact Dispatch
        </h1>
        <p className="text-base text-navy-muted">
          Have a question, feedback, or need help with a link? We would love to hear from you.
        </p>
      </div>

      {!submitted ? (
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-3xl border border-slate-100 p-6 sm:p-10 shadow-soft space-y-6"
        >
          {error && (
            <div className="p-4 bg-rose-50 border border-rose-200 text-rose-800 text-sm rounded-2xl flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-rose-600 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-navy uppercase tracking-wider">
                Your Name *
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Alex Morgan"
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-navy placeholder:text-slate-400 focus:outline-none focus:border-brand-blue focus:bg-white transition-all"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-navy uppercase tracking-wider">
                Email Address *
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="alex@example.com"
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-navy placeholder:text-slate-400 focus:outline-none focus:border-brand-blue focus:bg-white transition-all"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold text-navy uppercase tracking-wider">
              Topic *
            </label>
            <select
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-navy focus:outline-none focus:border-brand-blue focus:bg-white transition-all"
            >
              <option>Feedback / General Question</option>
              <option>Download Issue with a Specific Website</option>
              <option>Feature Request</option>
              <option>Partnership or Collaboration</option>
            </select>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold text-navy uppercase tracking-wider">
              Message *
            </label>
            <textarea
              rows={5}
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tell us what's on your mind or include the link you were trying to download..."
              className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-navy placeholder:text-slate-400 focus:outline-none focus:border-brand-blue focus:bg-white transition-all"
            />
          </div>

          <button
            type="submit"
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-brand-gradient text-white text-sm font-bold shadow-glow hover:opacity-95 active:scale-95 transition-all flex items-center justify-center gap-2"
          >
            <Send className="w-4 h-4" />
            <span>Send Message</span>
          </button>
        </form>
      ) : (
        <div className="bg-white rounded-3xl border border-slate-100 p-8 sm:p-12 text-center space-y-4 shadow-soft">
          <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h2 className="text-2xl font-bold text-navy">
            Message Sent Successfully!
          </h2>
          <p className="text-sm text-navy-muted max-w-md mx-auto leading-relaxed">
            Thank you, {name}! We have received your message. Our team usually gets back within 24 hours.
          </p>
          <div className="pt-2">
            <button
              type="button"
              onClick={() => {
                setSubmitted(false);
                setName('');
                setEmail('');
                setMessage('');
              }}
              className="text-xs font-bold text-brand-blue hover:underline"
            >
              Send Another Message
            </button>
          </div>
        </div>
      )}

    </div>
  );
}

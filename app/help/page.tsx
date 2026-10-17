'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { homeFaqs } from '@/data/faq';
import {
  HelpCircle,
  Search,
  ChevronDown,
  ArrowRight,
  MessageCircle,
  FileQuestion,
  ShieldCheck,
  Smartphone,
  Sparkles,
} from 'lucide-react';

export default function HelpCenterPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const additionalFaqs = [
    {
      question: 'Why did my download fail or stop midway?',
      answer:
        'Download interruptions are usually caused by a sudden WiFi disconnect or an expired temporary media token. If your download stops, simply refresh the page, paste the link again, and tap Download.',
    },
    {
      question: 'How do I download on iPhone or iPad to my camera roll?',
      answer:
        'When Safari finishes downloading your file, tap the small blue Download circle next to the address bar. Tap the downloaded video, tap the Share icon (square with arrow pointing up), and tap "Save Video". It will immediately appear in your Photos app.',
    },
    {
      question: 'Where are downloaded files saved on Android phones?',
      answer:
        'On Android, files save automatically inside your "Downloads" folder. You can access them anytime via your Files app or standard Gallery app under the Downloads album.',
    },
    {
      question: 'Can I download videos in 4K or 8K resolution?',
      answer:
        'Yes! If the creator uploaded the original video in 4K or 8K (common on YouTube), Dispatch gives you the option to download the full-resolution uncompressed master file.',
    },
    {
      question: 'Is it legal to use Dispatch?',
      answer:
        'Yes. Downloading publicly accessible content for personal offline review, research, and study is permitted under fair use principles. You must not sell, redistribute, or monetize media created by others without their consent.',
    },
    {
      question: 'How do I report a broken link or suggest a new feature?',
      answer:
        'We love feedback! You can reach our support team anytime through our Contact page, and our team will be happy to assist.',
    },
  ];

  const allFaqs = [...homeFaqs, ...additionalFaqs];

  const filteredFaqs = allFaqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      
      {/* Hero Header */}
      <div className="text-center max-w-2xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-50 text-brand-blue text-xs font-bold uppercase tracking-wider">
          <HelpCircle className="w-3.5 h-3.5" />
          <span>HELP CENTER & SUPPORT</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-navy tracking-tight">
          How Can We Help You?
        </h1>
        <p className="text-base text-navy-muted">
          Find instant answers to common questions about downloading, converting, and saving media.
        </p>

        {/* Search Input */}
        <div className="pt-4 max-w-xl mx-auto relative">
          <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search questions (e.g. iPhone, 4K, private, formats)..."
            className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white border border-slate-200 text-sm sm:text-base text-navy placeholder:text-slate-400 shadow-soft focus:outline-none focus:border-brand-blue focus:ring-4 focus:ring-blue-500/10 transition-all"
          />
        </div>
      </div>

      {/* Quick Help Categories */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-5 rounded-3xl bg-white border border-slate-100 shadow-soft flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-blue-50 text-brand-blue flex items-center justify-center shrink-0">
            <Smartphone className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-bold text-sm text-navy">Mobile Saving</h3>
            <p className="text-xs text-navy-muted">iPhone & Android tips</p>
          </div>
        </div>

        <div className="p-5 rounded-3xl bg-white border border-slate-100 shadow-soft flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
            <Sparkles className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-bold text-sm text-navy">High Quality</h3>
            <p className="text-xs text-navy-muted">1080p, 4K & MP3 320k</p>
          </div>
        </div>

        <div className="p-5 rounded-3xl bg-white border border-slate-100 shadow-soft flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-bold text-sm text-navy">Safety & Privacy</h3>
            <p className="text-xs text-navy-muted">Stateless & 100% private</p>
          </div>
        </div>
      </div>

      {/* FAQ Accordion List */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-navy tracking-tight">
          Questions & Answers ({filteredFaqs.length})
        </h2>

        {filteredFaqs.length === 0 ? (
          <div className="p-8 text-center bg-white rounded-3xl border border-slate-100 text-navy-muted space-y-2">
            <FileQuestion className="w-8 h-8 mx-auto text-slate-300" />
            <p className="font-semibold text-navy">No matching answers found</p>
            <p className="text-xs">Try searching with a different keyword or contact our support team below.</p>
          </div>
        ) : (
          filteredFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-soft transition-all"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 font-bold text-base text-navy hover:text-brand-blue"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-brand-blue' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-sm text-navy-muted leading-relaxed border-t border-slate-50">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>

      {/* Still need help callout */}
      <div className="bg-white rounded-3xl border border-slate-100 p-8 shadow-card flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-1 text-center sm:text-left">
          <h3 className="font-bold text-lg text-navy">Still need assistance?</h3>
          <p className="text-sm text-navy-muted">
            Our support team is happy to assist with any questions or link issues.
          </p>
        </div>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-gradient text-white text-sm font-bold shadow-glow hover:opacity-95 transition-all shrink-0"
        >
          <MessageCircle className="w-4 h-4" />
          <span>Contact Support</span>
        </Link>
      </div>

    </div>
  );
}

'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export interface FaqProps {
  items: { question: string; answer: string }[];
  heading?: string;
  subheading?: string;
}

export function FaqAccordion({ items, heading, subheading }: FaqProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  // Structured Data JSON-LD for SEO
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6">
      {/* JSON-LD Script Tag */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="text-center mb-12 space-y-2">
        <span className="font-mono text-xs uppercase text-signal font-semibold tracking-wider">
          &bull; COMMON INQUIRIES & VERIFICATIONS
        </span>
        <h2 className="font-serif font-bold text-3xl sm:text-4xl text-ink">
          {heading || 'Frequently Asked Questions'}
        </h2>
        {subheading && (
          <p className="font-sans text-xs text-ink-muted max-w-xl mx-auto leading-relaxed">
            {subheading}
          </p>
        )}
      </div>

      <div className="space-y-3 font-sans">
        {items.map((faq, i) => {
          const isOpen = openIndex === i;
          return (
            <div
              key={i}
              className="wire-border bg-paper overflow-hidden transition-all shadow-tactile-sm"
            >
              <button
                type="button"
                onClick={() => toggle(i)}
                aria-expanded={isOpen}
                className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 hover:bg-paper-hover transition-colors"
              >
                <span className="font-serif font-bold text-base sm:text-lg text-ink">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-4 h-4 text-signal shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-ink-muted leading-relaxed border-t border-border-subtle bg-paper-2">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

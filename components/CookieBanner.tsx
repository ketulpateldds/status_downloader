'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ShieldCheck } from 'lucide-react';

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('dispatch_consent');
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const handleAcknowledge = () => {
    localStorage.setItem('dispatch_consent', 'acknowledged');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-md z-50 bg-paper wire-border p-5 shadow-tactile font-sans text-xs text-ink">
      <div className="flex items-start gap-3">
        <ShieldCheck className="w-5 h-5 text-signal shrink-0 mt-0.5" />
        <div className="space-y-2">
          <div className="font-serif font-bold text-sm text-ink">
            Stateless Privacy Architecture
          </div>
          <p className="text-ink-muted leading-relaxed">
            Dispatch uses no tracking cookies, no cross-site advertising pixels, and stores zero personal profiles. We only store your local visual theme preference.
          </p>
          <div className="flex items-center gap-3 pt-1 font-mono text-[11px]">
            <button
              onClick={handleAcknowledge}
              className="wire-btn py-1 px-3 text-xs uppercase"
            >
              Acknowledge
            </button>
            <Link href="/privacy" className="text-ink-muted hover:text-signal underline">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

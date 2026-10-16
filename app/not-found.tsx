import React from 'react';
import Link from 'next/link';
import { AlertCircle, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="max-w-xl mx-auto px-4 py-24 text-center space-y-6 font-sans">
      <div className="inline-flex items-center gap-2 px-3 py-1 bg-paper-2 wire-border text-xs font-mono text-signal">
        <AlertCircle className="w-4 h-4" />
        <span>ERROR 404 · STREAM NOT LOCATED</span>
      </div>

      <h1 className="font-serif font-bold text-4xl sm:text-5xl text-ink">
        Unrecognized Dispatch Node
      </h1>

      <p className="text-sm text-ink-muted leading-relaxed">
        The route or media manifest you requested does not exist on the Dispatch wire desk. Please verify the URL or return to the main workbench.
      </p>

      <div className="pt-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 wire-btn py-3 px-6 text-xs font-mono uppercase tracking-wider"
        >
          <ArrowLeft className="w-4 h-4 text-signal" />
          <span>Return to Central Workbench</span>
        </Link>
      </div>
    </div>
  );
}

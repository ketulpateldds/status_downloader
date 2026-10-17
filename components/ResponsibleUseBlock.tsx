import React from "react";
import Link from "next/link";
import { Scale, Lock, ShieldAlert, FileText } from "lucide-react";

export function ResponsibleUseBlock() {
  return (
    <section className="py-20 bg-paper-2 border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <span className="font-mono text-xs uppercase text-signal font-semibold tracking-wider flex items-center gap-1.5">
              <Scale className="w-4 h-4" />
              <span>ETHICS & RESPONSIBLE USAGE DOCTRINE</span>
            </span>
            <h2 className="font-serif font-bold text-3xl sm:text-4xl text-ink">
              Public Content Policy & Creator Rights
            </h2>
            <p className="font-sans text-sm text-ink-muted leading-relaxed">
              Dispatch is engineered specifically for lawful, personal offline
              study, non-commercial research, academic documentation, and media
              preservation. We maintain three immutable principles:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 font-mono text-xs">
              <div className="p-3 bg-paper wire-border">
                <div className="font-bold text-ink">1. Strictly Public</div>
                <div className="text-[11px] text-ink-muted mt-1">
                  Zero bypass of private account locks or follow-gated media.
                </div>
              </div>
              <div className="p-3 bg-paper wire-border">
                <div className="font-bold text-ink">2. Non-Commercial</div>
                <div className="text-[11px] text-ink-muted mt-1">
                  Intended for personal offline access. Never resell creator
                  assets.
                </div>
              </div>
              <div className="p-3 bg-paper wire-border">
                <div className="font-bold text-ink">3. DMCA Responsive</div>
                <div className="text-[11px] text-ink-muted mt-1">
                  Prompt compliance with verified creator takedown
                  notifications.
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 bg-paper p-6 wire-border space-y-4">
            <div className="font-serif font-bold text-xl text-ink">
              Are you a Content Creator?
            </div>
            <p className="font-sans text-xs text-ink-muted leading-relaxed">
              If your public media has been referenced here and you wish to
              block its resolution or request removal under the Digital
              Millennium Copyright Act (DMCA), our compliance desk responds
              within 24 hours.
            </p>
            <Link
              href="/dmca"
              className="wire-btn block text-center py-2.5 px-4 text-xs uppercase font-mono tracking-wider"
            >
              Submit Takedown Notice &rarr;
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

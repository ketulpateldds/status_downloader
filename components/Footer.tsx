import React from 'react';
import Link from 'next/link';
import { platformList } from '@/content/platforms';
import { ShieldAlert, Terminal, Lock, Globe } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-paper-2 border-t border-border mt-24">
      {/* Responsible Use Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 border-b border-border-subtle">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono text-ink-muted bg-paper p-4 border border-border">
          <div className="flex items-center gap-3">
            <ShieldAlert className="w-5 h-5 text-signal shrink-0" />
            <span>
              <strong>POLICY NOTICE:</strong> Only download media you own or have explicit creator permission to store locally. Dispatch strictly operates on open, publicly published URLs.
            </span>
          </div>
          <Link
            href="/dmca"
            className="text-signal hover:underline shrink-0 font-semibold"
          >
            DMCA Policy & Takedowns &rarr;
          </Link>
        </div>
      </div>

      {/* Ft5 Statement Ledger Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Col 1: Identity */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-ink text-paper font-serif font-bold text-center text-sm leading-6">
              D
            </div>
            <span className="font-serif font-bold text-lg text-ink">DISPATCH</span>
          </div>
          <p className="text-xs text-ink-muted leading-relaxed">
            An independent, zero-compromise frontend utility for inspecting and saving public social media assets without telemetry, predatory ads, or third-party logins.
          </p>
          <div className="font-mono text-[11px] text-ink-faint space-y-1">
            <div>FRAMEWORK: NEXT.JS APP ROUTER</div>
            <div>STATUS: ZERO BACKEND LOGS</div>
            <div>LICENSE: PUBLIC CITIZEN UTILITY</div>
          </div>
        </div>

        {/* Col 2: Platform Tools */}
        <div className="space-y-3 font-mono text-xs">
          <div className="font-serif font-bold text-sm text-ink tracking-tight uppercase">
            Platform Utilities
          </div>
          <ul className="space-y-2">
            {platformList.map((plat) => (
              <li key={plat.slug}>
                <Link
                  href={'/' + plat.slug}
                  className="text-ink-muted hover:text-signal transition-colors flex items-center pr-4"
                >
                  <span className='pr-2'>{plat.name}</span>
                  <span className="text-[11px] text-ink-faint">&rarr;</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3: Research & Archival */}
        <div className="space-y-3 font-mono text-xs">
          <div className="font-serif font-bold text-sm text-ink tracking-tight uppercase">
            Dispatches & Editorial
          </div>
          <ul className="space-y-2">
            <li>
              <Link href="/blog/why-public-media-archiving-matters" className="text-ink-muted hover:text-signal">
                Why Public Archiving Matters
              </Link>
            </li>
            <li>
              <Link href="/blog/understanding-video-bitrates-and-codecs" className="text-ink-muted hover:text-signal">
                Video Bitrates & Codec Breakdown
              </Link>
            </li>
            <li>
              <Link href="/blog/fair-use-and-responsible-offline-storage" className="text-ink-muted hover:text-signal">
                Fair Use Legal Blueprint
              </Link>
            </li>
            <li>
              <Link href="/blog" className="text-signal hover:underline font-semibold">
                Browse All Dispatches &rarr;
              </Link>
            </li>
          </ul>
        </div>

        {/* Col 4: Legal & Policy */}
        <div className="space-y-3 font-mono text-xs">
          <div className="font-serif font-bold text-sm text-ink tracking-tight uppercase">
            Legal & Governance
          </div>
          <ul className="space-y-2">
            <li>
              <Link href="/dmca" className="text-ink-muted hover:text-signal">
                DMCA / Copyright Takedown
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="text-ink-muted hover:text-signal">
                Stateless Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="text-ink-muted hover:text-signal">
                Terms of Public Use
              </Link>
            </li>
            <li>
              <Link href="/disclaimer" className="text-ink-muted hover:text-signal">
                Legal Disclaimer
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-ink-muted hover:text-signal">
                Contact Desk
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border py-4 px-4 sm:px-6 text-center font-mono text-[11px] text-ink-faint">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>&copy; {new Date().getFullYear()} DISPATCH MEDIA WIRE · PUBLIC CITIZEN ACCESSIBILITY</span>
          <span>NOT AFFILIATED WITH META, GOOGLE, BYTEDANCE, X CORP, SNAP INC, OR PINTEREST</span>
        </div>
      </div>
    </footer>
  );
}

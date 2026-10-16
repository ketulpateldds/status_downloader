import React from 'react';
import { Zap, ShieldCheck, Laptop, Sparkles } from 'lucide-react';

export function TrustLedger() {
  const points = [
    {
      icon: Zap,
      title: 'Direct Stream Resolution',
      description: 'Zero queue delays or intermediary transcoding loops. Feeds connect straight to the highest-bitrate public CDN server.',
      badge: 'SPEED: MAXIMUM',
    },
    {
      icon: ShieldCheck,
      title: 'Stateless & Private',
      description: 'Zero tracking cookies, no accounts, and no logging of your requests. Your download activity is completely anonymous.',
      badge: 'PRIVACY: ZERO LOGS',
    },
    {
      icon: Laptop,
      title: 'Universal Hardware Fit',
      description: 'Tested across modern Android, iOS Safari, macOS, Windows, and Linux. Outputs standard compliant MP4 and MP3 files.',
      badge: 'COMPATIBILITY: ALL OS',
    },
    {
      icon: Sparkles,
      title: 'Clean Public Access',
      description: '100% free with no subscription traps, no watermarks, and no deceptive pop-up download buttons.',
      badge: 'TERMS: 100% FREE',
    },
  ];

  return (
    <section className="py-12 border-y border-border bg-paper-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map((pt, i) => {
            const Icon = pt.icon;
            return (
              <div
                key={i}
                className="wire-card p-6 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 wire-border bg-paper flex items-center justify-center text-signal">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-[10px] text-ink-faint border border-border px-1.5 py-0.5">
                      0{i + 1}
                    </span>
                  </div>
                  <h3 className="font-serif font-bold text-lg text-ink">
                    {pt.title}
                  </h3>
                  <p className="font-sans text-xs text-ink-muted leading-relaxed">
                    {pt.description}
                  </p>
                </div>
                <div className="pt-3 border-t border-border-subtle font-mono text-[10px] text-signal font-semibold tracking-wider">
                  {pt.badge}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

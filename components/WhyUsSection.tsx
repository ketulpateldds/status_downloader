import React from 'react';
import { EyeOff, Radio, Shield, Ban } from 'lucide-react';

export function WhyUsSection() {
  const reasons = [
    {
      icon: Ban,
      title: 'Zero Predatory Pop-Under Ads',
      desc: 'Most web downloaders force clicks through sketchy adware redirects and fake antivirus prompts. Dispatch provides a clean, honest interface that respects your screen and security.',
    },
    {
      icon: EyeOff,
      title: 'Strictly No User Surveillance',
      desc: 'We do not maintain user databases, store IP addresses, or build advertising profiles. Every link inspection runs in a stateless, ephemeral memory context.',
    },
    {
      icon: Radio,
      title: 'Pristine Stream Parity',
      desc: 'We extract the exact master stream from the public CDN without artificial re-encoding or destructive compression passes. Full HD remains genuine Full HD.',
    },
    {
      icon: Shield,
      title: 'Strict Public Content Boundaries',
      desc: 'We never attempt to bypass private profile walls or login gates. By respecting platform ethical boundaries, we provide a reliable utility for civic and academic research.',
    },
  ];

  return (
    <section className="py-20 bg-paper-2 border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-4">
            <span className="font-mono text-xs uppercase text-signal font-semibold tracking-wider block">
              &bull; ARCHITECTURAL INTEGRITY
            </span>
            <h2 className="font-serif font-bold text-3xl sm:text-4xl text-ink leading-tight">
              Built as an Honest Tool, Not an Ad Farm
            </h2>
            <p className="font-sans text-sm text-ink-muted leading-relaxed">
              The public web deserves utilities designed with craftsmanship, ethical restraint, and respect for user dignity. Here is how Dispatch departs from standard downloader platforms.
            </p>
            <div className="pt-4 font-mono text-xs text-ink">
              <div className="p-4 bg-paper wire-border space-y-2">
                <div className="text-signal font-bold uppercase">&bull; ETHICAL COMMITMENT</div>
                <div className="text-ink-muted text-xs leading-relaxed">
                  No deceptive buttons. No intrusive tracking pixels. No subscription bait. Just direct access to publicly published media.
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {reasons.map((r, i) => {
              const Icon = r.icon;
              return (
                <div key={i} className="bg-paper p-6 wire-border space-y-3 shadow-tactile-sm">
                  <div className="w-8 h-8 wire-border flex items-center justify-center text-signal">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="font-serif font-bold text-base text-ink">
                    {r.title}
                  </h3>
                  <p className="font-sans text-xs text-ink-muted leading-relaxed">
                    {r.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

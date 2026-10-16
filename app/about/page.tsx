import React from 'react';
import type { Metadata } from 'next';
import { ShieldCheck, Terminal, Heart, Scale } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About the Dispatch Utility & Philosophy',
  description: 'Learn why Dispatch was built: to provide a clean, ad-free, respectful public media archiver for researchers and everyday internet citizens.',
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 space-y-12">
      <div className="border-b border-border pb-6 space-y-2">
        <span className="font-mono text-xs uppercase text-signal font-semibold tracking-wider">
          &bull; PROJECT IDENTITY & PHILOSOPHY
        </span>
        <h1 className="font-serif font-bold text-4xl sm:text-5xl text-ink">
          The Dispatch Doctrine
        </h1>
        <p className="font-sans text-sm text-ink-muted max-w-xl leading-relaxed">
          Why we built an independent media workbench free from adware, tracking cookies, and artificial quality degradations.
        </p>
      </div>

      <div className="space-y-8 font-sans text-sm text-ink-muted leading-relaxed">
        <div className="space-y-4">
          <h2 className="font-serif font-bold text-2xl text-ink">
            A Response to the "Ad-Farm" Web
          </h2>
          <p>
            For over a decade, social media download tools have earned an unfortunate reputation: aggressive pop-unders, fake "Start Download" ads, deceptive malware installers, and predatory paywalls. Everyday internet users, educators, and journalists who simply wanted to save a public video for offline reference were forced to navigate a minefield of dark patterns.
          </p>
          <p>
            <strong>Dispatch was created as an antidote.</strong> Designed with the precision of a vintage newsroom wire service, Dispatch treats users with dignity. No popups, no surveillance scripts, and no artificial obstacles.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
          <div className="p-6 bg-paper-2 wire-border space-y-3">
            <ShieldCheck className="w-6 h-6 text-signal" />
            <h3 className="font-serif font-bold text-lg text-ink">
              Stateless Architecture
            </h3>
            <p className="text-xs text-ink-muted">
              We retain zero session databases and log zero user IP addresses. Link inspections run in ephemeral memory and evaporate immediately.
            </p>
          </div>

          <div className="p-6 bg-paper-2 wire-border space-y-3">
            <Scale className="w-6 h-6 text-signal" />
            <h3 className="font-serif font-bold text-lg text-ink">
              Strict Public Boundaries
            </h3>
            <p className="text-xs text-ink-muted">
              We strictly enforce public availability rules. We never build backdoors, password-crackers, or private account scraping routines.
            </p>
          </div>
        </div>

        <div className="space-y-4 pt-4">
          <h2 className="font-serif font-bold text-2xl text-ink">
            Crafted with Hallmark Design System Discipline
          </h2>
          <p>
            Dispatch is styled deliberately using anti-slop frontend design principles: warm newsprint tokens, high optical contrast, strictly roman typography (no italic header clichés), and tactile physical motifs like our signature perforated wire inspection ticket.
          </p>
        </div>
      </div>
    </div>
  );
}

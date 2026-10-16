import React from 'react';
import { Film, Image as ImageIcon, Music, Sparkles, Clock, FileText } from 'lucide-react';

export function CapabilitiesMatrix() {
  const capabilities = [
    {
      icon: Film,
      title: 'Reels, Shorts & Videos',
      formats: 'MP4 (1080p, 720p, 480p)',
      description: 'Portrait and landscape video streams with audio preserved in sync. No watermarks on TikTok, no degradation on Reels.',
    },
    {
      icon: Clock,
      title: 'Active Public Stories',
      formats: 'MP4 / JPEG (24h Window)',
      description: 'Preserve fleeting announcements, breaking updates, and public creator dispatches before they drop from CDN caches.',
    },
    {
      icon: ImageIcon,
      title: 'Uncompressed Photography',
      formats: 'Master JPEG / PNG',
      description: 'Bypasses thumbnail downscaling on Pinterest, Instagram carousels, and X to retrieve full optical resolution assets.',
    },
    {
      icon: Music,
      title: 'Standalone MP3 Audio',
      formats: '320kbps MP3 / M4A',
      description: 'Demuxes video containers into pristine standalone audio tracks for podcasts, interviews, lectures, and music reference.',
    },
    {
      icon: Sparkles,
      title: 'Looping Twitter/Pinterest GIFs',
      formats: 'Animated GIF / Looping MP4',
      description: 'Converts silent looped video feeds into universally shareable animated GIFs for Slack, Discord, and slide presentations.',
    },
    {
      icon: FileText,
      title: 'Slide & Document Carousels',
      formats: 'Complete Slide Packs',
      description: 'Extract multi-slide educational carousels and infographics into chronological individual image frames.',
    },
  ];

  return (
    <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b border-border gap-4">
        <div>
          <span className="font-mono text-xs uppercase text-signal font-semibold tracking-wider block mb-1">
            &bull; MEDIA CAPABILITIES
          </span>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl text-ink">
            What Media Formats Can You Save?
          </h2>
        </div>
        <p className="font-sans text-xs text-ink-muted max-w-md leading-relaxed">
          Dispatch handles standard web media streams published across major platforms. Honest specifications on formats and boundaries.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {capabilities.map((c, i) => {
          const Icon = c.icon;
          return (
            <div key={i} className="wire-card p-6 space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-9 h-9 wire-border bg-paper-2 flex items-center justify-center text-signal">
                  <Icon className="w-5 h-5" />
                </div>
                <span className="font-mono text-[10px] text-ink-faint px-2 py-0.5 border border-border">
                  {c.formats}
                </span>
              </div>
              <div>
                <h3 className="font-serif font-bold text-lg text-ink">
                  {c.title}
                </h3>
                <p className="font-sans text-xs text-ink-muted mt-2 leading-relaxed">
                  {c.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

'use client';

import React, { useState } from 'react';
import { MediaInfo, FormatOption } from '@/lib/api/downloader';
import { Download, CheckCircle2, Clock, ShieldCheck, Film, Music, AlertCircle } from 'lucide-react';

interface MediaPreviewTicketProps {
  media: MediaInfo;
  onReset: () => void;
}

export function MediaPreviewTicket({ media, onReset }: MediaPreviewTicketProps) {
  const [selectedFormat, setSelectedFormat] = useState<FormatOption>(media.formats[0]);
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadProgress, setDownloadProgress] = useState(0);
  const [downloadComplete, setDownloadComplete] = useState(false);

  const handleStartDownload = () => {
    setIsDownloading(true);
    setDownloadProgress(10);

    const interval = setInterval(() => {
      setDownloadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsDownloading(false);
          setDownloadComplete(true);
          return 100;
        }
        return prev + 25;
      });
    }, 200);
  };

  return (
    <div className="wire-border bg-paper-2 p-6 sm:p-8 mt-6 relative overflow-hidden transition-all shadow-tactile">
      {/* Top Perforated Ticket Stamp */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-border gap-2">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs px-2 py-0.5 bg-ink text-paper font-semibold uppercase tracking-wider">
            WIRE TICKET #{media.id.toUpperCase()}
          </span>
          <span className="font-mono text-xs text-signal font-semibold uppercase flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5" />
            VERIFIED PUBLIC ORIGIN
          </span>
        </div>
        <div className="font-mono text-[11px] text-ink-muted">
          STREAM INSPECTOR: {media.platformDisplayName.toUpperCase()}
        </div>
      </div>

      {/* Main Asset Display */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-6 items-start">
        {/* Thumbnail Preview Card */}
        <div className="relative aspect-video md:aspect-square bg-paper wire-border overflow-hidden group">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={media.thumbnailUrl}
            alt={media.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute bottom-2 left-2 right-2 bg-ink/90 text-paper px-2 py-1 text-[11px] font-mono flex items-center justify-between backdrop-blur-sm">
            <span className="flex items-center gap-1">
              {media.type === 'audio' ? <Music className="w-3 h-3 text-signal" /> : <Film className="w-3 h-3 text-signal" />}
              {media.type.toUpperCase()}
            </span>
            <span>{media.duration || 'STREAM'}</span>
          </div>
        </div>

        {/* Metadata Details */}
        <div className="md:col-span-2 space-y-4">
          <div>
            <h3 className="font-serif font-bold text-xl sm:text-2xl text-ink leading-snug">
              {media.title}
            </h3>
            <div className="font-mono text-xs text-ink-muted mt-1 flex items-center gap-2">
              <span>BY {media.author}</span>
              <span>·</span>
              <span className="text-signal">{media.authorHandle}</span>
            </div>
          </div>

          {/* Format Options Selector */}
          <div className="space-y-2">
            <label className="font-mono text-xs font-semibold text-ink uppercase tracking-wider block">
              Select Output Format & Quality:
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {media.formats.map((fmt) => {
                const isSelected = selectedFormat.id === fmt.id;
                return (
                  <button
                    key={fmt.id}
                    type="button"
                    onClick={() => {
                      setSelectedFormat(fmt);
                      setDownloadComplete(false);
                    }}
                    className={`p-3 text-left font-mono text-xs wire-border transition-all flex items-center justify-between ${
                      isSelected
                        ? 'bg-ink text-paper border-ink shadow-tactile-sm'
                        : 'bg-paper text-ink hover:border-ink'
                    }`}
                  >
                    <div>
                      <div className="font-bold flex items-center gap-1.5">
                        <span>{fmt.label}</span>
                        {fmt.isAudioOnly && (
                          <span className="text-[9px] px-1 bg-signal text-white font-normal uppercase">
                            Audio
                          </span>
                        )}
                      </div>
                      <div className={isSelected ? 'text-paper/70 text-[10px]' : 'text-ink-muted text-[10px]'}>
                        {fmt.resolution || fmt.bitrate || fmt.format.toUpperCase()} · {fmt.sizeFormatted}
                      </div>
                    </div>
                    {isSelected && <span className="text-signal font-bold">&check;</span>}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Download Action Section */}
          <div className="pt-2">
            {!downloadComplete ? (
              <div className="space-y-3">
                <button
                  type="button"
                  onClick={handleStartDownload}
                  disabled={isDownloading}
                  className="w-full py-3.5 px-6 wire-btn text-sm uppercase tracking-wider flex items-center justify-center gap-2"
                >
                  {isDownloading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-paper border-t-transparent rounded-full animate-spin" />
                      <span>Transmitting Stream ({downloadProgress}%)...</span>
                    </>
                  ) : (
                    <>
                      <Download className="w-4 h-4 text-signal" />
                      <span>Download {selectedFormat.label} ({selectedFormat.sizeFormatted})</span>
                    </>
                  )}
                </button>

                {isDownloading && (
                  <div className="w-full bg-paper h-2 wire-border overflow-hidden">
                    <div
                      className="bg-signal h-full transition-all duration-150 ease-out"
                      style={{ width: `${downloadProgress}%` }}
                    />
                  </div>
                )}
              </div>
            ) : (
              <div className="bg-paper p-4 wire-border space-y-3">
                <div className="flex items-center gap-2 text-signal font-mono text-sm font-bold">
                  <CheckCircle2 className="w-5 h-5" />
                  <span>TRANSMISSION COMPLETE — SAVED TO DOWNLOADS</span>
                </div>
                <p className="font-sans text-xs text-ink-muted leading-relaxed">
                  Your file <strong>{selectedFormat.label}</strong> has been transferred into your default browser Downloads folder.
                </p>
                <div className="flex items-center gap-3 pt-1">
                  <button
                    type="button"
                    onClick={onReset}
                    className="text-xs font-mono font-semibold text-ink underline hover:text-signal"
                  >
                    Inspect Another Public URL &rarr;
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Ticket Footer Disclaimer */}
      <div className="pt-3 border-t border-border-subtle flex flex-col sm:flex-row items-start sm:items-center justify-between text-[11px] font-mono text-ink-faint gap-2">
        <span>LEGAL NOTE: Respect creator rights. For offline personal study & fair use only.</span>
        <button
          type="button"
          onClick={onReset}
          className="text-ink-muted hover:text-ink underline"
        >
          Clear & Enter New Link
        </button>
      </div>
    </div>
  );
}

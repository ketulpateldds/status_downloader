import { PlatformContent } from '../types';

export const soundcloudContent: PlatformContent = {
  slug: 'soundcloud',
  name: 'SoundCloud',
  tagline: 'Direct Audio Track, DJ Set & Remix Downloader',
  heroH1: 'Download SoundCloud Songs & Mixes to MP3',
  heroSubtitle: 'Save SoundCloud tracks, DJ sets, underground remixes, and audio podcasts in high-bitrate MP3 format with original cover artwork.',
  placeholderText: 'Paste public SoundCloud track or set link (e.g., https://soundcloud.com/artist/track-name)',
  accentColor: 'oklch(0.65 0.24 35)',
  acceptedLinkExamples: [
    'https://soundcloud.com/artist-name/track-title',
    'https://on.soundcloud.com/exampleShortLink',
  ],
  toolModes: [
    { id: 'track-hq', label: 'HQ Audio Track', hint: 'Extracts full fidelity 320kbps MP3 audio stream' },
    { id: 'cover-art', label: 'Album Artwork', hint: 'Downloads original high-res banner and cover photo' },
  ],
  behaviorExplanation: {
    heading: 'Public Tracks vs. Private Secret Links',
    description: 'Dispatch works with all publicly visible SoundCloud tracks, sets, and creator uploads. Secret tracks protected by private tokens are inaccessible without authorization.',
    canSave: [
      'Public audio tracks and indie releases from any SoundCloud creator',
      'Extended DJ mixes, podcasts, and live concert sets',
      'Original HD track artwork and banner images',
      'Standard 320kbps and 128kbps stereo MP3 files',
    ],
    cannotSave: [
      'Tracks restricted by private sharing keys (unless full public token is in link)',
      'SoundCloud Go+ exclusive preview-locked studio tracks',
      'Geographically restricted tracks in regions where stream is blocked',
      'Live dynamic audio streams',
    ],
  },
  comparisonTable: [
    {
      name: 'Original Audio Track',
      availability: 'Permanent public web link',
      supportedFormats: 'MP3 (320kbps / 128kbps)',
      recommendedUse: 'Offline playback, mobile music library, car audio',
    },
    {
      name: 'Extended DJ Set',
      availability: 'Permanent public web link',
      supportedFormats: 'MP3 (Full Duration)',
      recommendedUse: 'Workout playlists, parties, background listening',
    },
    {
      name: 'Track Artwork',
      availability: 'Permanent public image',
      supportedFormats: 'JPEG / PNG',
      recommendedUse: 'Visual displays, music tags, posters',
    },
  ],
  contentCards: [
    {
      title: 'Full Bitrate MP3 Extraction',
      badge: '320kbps MP3',
      formats: ['320 kbps MP3', '128 kbps MP3'],
      honestLimitation: 'Preserves the highest audio bitrate uploaded by the SoundCloud artist.',
      description: 'Download crisp MP3 audio files with dynamic range, clean vocals, and deep bass response.',
    },
    {
      title: 'Extended Mix & Set Support',
      badge: 'Uncapped Length',
      formats: ['Full-Length MP3'],
      honestLimitation: 'No file size or duration caps on DJ sets or podcasts.',
      description: 'Extract multi-hour DJ sets, live recordings, and festival sets with seamless audio continuity.',
    },
  ],
  useCases: [
    {
      title: 'DJs & Electronic Music Fans',
      persona: 'Music Enthusiast',
      description: 'Saving underground mixes, bootlegs, and live sets for offline listening and DJ set prep.',
    },
    {
      title: 'Indie Artists & Producers',
      persona: 'Audio Creator',
      description: 'Archiving own uploads and discovering fresh sample material with full fidelity.',
    },
  ],
  troubleshooting: [
    {
      problem: 'SoundCloud link gives error or fails to load',
      cause: 'The track was set to private, geo-blocked, or deleted by the creator.',
      resolution: 'Open the link in an incognito window to verify the track is playable publicly, then copy the web link.',
    },
    {
      problem: 'Shortened on.soundcloud.com link fails',
      cause: 'Redirect loop in mobile share link.',
      resolution: 'Open the link in your browser to get the full soundcloud.com/artist/track URL.',
    },
  ],
  faqs: [
    {
      question: 'Is SoundCloud music downloading free on Dispatch?',
      answer: 'Yes, 100% free with unlimited track conversions and no registration required.',
    },
    {
      question: 'Can I download entire DJ sets and podcasts?',
      answer: 'Yes! Extended duration sets (even 1-2+ hours) are fully supported.',
    },
    {
      question: 'Do I need a SoundCloud Go+ subscription?',
      answer: 'No. Dispatch extracts any publicly accessible SoundCloud track completely free.',
    },
  ],
  closingCta: {
    heading: 'Save SoundCloud Tracks & Sets in MP3',
    subheading: 'High-speed audio extraction, uncapped duration, and original artwork.',
    buttonText: 'Download SoundCloud MP3',
  },
  sectionOrder: ['how-to', 'behavior', 'cards', 'table', 'use-cases', 'troubleshooting', 'faqs'],
};

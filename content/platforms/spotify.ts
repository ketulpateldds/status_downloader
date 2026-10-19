import { PlatformContent } from '../types';

export const spotifyContent: PlatformContent = {
  slug: 'spotify',
  name: 'Spotify Music',
  tagline: 'High-Fidelity Track, Album & Playlist MP3 Extraction',
  heroH1: 'Download Spotify Tracks & Songs to MP3',
  heroSubtitle: 'Save Spotify songs, public albums, and podcasts in 320kbps MP3 audio with complete ID3 tags, artist metadata, and official HD album cover art.',
  placeholderText: 'Paste public Spotify track link (e.g., https://open.spotify.com/track/... or spotify.link/...)',
  accentColor: 'oklch(0.68 0.22 145)',
  acceptedLinkExamples: [
    'https://open.spotify.com/track/4cOdK2wGLETKBW3PvgPWqT',
    'https://open.spotify.com/album/1DFixLWuPkv3KT3TnV35m3',
    'https://spotify.link/exampleTrackId',
  ],
  toolModes: [
    { id: 'track-mp3', label: 'MP3 Master (320kbps)', hint: 'Extracts studio-quality 320kbps stereo MP3 track' },
    { id: 'album-art', label: 'Original Artwork', hint: 'Downloads full-resolution album cover art in HD JPEG' },
    { id: 'audio-stem', label: 'Standard Audio', hint: 'Lightweight MP3 audio optimized for mobile storage' },
  ],
  behaviorExplanation: {
    heading: 'High Fidelity Streaming vs. Offline MP3 Downloads',
    description: 'Spotify streams music in encrypted proprietary format for subscribers. Dispatch lets you extract public tracks into standard, universally playable MP3 files that work offline on any device, car stereo, or portable player.',
    canSave: [
      'Public individual tracks from any Spotify artist or creator',
      'Public album songs and podcast episodes',
      'Original HD album cover art and metadata tags (title, artist, album)',
      'Universal 320kbps and 192kbps stereo MP3 files',
    ],
    cannotSave: [
      'Private personal user playlists marked secret',
      'Spotify audiobooks requiring individual retail purchase',
      'DRM-encrypted local files stored solely on user devices',
      'Live dynamic session streams',
    ],
  },
  comparisonTable: [
    {
      name: 'Single Track MP3',
      availability: 'Permanent public web link',
      supportedFormats: 'MP3 (320kbps Stereo)',
      recommendedUse: 'Personal music library, offline listening, DJing',
    },
    {
      name: 'Album Track',
      availability: 'Permanent public web link',
      supportedFormats: 'MP3 (320kbps)',
      recommendedUse: 'Full album archiving and backup',
    },
    {
      name: 'Album Artwork',
      availability: 'Permanent public image',
      supportedFormats: 'JPEG / PNG',
      recommendedUse: 'Artwork display, album posters, digital collections',
    },
  ],
  contentCards: [
    {
      title: 'Studio 320kbps MP3 Master',
      badge: '320kbps MP3',
      formats: ['320 kbps MP3', '192 kbps MP3'],
      honestLimitation: 'Preserves the highest audio bitrate delivered by Spotify web streams.',
      description: 'Download crystal-clear high fidelity MP3 audio files with dynamic acoustic range and rich bass response.',
    },
    {
      title: 'Complete ID3 Metadata & Cover Art',
      badge: 'ID3 Tags',
      formats: ['MP3 Tags', 'HD Cover JPEG'],
      honestLimitation: 'Artwork matches the official distributor release on Spotify.',
      description: 'Downloaded tracks include embedded song title, artist name, album name, and official HD cover art.',
    },
  ],
  useCases: [
    {
      title: 'Offline Music Listeners',
      persona: 'Daily Commuter',
      description: 'Enjoying favorite songs without cellular data consumption or unexpected network drops.',
    },
    {
      title: 'DJs & Music Producers',
      persona: 'Audio Creator',
      description: 'Collecting high-quality reference tracks and audio stems for creative studio work.',
    },
  ],
  troubleshooting: [
    {
      problem: 'Spotify link does not load or returns error',
      cause: 'The track is region-restricted or private.',
      resolution: 'Confirm the song plays publicly in a private browser window without logging in, then copy the web link.',
    },
    {
      problem: 'Shortened link fails',
      cause: 'Redirect tracking tokens in the URL.',
      resolution: 'Open the link in your browser to get the full open.spotify.com/track/... URL.',
    },
  ],
  faqs: [
    {
      question: 'Do I need a Spotify Premium subscription?',
      answer: 'No. Dispatch extracts public Spotify music completely free with no account or subscription required.',
    },
    {
      question: 'What audio quality are Spotify songs downloaded in?',
      answer: 'Songs are extracted in high-fidelity 320kbps MP3 audio with crystal-clear stereo sound.',
    },
    {
      question: 'Does the artist get notified when I download a track?',
      answer: 'No. Extraction is anonymous and no personal account information is shared with Spotify.',
    },
  ],
  closingCta: {
    heading: 'Save Spotify Tracks & Songs in MP3',
    subheading: 'High-speed direct audio extraction, 320kbps studio quality, and complete ID3 tags.',
    buttonText: 'Download Spotify MP3',
  },
  sectionOrder: ['how-to', 'behavior', 'cards', 'table', 'use-cases', 'troubleshooting', 'faqs'],
};

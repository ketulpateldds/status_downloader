import { PlatformContent } from '../types';

export const youtubeContent: PlatformContent = {
  slug: 'youtube',
  name: 'YouTube',
  tagline: 'High-Bitrate Archive Engine for Public Videos, Shorts & MP3s',
  heroH1: 'Save Public YouTube Videos, Shorts & Studio-Grade Audio',
  heroSubtitle: 'Direct master stream resolution for documentaries, educational lectures, and Shorts. Multiple resolution tiers from 4K down to efficient mobile formats with zero quality compromises.',
  placeholderText: 'Paste public YouTube link (e.g., https://youtu.be/... or youtube.com/watch?v=...)',
  accentColor: 'oklch(0.60 0.24 25)',
  acceptedLinkExamples: [
    'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    'https://youtu.be/aqz-KE-bpKQ',
    'https://www.youtube.com/shorts/5X7K9p12345',
  ],
  toolModes: [
    { id: 'full-video', label: 'Videos & Shorts', hint: 'Extracts MP4 video streams up to 4K UHD with multichannel AAC audio' },
    { id: 'shorts-vertical', label: 'Shorts Only', hint: 'Vertical 9:16 portrait format optimized for smartphones and mobile review' },
    { id: 'audio-master', label: 'MP3 / M4A Audio', hint: 'Direct extraction of the high-fidelity sound stream (320kbps MP3)' },
  ],
  behaviorExplanation: {
    heading: 'How YouTube Stream Chunking & Bitrates Function',
    description: 'YouTube employs adaptive DASH (Dynamic Adaptive Streaming over HTTP) multiplexing. High-definition resolutions above 1080p separate video streams from audio tracks to save server bandwidth. Dispatch simulates a clean multiplexed join, outputting unified, ready-to-play MP4 files.',
    canSave: [
      'Standard public YouTube videos across all published resolutions (1080p, 720p, 480p, 360p)',
      'Vertical YouTube Shorts with native 9:16 mobile aspect ratio',
      'Creative Commons and public domain video broadcasts',
      'Uncompressed audio tracks extracted at 320kbps MP3 fidelity',
    ],
    cannotSave: [
      'Private videos accessible only to invited Google accounts',
      'Age-restricted videos that require verified adult account sign-in',
      'YouTube Premium original content behind subscription paywalls',
      'Live streams while actively broadcasting (only available once archived publicly)',
    ],
  },
  comparisonTable: [
    {
      name: 'Full Long-Form Video',
      availability: 'Permanent public URL',
      supportedFormats: 'MP4 (1080p, 720p, 480p)',
      recommendedUse: 'Offline lectures, documentary research, long flights',
    },
    {
      name: 'YouTube Shorts',
      availability: 'Permanent public URL',
      supportedFormats: 'MP4 (1080x1920 Vertical)',
      recommendedUse: 'Mobile video reference, quick recipe storage, workout guides',
    },
    {
      name: 'High-Fidelity Audio',
      availability: 'Permanent public URL',
      supportedFormats: 'MP3 (320 kbps), M4A (256 kbps)',
      recommendedUse: 'Podcasts, public domain music, audio lectures for commutes',
    },
    {
      name: 'Video Thumbnails',
      availability: 'Permanent public CDN',
      supportedFormats: 'MaxResDefault JPEG (1280x720)',
      recommendedUse: 'Graphic design reference, video cataloging, editorial review',
    },
  ],
  contentCards: [
    {
      title: 'Crisp 1080p & 720p MP4',
      badge: 'Video + Audio',
      formats: ['1080p Full HD', '720p HD', '480p Mobile'],
      honestLimitation: 'Quality depends entirely on the creator upload resolution. A video uploaded at 720p cannot be magically converted to 1080p.',
      description: 'Clean video multiplexing combining high-bitrate video with clear audio in standard H.264 MP4 format compatible with every device.',
    },
    {
      title: 'YouTube Shorts Vertical Master',
      badge: 'Vertical 9:16',
      formats: ['1080x1920 MP4', 'Audio MP3'],
      honestLimitation: 'Vertical shorts retain the creator original frame rate (30fps or 60fps).',
      description: 'Download concise educational shorts and how-tos without watermarks or overlay buttons obstructing the frame.',
    },
    {
      title: 'Studio Audio Extraction',
      badge: '320kbps MP3',
      formats: ['320 kbps MP3', '256 kbps AAC / M4A'],
      honestLimitation: 'YouTube native audio bitrate tops out at 160-256 kbps Opus; our MP3 encoder encodes at 320kbps CBR for universal hardware playback.',
      description: 'Ideal for saving public debates, symposiums, speeches, and open-source audiobooks for your car stereo or offline MP3 player.',
    },
    {
      title: 'Original Max-Res Thumbnail',
      badge: 'Direct JPEG',
      formats: ['1280x720 HD JPEG', 'WebP'],
      honestLimitation: 'Available only if the creator uploaded a custom high-definition thumbnail image.',
      description: 'Extracts the original art asset in high resolution for design archiving, moodboards, and media library artwork.',
    },
  ],
  useCases: [
    {
      title: 'Researchers & Academics',
      persona: 'University Scholar',
      description: 'Archiving public university lectures, symposium presentations, and scientific conference recordings for offline citation and thesis work.',
    },
    {
      title: 'Remote Commuters & Travelers',
      persona: 'Offline Traveler',
      description: 'Storing long documentaries, language learning tutorials, and coding crash courses before long train rides or intercontinental flights.',
    },
    {
      title: 'Documentary Filmmakers',
      persona: 'Independent Director',
      description: 'Gathering public domain archival footage, government press conferences, and NASA space dispatches under fair use provisions.',
    },
    {
      title: 'Music Teachers & Students',
      persona: 'Instrument Instructor',
      description: 'Saving public masterclasses and instrument demonstrations to practice offline without buffering or video latency.',
    },
  ],
  troubleshooting: [
    {
      problem: 'Error: "Age-restricted content detected"',
      cause: 'YouTube requires a logged-in Google account with verified adult age to view this video.',
      resolution: 'Dispatch does not access private account tokens. Age-restricted links cannot be processed by our public inspection engine.',
    },
    {
      problem: 'Download button delivers an audio-only file',
      cause: 'You may have clicked the MP3 extract option instead of the combined video format.',
      resolution: 'Ensure you select the "1080p Full HD" or "720p HD" format chip before clicking Download.',
    },
    {
      problem: 'The download finishes but video has no sound on Windows Media Player',
      cause: 'Older legacy media players lack modern AAC or Opus audio codecs.',
      resolution: 'Play the file in modern media players such as VLC Player, MPC-HC, or the default Windows "Movies & TV" application.',
    },
    {
      problem: 'Error: "Live broadcast is currently on air"',
      cause: 'YouTube live streams cannot be downloaded while they are actively broadcasting in real time.',
      resolution: 'Wait until the creator ends the live stream and YouTube finishes archiving the stream to a standard public video URL.',
    },
    {
      problem: 'Shorts URL fails to resolve',
      cause: 'Some mobile share links use truncated redirect domains (e.g., youtube.com/shorts/...).',
      resolution: 'Copy the full URL from your browser address bar or use the standard youtu.be format.',
    },
  ],
  faqs: [
    {
      question: 'Is it legal to download YouTube videos for offline personal use?',
      answer: 'Downloading public YouTube content for personal, non-commercial offline study, backup, or fair-use research is widely accepted in many jurisdictions. However, re-uploading, broadcasting, or commercializing someone else creative work without permission is strictly prohibited.',
    },
    {
      question: 'Why does YouTube 1080p sometimes take slightly longer to process?',
      answer: 'YouTube stores 1080p and higher video and audio in separate streams. Our engine multiplexes the video and audio streams together into a standard unified MP4 file before starting your download.',
    },
    {
      question: 'Can I download videos in 4K resolution?',
      answer: 'When a public video was recorded and uploaded in native 4K (2160p) and the server provides the master stream, Dispatch provides the highest available resolution option.',
    },
    {
      question: 'Does this tool work on iPhone and iPad?',
      answer: 'Yes. Safari on iOS 13 and later has a built-in download manager. Simply tap the format link, tap Download, and the file will save directly into your Files app.',
    },
    {
      question: 'Do you keep a copy of the videos on your servers?',
      answer: 'No. Dispatch operates as a real-time stateless gateway. We do not store, host, or cache your downloaded videos on our servers.',
    },
    {
      question: 'Can I download private or unlisted YouTube videos?',
      answer: 'Unlisted videos can be downloaded if you possess the exact link because they are publicly accessible via URL. Strictly private videos requiring Google authentication cannot be fetched.',
    },
    {
      question: 'How do I download just the MP3 audio of a YouTube lecture?',
      answer: 'Paste your link, switch to the "Audio Extract" tab, and select the 320 kbps MP3 option to receive a clean standalone audio file.',
    },
    {
      question: 'Is there a limit on how many videos I can download per day?',
      answer: 'Dispatch is 100% free with no daily limits or account sign-ups. We only enforce basic rate-limiting to prevent automated bot abuse.',
    },
  ],
  closingCta: {
    heading: 'Ready to Archive YouTube Media?',
    subheading: 'High-speed stream resolution, studio audio extracts, and universal MP4 formatting.',
    buttonText: 'Process YouTube Video',
  },
  sectionOrder: ['table', 'how-to', 'cards', 'behavior', 'use-cases', 'troubleshooting', 'faqs'],
};

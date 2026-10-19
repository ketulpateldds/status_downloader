import { PlatformContent } from '../types';

export const capcutContent: PlatformContent = {
  slug: 'capcut',
  name: 'CapCut Template',
  tagline: 'Watermark-Free Template Video & Soundtrack Downloader',
  heroH1: 'Download CapCut Templates Without Watermark',
  heroSubtitle: 'Save trending CapCut video templates and viral edits in full HD 1080p MP4 format without the end card or watermark.',
  placeholderText: 'Paste CapCut template link (e.g., https://www.capcut.com/template-detail/...)',
  accentColor: 'oklch(0.20 0.02 260)',
  acceptedLinkExamples: [
    'https://www.capcut.com/template-detail/7299286607478181121',
    'https://mobile.capcut.com/t/exampleId',
  ],
  toolModes: [
    { id: 'video-clean', label: 'Clean MP4 Video', hint: 'Downloads video in full HD with zero CapCut watermark' },
    { id: 'template-audio', label: 'Template Soundtrack', hint: 'Extracts trending TikTok/CapCut audio as MP3' },
  ],
  behaviorExplanation: {
    heading: 'Watermark-Free Template Export',
    description: 'CapCut is the premier mobile video editing application. When previewing templates online, Dispatch extracts the original clean H.264 video feed before the watermark overlay is applied.',
    canSave: [
      'Public CapCut templates shared from the mobile app or web',
      'Full 1080p and 720p vertical video clips with original sound',
      'Trending background music and sound effect tracks in MP3',
      'Direct MP4 videos without CapCut logo or outro screen',
    ],
    cannotSave: [
      'Unpublished drafts stored locally in personal CapCut app storage',
      'Private template links restricted to enterprise team spaces',
      'Templates requiring paid font or sticker licenses not rendered in preview',
    ],
  },
  comparisonTable: [
    {
      name: 'Template Video (Clean)',
      availability: 'Permanent public web link',
      supportedFormats: 'MP4 (1080p / 720p)',
      recommendedUse: 'Content inspiration, video editing, social media reels',
    },
    {
      name: 'Trending Audio Track',
      availability: 'Permanent public web link',
      supportedFormats: 'MP3',
      recommendedUse: 'Video sound design, audio remixing',
    },
    {
      name: 'Template Cover Frame',
      availability: 'Permanent public image',
      supportedFormats: 'JPEG / PNG',
      recommendedUse: 'Video thumbnail, moodboard reference',
    },
  ],
  contentCards: [
    {
      title: 'Zero Watermark & Outro Removal',
      badge: 'No Watermark',
      formats: ['1080p MP4', '720p MP4'],
      honestLimitation: 'Preserves the pristine visual quality before CapCut branding overlay.',
      description: 'Get clean MP4 video files without the annoying CapCut watermark logo or the 3-second black ending card.',
    },
    {
      title: 'Isolated Template Audio Extraction',
      badge: 'Original Sound',
      formats: ['MP3 Audio'],
      honestLimitation: 'Direct audio stream from the template background track.',
      description: 'Extract trending viral beats, slowed+reverb soundtracks, and sound effects directly in MP3.',
    },
  ],
  useCases: [
    {
      title: 'Short-Form Video Creators',
      persona: 'TikTok & Reels Creator',
      description: 'Studying transitions, pacing, and viral editing styles for personal video productions.',
    },
    {
      title: 'Desktop Video Editors',
      persona: 'Post-Production Editor',
      description: 'Bringing mobile template assets into Premiere Pro, After Effects, or DaVinci Resolve.',
    },
  ],
  troubleshooting: [
    {
      problem: 'CapCut link fails to resolve',
      cause: 'The template was deleted or made private by its creator.',
      resolution: 'Open the link in your web browser to ensure the template is still active, then paste the full URL.',
    },
    {
      problem: 'Shortened mobile share link fails',
      cause: 'App deep link redirections.',
      resolution: 'Open the template in your mobile browser and copy the address from the URL bar.',
    },
  ],
  faqs: [
    {
      question: 'Are CapCut template downloads completely watermark-free?',
      answer: 'Yes! The downloaded MP4 has no CapCut logo watermark or closing branding card.',
    },
    {
      question: 'Is it free to use?',
      answer: 'Yes, Dispatch provides 100% free CapCut template downloads with no registration.',
    },
    {
      question: 'Can I download the audio separately from the video?',
      answer: 'Yes, our tool extracts both the full HD MP4 video and the standalone MP3 audio track.',
    },
  ],
  closingCta: {
    heading: 'Save CapCut Templates Without Watermark',
    subheading: 'High-speed clean MP4 video downloads, 1080p resolution, and no logo.',
    buttonText: 'Download CapCut Template',
  },
  sectionOrder: ['how-to', 'behavior', 'cards', 'table', 'use-cases', 'troubleshooting', 'faqs'],
};

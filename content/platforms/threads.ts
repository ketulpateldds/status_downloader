import { PlatformContent } from '../types';

export const threadsContent: PlatformContent = {
  slug: 'threads',
  name: 'Threads',
  tagline: 'Instagram Threads Video & Photo Extraction Engine',
  heroH1: 'Download Threads Videos & Photos in HD',
  heroSubtitle: 'Save videos, photo carousels, and media clips shared on Instagram Threads in original high resolution with no quality loss.',
  placeholderText: 'Paste Threads post link (e.g., https://www.threads.net/@username/post/...)',
  accentColor: 'oklch(0.20 0.02 260)',
  acceptedLinkExamples: [
    'https://www.threads.net/@zuck/post/Cx12345678',
    'https://threads.net/t/examplePost',
  ],
  toolModes: [
    { id: 'threads-video', label: 'Threads Video', hint: 'Extracts full resolution vertical or landscape MP4 video' },
    { id: 'threads-photo', label: 'Original Photo', hint: 'Downloads uncompressed original JPEG image from post' },
  ],
  behaviorExplanation: {
    heading: 'Public Threads vs. Private Profiles',
    description: 'Threads is part of the Instagram network. Dispatch downloads videos and images from all publicly viewable Threads profiles without requiring you to log in.',
    canSave: [
      'Public Threads videos in original full resolution MP4',
      'High-definition single images and carousel photos',
      'Direct downloads with no watermark or compression loss',
      'Original creator audio in high quality',
    ],
    cannotSave: [
      'Posts from private Threads profiles requiring follow approval',
      'Ephemeral or deleted Threads posts',
      'Text-only threads without attached media',
    ],
  },
  comparisonTable: [
    {
      name: 'Threads Video Post',
      availability: 'Permanent public web link',
      supportedFormats: 'MP4 (HD Video)',
      recommendedUse: 'Social media archives, offline viewing, content sharing',
    },
    {
      name: 'Threads Photo Post',
      availability: 'Permanent public web link',
      supportedFormats: 'JPEG / PNG (Original Resolution)',
      recommendedUse: 'High-res image saves, photography archiving',
    },
    {
      name: 'Post Audio',
      availability: 'Permanent public stream',
      supportedFormats: 'MP3',
      recommendedUse: 'Audio clips and soundbites',
    },
  ],
  contentCards: [
    {
      title: 'Full Resolution Video Archiving',
      badge: 'Original HD',
      formats: ['MP4 Video (1080p)'],
      honestLimitation: 'Preserves the exact master bitrate provided by Meta Threads servers.',
      description: 'Download crisp, high-framerate Threads videos without re-encoding compression or added artifacts.',
    },
    {
      title: 'Uncompressed Photo Carousels',
      badge: 'Lossless Image',
      formats: ['Original JPEG / PNG'],
      honestLimitation: 'Captures full pixel dimensions as uploaded by the photographer or artist.',
      description: 'Save high-definition photos and entire gallery slides in their original uncompressed format.',
    },
  ],
  useCases: [
    {
      title: 'Social Media Archivists',
      persona: 'Digital Curator',
      description: 'Preserving important cultural moments, breaking news footage, and viral discussions.',
    },
    {
      title: 'Visual Designers & Photographers',
      persona: 'Creative Professional',
      description: 'Collecting high-resolution reference photos and graphic assets directly from the community.',
    },
  ],
  troubleshooting: [
    {
      problem: 'Post returns error or not found',
      cause: 'The author has a private profile, or deleted the post.',
      resolution: 'Ensure the post is viewable publicly in a private browser window without logging in.',
    },
    {
      problem: 'Only text displays with no media',
      cause: 'The Threads link contains no image or video attachment.',
      resolution: 'Check that the post contains an attached video or image before submitting the link.',
    },
  ],
  faqs: [
    {
      question: 'Do I need an Instagram or Threads account to download?',
      answer: 'No. You can download media from public Threads posts completely anonymously with no account.',
    },
    {
      question: 'Is Threads media downloading free?',
      answer: 'Yes, Dispatch provides 100% free downloads with no limits or subscriptions.',
    },
    {
      question: 'Are downloaded Threads videos watermarked?',
      answer: 'No! Videos are downloaded in their raw format with zero watermark or branding added.',
    },
  ],
  closingCta: {
    heading: 'Save Threads Videos & Photos in HD',
    subheading: 'High-speed media extraction, full resolution MP4 and JPEG, no watermark.',
    buttonText: 'Download Threads Media',
  },
  sectionOrder: ['how-to', 'behavior', 'cards', 'table', 'use-cases', 'troubleshooting', 'faqs'],
};

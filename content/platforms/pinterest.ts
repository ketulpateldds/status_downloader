import { PlatformContent } from '../types';

export const pinterestContent: PlatformContent = {
  slug: 'pinterest',
  name: 'Pinterest',
  tagline: 'Lossless Visual Archive for Public Pins, Idea Videos & High-Res Artwork',
  heroH1: 'Save Public Pinterest Videos, Idea Pins & Original Artwork',
  heroSubtitle: 'Download high-definition Pinterest Idea videos, animated GIFs, and uncompressed original photography directly from public boards. Retains maximum resolution and color profiles.',
  placeholderText: 'Paste public Pinterest pin link (e.g., https://pinterest.com/pin/... or pin.it/...)',
  accentColor: 'oklch(0.58 0.22 25)',
  acceptedLinkExamples: [
    'https://www.pinterest.com/pin/123456789012345678/',
    'https://pin.it/7xY1234',
    'https://www.pinterest.com/pin/987654321098765432/',
  ],
  toolModes: [
    { id: 'video-pin', label: 'Idea & Video Pins', hint: 'Extracts full 1080p MP4 video pins with audio intact' },
    { id: 'original-image', label: 'Original Resolution Image', hint: 'Bypasses thumbnail downscaling to download the master source image' },
    { id: 'animated-gif', label: 'Animated GIF', hint: 'Saves motion graphics and animated pins in looping format' },
  ],
  behaviorExplanation: {
    heading: 'How Pinterest Image Downscaling & Video Pins Operate',
    description: 'When an image or video is uploaded to Pinterest, the platform generates multiple scaled versions (736x, 474x, 236x thumbnails). Standard right-click saving often grabs a downscaled thumbnail. Dispatch resolves the original master asset URL (originals/ path) for true uncompressed quality.',
    canSave: [
      'Original full-resolution photography and graphic design pins',
      'High-definition Idea Pins and video tutorials with audio',
      'Animated GIF pins in original looping playback',
      'Infographics and typography specimen sheets at full height',
    ],
    cannotSave: [
      'Secret (private) Pinterest boards shared only with invited collaborators',
      'Pins requiring explicit business login credentials to inspect',
      'External merchant websites linked by product pins (only the pin media is saved)',
      'Deleted pins removed by the original curator',
    ],
  },
  comparisonTable: [
    {
      name: 'Original Resolution Pin',
      availability: 'Permanent public CDN',
      supportedFormats: 'Original JPEG / PNG',
      recommendedUse: 'High-res moodboards, typography research, print inspiration',
    },
    {
      name: 'Idea Video Pin',
      availability: 'Permanent public CDN',
      supportedFormats: 'MP4 (1080x1920 / 720p)',
      recommendedUse: 'Craft tutorials, cooking steps, fashion lookbooks',
    },
    {
      name: 'Animated Pin',
      availability: 'Permanent public CDN',
      supportedFormats: 'GIF / MP4 Loop',
      recommendedUse: 'UI animation inspiration, motion graphics reference',
    },
    {
      name: 'Tall Infographics',
      availability: 'Permanent public CDN',
      supportedFormats: 'Full-Height PNG / JPEG',
      recommendedUse: 'Educational reference, visual timelines, data charts',
    },
  ],
  contentCards: [
    {
      title: 'Original Source Artwork',
      badge: 'Uncompressed Master',
      formats: ['Full-Res PNG / JPEG', 'WebP'],
      honestLimitation: 'Quality is bounded by what the original author uploaded. We pull the raw uncompressed master asset directly.',
      description: 'Never settle for a 736px thumbnail again. Fetches the pristine master resolution with full color fidelity preserved.',
    },
    {
      title: 'Idea Pin Video Stream',
      badge: 'Vertical MP4',
      formats: ['1080p Full HD', '720p HD MP4'],
      honestLimitation: 'Audio is included whenever the creator added a soundtrack or spoken voiceover.',
      description: 'Capture step-by-step DIY renovations, recipe preparations, and art techniques in smooth, high-definition video.',
    },
    {
      title: 'Full-Length Infographics',
      badge: 'Extended Vertical',
      formats: ['Lossless PNG', 'High-Res JPEG'],
      honestLimitation: 'Very tall infographics (over 5000px height) are delivered in complete uncropped single files.',
      description: 'Preserve comprehensive cheat sheets, historical timelines, and architectural diagrams without blurriness.',
    },
    {
      title: 'Motion & UI Animation Pin',
      badge: 'Looping GIF',
      formats: ['Animated GIF', 'Smooth MP4'],
      honestLimitation: 'Retains the original frame delay and looping parameters set by the motion designer.',
      description: 'Essential for product designers, web developers, and animators cataloging tactile micro-interaction references.',
    },
  ],
  useCases: [
    {
      title: 'Interior Designers & Architects',
      persona: 'Spatial Designer',
      description: 'Curating uncompressed material swatches, architectural textures, and furniture details for physical client presentation boards.',
    },
    {
      title: 'Graphic Designers & Typographers',
      persona: 'Brand Designer',
      description: 'Collecting high-resolution editorial layout specimens, vintage poster scans, and packaging details for studio swipe files.',
    },
    {
      title: 'Woodworkers, Crafters & Artists',
      persona: 'Artisan',
      description: 'Storing step-by-step carpentry joinery videos and ceramic glazing instructions to follow in the studio without internet.',
    },
    {
      title: 'Fashion Stylists & Illustrators',
      persona: 'Apparel Creator',
      description: 'Archiving runway details, pattern construction diagrams, and historical costume references at full optical sharpness.',
    },
  ],
  troubleshooting: [
    {
      problem: 'Error: "Pin is located on a Secret Board"',
      cause: 'The board curator has marked this board as Secret (private).',
      resolution: 'Dispatch cannot access secret boards. Move the pin to a public board or ask the curator to adjust visibility.',
    },
    {
      problem: 'Shortened link (pin.it/...) fails to resolve',
      cause: 'Pin.it links redirect through mobile app protocols that can occasionally drop parameters.',
      resolution: 'Open the link in your desktop or mobile browser to expand the full pinterest.com/pin/... URL, then paste that here.',
    },
    {
      problem: 'The downloaded image is blurry',
      cause: 'You may have copied a thumbnail URL rather than the actual Pin detail page.',
      resolution: 'Ensure you are on the specific Pin view before copying the link so Dispatch can extract the /originals/ master image.',
    },
    {
      problem: 'Video has no sound',
      cause: 'Many Pinterest video pins are created as silent aesthetic clips without audio tracks.',
      resolution: 'If the video has sound when played on Pinterest, check that your device volume is not set to silent mode.',
    },
    {
      problem: 'Download button opens image in a new tab instead of saving',
      cause: 'Browsers often display JPEG/PNG files natively in a new viewport.',
      resolution: 'Right-click the image and choose "Save Image As...", or on mobile, long-press the image and tap "Save to Photos".',
    },
  ],
  faqs: [
    {
      question: 'How do I download the full resolution image from Pinterest?',
      answer: 'Paste the pin URL into Dispatch. Our engine automatically bypasses the 236px and 736px thumbnail CDN buckets to retrieve the raw /originals/ asset at maximum resolution.',
    },
    {
      question: 'Can I download videos from Pinterest Idea Pins?',
      answer: 'Yes. Idea Pins with video footage are parsed and converted into standard MP4 video files with audio intact.',
    },
    {
      question: 'Do I need a Pinterest account or login to download pins?',
      answer: 'No. Dispatch requires no login, no Pinterest account, and no browser extension.',
    },
    {
      question: 'Can I download pins from Secret Boards?',
      answer: 'No. Secret boards are private and encrypted to authorized board members. Dispatch strictly operates on public pins.',
    },
    {
      question: 'Is it legal to save Pinterest images for my personal design moodboard?',
      answer: 'Yes, collecting references for personal study, moodboarding, and offline inspiration is a standard fair-use workflow. Commercial redistribution without creator permission is not permitted.',
    },
    {
      question: 'How do I save Pinterest videos on iPhone?',
      answer: 'Paste your Pinterest link in mobile Safari, tap Download on the MP4 format option, and choose "Save Video" from the iOS share sheet to add it to your Photos app.',
    },
    {
      question: 'Does Pinterest notify the pinner that I saved their pin?',
      answer: 'No. Downloads through Dispatch are anonymous server queries that do not register in user notification feeds.',
    },
    {
      question: 'What image formats does Pinterest use?',
      answer: 'Pinterest primarily serves high-quality JPEG and PNG files, with WebP used for some modern responsive previews. Dispatch delivers the original master file format.',
    },
  ],
  closingCta: {
    heading: 'Archive High-Res Visual References',
    subheading: 'Original uncompressed master assets, Idea Pin MP4s, and zero resolution compromises.',
    buttonText: 'Process Pinterest Pin',
  },
  sectionOrder: ['cards', 'how-to', 'table', 'behavior', 'use-cases', 'troubleshooting', 'faqs'],
};

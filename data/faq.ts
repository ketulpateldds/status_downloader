export interface FAQItem {
  question: string;
  answer: string;
}

export const homeFaqs: FAQItem[] = [
  {
    question: 'Is Dispatch free to use?',
    answer:
      'Yes! Dispatch is 100% free with no hidden charges, subscriptions, or download limits. You can save as many videos, songs, or photos as you need.',
  },
  {
    question: 'Do I need to create an account or install anything?',
    answer:
      'No registration or software installation is required. Everything runs securely right inside your web browser on mobile, tablet, or desktop.',
  },
  {
    question: 'What formats and qualities can I download?',
    answer:
      'You can download videos in high definition (HD 1080p, 720p, 4K, and up to 8K when available) in standard MP4 format. You can also extract audio directly as high-bitrate MP3 or M4A music files.',
  },
  {
    question: 'Can I use it on my iPhone, iPad, or Android phone?',
    answer:
      'Yes, Dispatch works seamlessly on all phones. On iPhone, videos save directly to your Files or Photos app via Safari. On Android, files go straight to your Downloads folder in Chrome.',
  },
  {
    question: 'Why is my download link not working?',
    answer:
      'Make sure the post or video is publicly viewable. Dispatch cannot access private accounts, password-protected videos, or direct messages. Also check that you copied the complete link starting with https://.',
  },
  {
    question: 'Do you store or keep copies of the files I download?',
    answer:
      'Never. We do not store, host, or cache your files or personal data. Files transfer directly from the source server to your device with complete privacy.',
  },
];

import type { Metadata, Viewport } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
});

export const viewport: Viewport = {
  themeColor: '#2b5fe6',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: 'Dispatch · Free Online Video & Audio Downloader',
    template: '%s · Dispatch',
  },
  description:
    'Download videos, music, and photos from YouTube, Instagram, TikTok, Facebook, X, Pinterest, Spotify, SoundCloud, CapCut, and Threads. Fast, safe, 100% free, and no registration needed.',
  keywords: [
    'dispatch video downloader',
    'free video downloader',
    'youtube downloader',
    'instagram reels downloader',
    'tiktok downloader without watermark',
    'convert video to mp3',
    'facebook video downloader',
    'twitter x video downloader',
    'save online video',
  ],
  metadataBase: new URL('https://dispatch.local'),
  openGraph: {
    title: 'Dispatch · Download, Convert and Save Any Media',
    description:
      'Paste a link, pick a format, and get your video, music or photo in seconds. Free, safe, and easy.',
    siteName: 'Dispatch',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={plusJakarta.variable} suppressHydrationWarning>
      <body className="min-h-screen flex flex-col font-sans text-navy antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

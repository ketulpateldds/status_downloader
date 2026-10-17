import type { Metadata, Viewport } from 'next';
import { Newsreader, Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CookieBanner } from '@/components/CookieBanner';

const newsreader = Newsreader({
  subsets: ['latin'],
  variable: '--font-newsreader',
  display: 'swap',
  style: ['normal'], // Discipline: No italic display
  weight: ['400', '600', '700'],
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
  weight: ['400', '500', '700'],
});

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fbfbf9' },
    { media: '(prefers-color-scheme: dark)', color: '#161616' },
  ],
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: 'Dispatch · Free Public Social Media Video & Audio Utility',
    template: '%s · Dispatch Public Media Wire',
  },
  description:
    'Independent frontend utility for inspecting and saving public social media reels, videos, shorts, photos, and high-fidelity MP3 audio. 100% free, private, and public content only.',
  keywords: [
    'social media downloader',
    'public video archive',
    'reels downloader',
    'shorts downloader',
    'tiktok without watermark',
    'extract mp3 from video',
    'public media desk',
  ],
  metadataBase: new URL('https://dispatch.local'),
  openGraph: {
    title: 'Dispatch · The Public Media Utility Desk',
    description: 'Precision web media stream inspector and archiver. Zero tracking, no accounts, public content only.',
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
    <html
      lang="en"
      className={`${newsreader.variable} ${plusJakarta.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
              <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var v = localStorage.getItem('dispatch_theme_variant') || 'newsprint';
                  document.documentElement.setAttribute('data-variant', v);
                  var t = localStorage.getItem('theme');
                  if (t === 'dark' || (!t && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
        <body className="min-h-screen flex flex-col bg-paper text-ink transition-colors selection:bg-signal selection:text-white">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}

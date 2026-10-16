# Dispatch · Public Social Media Wire & Media Utility

A precision-engineered, editorial-utility frontend for inspecting and saving publicly accessible social media media (Reels, Shorts, Videos, Photos, and high-fidelity MP3 audio).

Designed strictly in accordance with the **Hallmark Design Skill** (Antigravity) and modern anti-AI-slop principles:
- **Concept:** Archival Wire Desk / Newsprint Utility.
- **Tokens:** Locked OKLCH palette, warm cream unbleached paper, carbon ink, and safety signal-orange landmarks.
- **Typography:** Strictly roman headings (no italic headers), Newsreader + Plus Jakarta Sans + JetBrains Mono.
- **Purity:** No purple/pink gradient blobs, no floating glass cards, no fabricated statistics, and no emoji.
- **Motif:** The Perforated Wire Ticket receipt with live inspection chips.

---

## 🛠️ Project Structure

```
├── app/
│   ├── (tools)/[platform]/page.tsx  # Deep, unique platform pages (8 platforms)
│   ├── blog/                         # Archival essays & codec breakdowns
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx
│   ├── about/page.tsx                # Project philosophy & stateless architecture
│   ├── contact/page.tsx              # Validated contact desk
│   ├── dmca/page.tsx                 # DMCA takedown notice submission
│   ├── privacy/page.tsx              # Stateless privacy doctrine
│   ├── terms/page.tsx                # Terms of public service
│   ├── disclaimer/page.tsx           # Trademark & fair use disclaimer
│   ├── globals.css                   # Hallmark design tokens & typography
│   ├── layout.tsx                    # Root layout with fonts & theme
│   ├── not-found.tsx                 # Custom 404 wire receipt
│   ├── page.tsx                      # Central Workbench homepage
│   ├── robots.ts                     # SEO robots
│   └── sitemap.ts                    # Dynamic sitemap generator
├── components/
│   ├── DownloaderForm.tsx            # Workbench link input with auto-detection
│   ├── MediaPreviewTicket.tsx        # Signature perforated ticket receipt
│   ├── Header.tsx                    # N1b SaaS Three-Section Nav with live status
│   ├── Footer.tsx                    # Ft5 Statement Ledger
│   ├── TrustLedger.tsx               # Four trust points
│   ├── ToolDirectory.tsx             # 8 platform cards
│   ├── DeviceSupportTabs.tsx         # Android, iPhone, PC/Mac tabs
│   ├── CapabilitiesMatrix.tsx        # "What can you download?" grid
│   ├── WhyUsSection.tsx              # Anti-adware comparison
│   ├── ResponsibleUseBlock.tsx       # Creator ethics & public boundaries
│   ├── FaqAccordion.tsx              # Accessible accordion with FAQPage JSON-LD
│   ├── AdSlot.tsx                    # Layout-stable sponsorship placeholders
│   └── CookieBanner.tsx              # Non-intrusive stateless consent
├── content/
│   ├── platforms/                    # Dedicated typed content files per platform
│   │   ├── instagram.ts
│   │   ├── youtube.ts
│   │   ├── tiktok.ts
│   │   ├── twitter.ts
│   │   ├── facebook.ts
│   │   ├── pinterest.ts
│   │   ├── snapchat.ts
│   │   ├── mp3.ts
│   │   └── index.ts
│   └── blog.ts                       # 3 sample research articles
└── lib/
    ├── api/downloader.ts             # Clean mock service layer (MediaInfo, FormatOption)
    └── validation/url.ts             # Zod URL validation schema
```

---

## 🔌 How to Replace the Mock Layer with a Real Backend Later

Currently, `lib/api/downloader.ts` serves as a typed mock layer that returns realistic media info after a short simulated latency.

To connect a real backend (e.g. `yt-dlp` + FastAPI or a Node.js microservice):

1. Open `lib/api/downloader.ts`.
2. Locate the `fetchMediaDetails(url: string)` function.
3. Replace the mock return payload with a standard `fetch('/api/resolve?url=' + encodeURIComponent(url))` call.
4. Ensure your backend returns the typed `MediaInfo` interface:
   - `id`: string
   - `platform`: 'instagram' | 'youtube' | 'tiktok' | 'twitter' | 'facebook' | 'pinterest' | 'snapchat' | 'mp3'
   - `title`: string
   - `author`: string
   - `authorHandle`: string
   - `thumbnailUrl`: string
   - `formats`: `FormatOption[]` (with `label`, `quality`, `format`, `sizeFormatted`, `url`)
5. **Zero UI components or pages will need to be touched**, because the entire frontend is completely decoupled from the data provider!

---

## 🚀 Running Locally

```bash
npm install
npm run dev
```

Visit `http://localhost:3000` in your browser.

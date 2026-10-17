"use client";

import React, { useState } from "react";
import { Smartphone, Apple, Monitor } from "lucide-react";

export function DeviceSupportTabs() {
  const [activeTab, setActiveTab] = useState<"iphone" | "android" | "desktop">(
    "iphone",
  );

  const devices = {
    iphone: {
      name: "iPhone & iPad (iOS 13+)",
      browserNote: "Native Safari Browser Engine",
      steps: [
        {
          num: "01",
          title: "Copy Public Link",
          desc: 'In the target social app (Instagram, YouTube, TikTok, X), tap the Share icon and select "Copy Link".',
        },
        {
          num: "02",
          title: "Inspect in Safari",
          desc: 'Open Safari, paste your link into Dispatch, and tap "Inspect Stream". Choose your preferred format (e.g. 1080p).',
        },
        {
          num: "03",
          title: "Save to Files or Camera Roll",
          desc: 'Tap Download. Safari saves the MP4 directly into your Files app. Tap the Safari download arrow, open the video, tap Share, and select "Save Video" to add it to your Photos camera roll.',
        },
      ],
      storageLocation: "Files App > Downloads > Save to Photos",
    },
    android: {
      name: "Android Phones & Tablets",
      browserNote: "Chrome, Firefox, Brave, Samsung Internet",
      steps: [
        {
          num: "01",
          title: "Copy Public Share URL",
          desc: 'Tap the three dots or Share button in your social media app, then choose "Copy Link".',
        },
        {
          num: "02",
          title: "Select Format in Browser",
          desc: "Paste the link into Dispatch using Chrome or Firefox, then select your video resolution or MP3 audio option.",
        },
        {
          num: "03",
          title: "Direct Gallery Access",
          desc: "Tap Download. The file is placed immediately in your system Downloads folder and is automatically indexed into your Google Photos or Gallery app.",
        },
      ],
      storageLocation: "Internal Storage > Download > Gallery Indexed",
    },
    desktop: {
      name: "Mac, Windows & Linux Computers",
      browserNote: "Chrome, Edge, Safari, Firefox, Arc",
      steps: [
        {
          num: "01",
          title: "Copy URL from Address Bar",
          desc: "Copy the complete URL directly from your desktop browser address bar while viewing the public post.",
        },
        {
          num: "02",
          title: "Inspect Stream on Dispatch",
          desc: "Paste into the Dispatch workbench. Instant stream manifest analysis detects resolution tiers up to 4K.",
        },
        {
          num: "03",
          title: "Instant Multi-Thread Save",
          desc: "Click Download on your chosen format. The file is saved directly into your operating system default Downloads folder without re-encoding delays.",
        },
      ],
      storageLocation: "PC / Mac / Linux Default Downloads Directory",
    },
  };

  const current = devices[activeTab];

  return (
    <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b border-border gap-4">
        <div>
          <span className="font-mono text-xs uppercase text-signal font-semibold tracking-wider block mb-1">
            &bull; DEVICE WORKFLOWS
          </span>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl text-ink">
            How to Save Media on Any Device
          </h2>
        </div>
        <p className="font-sans text-xs text-ink-muted max-w-md leading-relaxed">
          No specialized apps, jailbreaks, or configuration profiles required.
          Dispatch functions natively through standard browser download
          managers.
        </p>
      </div>

      {/* Device Selector Tabs */}
      <div className="flex border-b border-border font-mono text-xs">
        <button
          onClick={() => setActiveTab("iphone")}
          className={`px-6 py-3 font-semibold flex items-center gap-2 border-b-2 transition-colors ${
            activeTab === "iphone"
              ? "border-signal text-signal bg-paper-2"
              : "border-transparent text-ink-muted hover:text-ink"
          }`}
        >
          <Apple className="w-4 h-4" />
          <span>IPHONE / IPAD</span>
        </button>
        <button
          onClick={() => setActiveTab("android")}
          className={`px-6 py-3 font-semibold flex items-center gap-2 border-b-2 transition-colors ${
            activeTab === "android"
              ? "border-signal text-signal bg-paper-2"
              : "border-transparent text-ink-muted hover:text-ink"
          }`}
        >
          <Smartphone className="w-4 h-4" />
          <span>ANDROID</span>
        </button>
        <button
          onClick={() => setActiveTab("desktop")}
          className={`px-6 py-3 font-semibold flex items-center gap-2 border-b-2 transition-colors ${
            activeTab === "desktop"
              ? "border-signal text-signal bg-paper-2"
              : "border-transparent text-ink-muted hover:text-ink"
          }`}
        >
          <Monitor className="w-4 h-4" />
          <span>PC / MAC / LINUX</span>
        </button>
      </div>

      {/* Active Tab Panel */}
      <div className="wire-border bg-paper-2 p-6 sm:p-8 mt-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 border-b border-border gap-2">
          <div>
            <h3 className="font-serif font-bold text-2xl text-ink">
              {current.name}
            </h3>
            <span className="font-mono text-xs text-ink-muted">
              SUPPORTED BROWSERS: {current.browserNote}
            </span>
          </div>
          <div className="font-mono text-xs px-3 py-1 bg-paper wire-border text-signal font-semibold">
            DESTINATION: {current.storageLocation}
          </div>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {current.steps.map((st) => (
            <div
              key={st.num}
              className="bg-paper p-6 wire-border space-y-3 relative"
            >
              <span className="font-mono text-xs font-bold text-signal px-2 py-0.5 bg-paper-2 border border-border inline-block">
                STEP {st.num}
              </span>
              <h4 className="font-serif font-bold text-lg text-ink">
                {st.title}
              </h4>
              <p className="font-sans text-xs text-ink-muted leading-relaxed">
                {st.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

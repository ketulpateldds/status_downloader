"use client";

import React, { useRef, useState, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX, Sparkles, CheckCircle2 } from "lucide-react";

export function ShowcaseVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      if (video.duration) {
        setProgress((video.currentTime / video.duration) * 100);
      }
    };

    video.addEventListener("timeupdate", handleTimeUpdate);
    return () => video.removeEventListener("timeupdate", handleTimeUpdate);
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;

    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  return (
    <div className="relative group w-full max-w-lg aspect-video rounded-3xl sm:rounded-4xl overflow-hidden shadow-card border border-slate-200/80 bg-slate-950">
      {/* HTML5 Video element */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        onClick={togglePlay}
        className="w-full h-full object-cover cursor-pointer"
      >
        <source src="/showcase.mp4" type="video/mp4" />
        <source src="/showcase.webm" type="video/webm" />
        Your browser does not support HTML5 video.
      </video>

      {/* Floating Platform Badges (Right side) */}
      <div className="absolute top-4 right-4 z-20 flex flex-col gap-2 pointer-events-none">
        <span className="bg-gradient-to-r from-orange-500 to-amber-500 text-white font-extrabold text-[11px] px-3 py-1 rounded-full shadow-lg shadow-orange-500/30 tracking-wider">
          MP4 · 4K
        </span>
        <span className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-extrabold text-[11px] px-3 py-1 rounded-full shadow-lg shadow-purple-600/30 tracking-wider">
          MP3 · 320k
        </span>
        <span className="bg-gradient-to-r from-amber-500 to-yellow-500 text-white font-extrabold text-[11px] px-3 py-1 rounded-full shadow-lg shadow-amber-500/30 tracking-wider">
          JPG · Original
        </span>
        <span className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-extrabold text-[11px] px-3 py-1 rounded-full shadow-lg shadow-blue-600/30 tracking-wider">
          WEBP · Clean
        </span>
      </div>

      {/* Live Badge (Top Left) */}
      <div className="absolute top-4 left-4 z-20 pointer-events-none">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white text-[11px] font-bold">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>FAST DEMO</span>
        </div>
      </div>

      {/* Center Play Button Overlay (when paused) */}
      {!isPlaying && (
        <div
          onClick={togglePlay}
          className="absolute inset-0 bg-black/40 backdrop-blur-xs flex items-center justify-center cursor-pointer z-20 transition-opacity"
        >
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white shadow-2xl flex items-center justify-center text-brand-blue hover:scale-110 transition-transform">
            <Play className="w-7 h-7 sm:w-9 sm:h-9 fill-current ml-1" />
          </div>
        </div>
      )}

      {/* Bottom Floating Bar */}
      <div className="absolute bottom-0 inset-x-0 p-3 sm:p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-20 flex items-center justify-between gap-3 text-white opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="flex items-center gap-2">
          <button
            onClick={togglePlay}
            className="p-1.5 rounded-lg bg-white/20 hover:bg-white/30 text-white transition-colors"
            title={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? (
              <Pause className="w-4 h-4 fill-current" />
            ) : (
              <Play className="w-4 h-4 fill-current ml-0.5" />
            )}
          </button>

          <button
            onClick={toggleMute}
            className="p-1.5 rounded-lg bg-white/20 hover:bg-white/30 text-white transition-colors"
            title={isMuted ? "Unmute" : "Mute"}
          >
            {isMuted ? (
              <VolumeX className="w-4 h-4" />
            ) : (
              <Volume2 className="w-4 h-4" />
            )}
          </button>
        </div>

        <div className="text-[11px] font-semibold text-white/80">
          6s Preview · 60fps
        </div>
      </div>

      {/* Thin bottom progress bar */}
      <div className="absolute bottom-0 inset-x-0 h-1 bg-white/20 z-30">
        <div
          className="h-full bg-gradient-to-r from-brand-blue to-purple-500 transition-all duration-75"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}

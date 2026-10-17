import React from "react";

interface PlatformIconProps {
  platform: string;
  className?: string;
  size?: number | string;
}

/**
 * Official vector glyphs for supported platforms.
 */
export function PlatformGlyph({
  platform,
  className = "w-6 h-6",
}: {
  platform: string;
  className?: string;
}) {
  const norm = platform.toLowerCase().trim();

  switch (norm) {
    case "youtube":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className={className}
          aria-label="YouTube"
        >
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      );

    case "instagram":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className={className}
          aria-label="Instagram"
        >
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
        </svg>
      );

    case "tiktok":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className={className}
          aria-label="TikTok"
        >
          <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-2.891 2.895 2.896 2.896 0 0 1-2.896-2.895 2.896 2.896 0 0 1 2.896-2.896c.394 0 .769.076 1.116.216V9.43a6.34 6.34 0 0 0-1.116-.1C5.972 9.33 3 12.302 3 15.968 3 19.633 5.972 22.605 9.478 22.605c3.506 0 6.478-2.972 6.478-6.637V8.924a8.172 8.172 0 0 0 4.883 1.602V7.081a4.843 4.843 0 0 1-1.25-.395z" />
        </svg>
      );

    case "facebook":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className={className}
          aria-label="Facebook"
        >
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      );

    case "twitter":
    case "x":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className={className}
          aria-label="X (Twitter)"
        >
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      );

    case "pinterest":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className={className}
          aria-label="Pinterest"
        >
          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12.004-5.367 12.004-11.99C24.02 5.367 18.643 0 12.017 0z" />
        </svg>
      );

    case "snapchat":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className={className}
          aria-label="Snapchat"
        >
          <path d="M12.203 1.992c-3.484.02-5.918 2.493-6.07 6.168-.035.797.106 2.059.297 2.645.18.547-.367.871-.785 1.035-.559.223-1.156.496-1.25.965-.121.617.438 1.082 1.012 1.359.73.352 1.309.285 1.57.82.238.489-.488 1.832-.871 2.399-.441.656-.992 1.254-.734 1.867.246.586 1.039.605 1.766.457.734-.148 1.484-.523 2.18-.328.664.184 1.156.914 1.797 1.426.793.633 1.75.922 2.766.922 1.012 0 1.969-.289 2.762-.922.645-.512 1.137-1.242 1.801-1.426.695-.195 1.445.18 2.18.328.727.148 1.52.129 1.766-.457.258-.613-.293-1.211-.734-1.867-.383-.566-1.109-1.91-.871-2.399.262-.535.84-.469 1.57-.82.574-.277 1.133-.742 1.012-1.359-.094-.469-.691-.742-1.25-.965-.418-.164-.965-.488-.785-1.035.191-.586.332-1.848.297-2.645-.152-3.675-2.586-6.148-6.07-6.168h-.125z" />
        </svg>
      );

    default:
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
        >
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" y1="15" x2="12" y2="3" />
        </svg>
      );
  }
}

/**
 * Authentic full-color App Icon Tile (e.g. for the 7 popular platforms row and hero floaters).
 * Perfectly matches official iOS / mobile app icons:
 * - YouTube: Official brand red with crisp white play button
 * - Instagram: Official sunset gradient with white camera outline
 * - TikTok: Sleek black tile with official 3D cyan/pink cyan offset note
 * - Facebook: Official #1877F2 blue with official white 'f'
 * - X: Deep black with official geometric 𝕏
 * - Pinterest: Official vibrant red with white scripted 'P'
 * - Snapchat: Official #FFFC00 canary yellow with official white ghost & dark outline
 */
export function PlatformAppTile({
  platform,
  className = "w-14 h-14 rounded-2xl",
  iconClassName = "w-7 h-7",
}: {
  platform: string;
  className?: string;
  iconClassName?: string;
}) {
  const norm = platform.toLowerCase().trim();

  switch (norm) {
    case "youtube":
      return (
        <div
          className={`${className} bg-[#FF0000] flex items-center justify-center text-white shadow-sm overflow-hidden shrink-0`}
          title="YouTube"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className={iconClassName}>
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
          </svg>
        </div>
      );

    case "instagram":
      return (
        <div
          className={`${className} flex items-center justify-center text-white shadow-sm overflow-hidden shrink-0`}
          style={{
            background:
              "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)",
          }}
          title="Instagram"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={iconClassName}
          >
            <rect x="2" y="2" width="20" height="20" rx="5.5" ry="5.5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none" />
          </svg>
        </div>
      );

    case "tiktok":
      return (
        <div
          className={`${className} bg-black flex items-center justify-center shadow-sm overflow-hidden relative shrink-0`}
          title="TikTok"
        >
          <svg viewBox="0 0 24 24" className={iconClassName}>
            {/* TikTok Cyan shadow path */}
            <path
              d="M19.1 6.3a4.7 4.7 0 0 1-3.6-4.1V1.8h-3.3v13.2a2.8 2.8 0 0 1-2.8 2.8 2.8 2.8 0 0 1-2.8-2.8 2.8 2.8 0 0 1 2.8-2.8c.4 0 .7.1 1.1.2V9a6.1 6.1 0 0 0-1.1-.1C6 8.9 3.1 11.8 3.1 15.4c0 3.5 2.9 6.4 6.4 6.4 3.4 0 6.3-2.9 6.3-6.4V8.5a7.9 7.9 0 0 0 4.7 1.5V6.7a4.7 4.7 0 0 1-1.4-.4z"
              fill="#25F4EE"
              transform="translate(-0.8, -0.6)"
            />
            {/* TikTok Red/Pink shadow path */}
            <path
              d="M19.1 6.3a4.7 4.7 0 0 1-3.6-4.1V1.8h-3.3v13.2a2.8 2.8 0 0 1-2.8 2.8 2.8 2.8 0 0 1-2.8-2.8 2.8 2.8 0 0 1 2.8-2.8c.4 0 .7.1 1.1.2V9a6.1 6.1 0 0 0-1.1-.1C6 8.9 3.1 11.8 3.1 15.4c0 3.5 2.9 6.4 6.4 6.4 3.4 0 6.3-2.9 6.3-6.4V8.5a7.9 7.9 0 0 0 4.7 1.5V6.7a4.7 4.7 0 0 1-1.4-.4z"
              fill="#FE2C55"
              transform="translate(0.8, 0.6)"
            />
            {/* TikTok White center note */}
            <path
              d="M19.1 6.3a4.7 4.7 0 0 1-3.6-4.1V1.8h-3.3v13.2a2.8 2.8 0 0 1-2.8 2.8 2.8 2.8 0 0 1-2.8-2.8 2.8 2.8 0 0 1 2.8-2.8c.4 0 .7.1 1.1.2V9a6.1 6.1 0 0 0-1.1-.1C6 8.9 3.1 11.8 3.1 15.4c0 3.5 2.9 6.4 6.4 6.4 3.4 0 6.3-2.9 6.3-6.4V8.5a7.9 7.9 0 0 0 4.7 1.5V6.7a4.7 4.7 0 0 1-1.4-.4z"
              fill="#FFFFFF"
            />
          </svg>
        </div>
      );

    case "facebook":
      return (
        <div
          className={`${className} bg-[#1877F2] flex items-center justify-center text-white shadow-sm overflow-hidden shrink-0`}
          title="Facebook"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className={iconClassName}>
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
          </svg>
        </div>
      );

    case "twitter":
    case "x":
      return (
        <div
          className={`${className} bg-[#000000] flex items-center justify-center text-white shadow-sm overflow-hidden shrink-0`}
          title="X (Twitter)"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className={iconClassName}>
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </div>
      );

    case "pinterest":
      return (
        <div
          className={`${className} bg-[#E60023] flex items-center justify-center text-white shadow-sm overflow-hidden shrink-0`}
          title="Pinterest"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className={iconClassName}>
            <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12.004-5.367 12.004-11.99C24.02 5.367 18.643 0 12.017 0z" />
          </svg>
        </div>
      );

    case "snapchat":
      return (
        <div
          className={`${className} bg-[#FFFC00] flex items-center justify-center shadow-sm overflow-hidden shrink-0`}
          title="Snapchat"
        >
          <svg viewBox="0 0 24 24" className={iconClassName}>
            {/* Snapchat Ghost with black outline and solid white fill */}
            <path
              d="M12.203 2.1c-3.484.02-5.918 2.493-6.07 6.168-.035.797.106 2.059.297 2.645.18.547-.367.871-.785 1.035-.559.223-1.156.496-1.25.965-.121.617.438 1.082 1.012 1.359.73.352 1.309.285 1.57.82.238.489-.488 1.832-.871 2.399-.441.656-.992 1.254-.734 1.867.246.586 1.039.605 1.766.457.734-.148 1.484-.523 2.18-.328.664.184 1.156.914 1.797 1.426.793.633 1.75.922 2.766.922 1.012 0 1.969-.289 2.762-.922.645-.512 1.137-1.242 1.801-1.426.695-.195 1.445.18 2.18.328.727.148 1.52.129 1.766-.457.258-.613-.293-1.211-.734-1.867-.383-.566-1.109-1.91-.871-2.399.262-.535.84-.469 1.57-.82.574-.277 1.133-.742 1.012-1.359-.094-.469-.691-.742-1.25-.965-.418-.164-.965-.488-.785-1.035.191-.586.332-1.848.297-2.645-.152-3.675-2.586-6.148-6.07-6.168h-.125z"
              fill="#FFFFFF"
              stroke="#000000"
              strokeWidth="1.2"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      );

    default:
      return (
        <div
          className={`${className} bg-brand-blue flex items-center justify-center text-white shadow-sm overflow-hidden shrink-0`}
        >
          <PlatformGlyph platform={platform} className={iconClassName} />
        </div>
      );
  }
}

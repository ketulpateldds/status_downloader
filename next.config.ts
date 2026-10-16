import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  outputFileTracingRoot: path.join(__dirname),
  images: {
    domains: ["images.unsplash.com", "picsum.photos"],
  },
};

export default nextConfig;

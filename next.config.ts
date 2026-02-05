import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",  // 1. Tells Next.js to generate static HTML
  basePath: "/nikhil_sharma", // 2. YOUR REPO NAME (Must match exactly)
  images: {
    unoptimized: true, // 3. Required for GitHub Pages (removes server-side image optimization)
  },
};

export default nextConfig;
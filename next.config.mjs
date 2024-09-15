import { hostname } from "os";

/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: "./",
  images: {
    remotePatterns: [{ hostname: "images.pexels.com" }],
  },
};

export default nextConfig;

/**
 * Configuracao enxuta do Next.js alinhada ao projeto service.
 */
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"]
  }
};

export default nextConfig;

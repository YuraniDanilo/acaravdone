import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
   eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    // 🚫 Ignora erros de tipo durante o build
    ignoreBuildErrors: true,
  },
};

export default nextConfig;

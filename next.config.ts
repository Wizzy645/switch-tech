import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  // You can add other options like:
  // output: "export",
  // images: { domains: ['yourdomain.com'] },
};

export default nextConfig;

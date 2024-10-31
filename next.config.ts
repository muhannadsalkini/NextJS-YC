import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  // config to get images
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
      },
    ],
  },

  // help to visualize the ppr (Partial Prerendering)
  experimental: {
    // ppr: true,
    after: true,
  },
  devIndicators: {
    appIsrStatus: true,
    buildActivity: true,
    buildActivityPosition: "bottom-right",
  },
};

export default nextConfig;

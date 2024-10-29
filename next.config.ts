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
};

export default nextConfig;

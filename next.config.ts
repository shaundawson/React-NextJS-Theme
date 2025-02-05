import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "f.hubspotusercontent20.net",
      },
      {
        protocol: "https",
        hostname: "5688825.fs1.hubspotusercontent-na1.net",
      },
    ],
  },
};

export default nextConfig;
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/chess-tournament",
  assetPrefix: "/chess-tournament/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

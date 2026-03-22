import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/latavi",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

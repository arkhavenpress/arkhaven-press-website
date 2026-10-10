import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,

  allowedDevOrigins: ["192.168.1.235"],

  output: "export",
  trailingSlash: true,

  images: {
    unoptimized: true,
  },

  basePath: "/arkhaven-press-website",
  assetPrefix: "/arkhaven-press-website",
};

export default nextConfig;
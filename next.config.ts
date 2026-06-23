import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Emit a fully static site into `out/` — deployable to any static host.
  output: "export",
  // Pin the workspace root (a yarn.lock exists higher up) so Turbopack
  // doesn't infer the wrong directory.
  turbopack: { root: __dirname },
  // Static export has no image-optimization server, so serve images as-is.
  images: { unoptimized: true },
};

export default nextConfig;

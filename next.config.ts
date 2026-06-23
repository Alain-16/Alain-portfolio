import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Emit a fully static site into `out/` — deployable to any static host.
  output: "export",
  // Pin the workspace root (a yarn.lock exists higher up) so Turbopack
  // doesn't infer the wrong directory.
  turbopack: { root: __dirname },
};

export default nextConfig;

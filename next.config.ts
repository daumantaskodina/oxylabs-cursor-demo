import type { NextConfig } from "next";
import path from "path";

const projectRoot = path.resolve(process.cwd());

const nextConfig: NextConfig = {
  // Pin Turbopack root so it does not treat a parent folder (e.g. Experiments/) as the monorepo root.
  turbopack: {
    root: projectRoot,
  },
  webpack: (config, { dev }) => {
    if (dev) {
      // Cap parallel module work to reduce RAM spikes (helps on laptops with 8GB RAM).
      config.parallelism = Math.min(config.parallelism ?? 100, 4);
      config.watchOptions = {
        ...config.watchOptions,
        ignored: [
          "**/node_modules/**",
          "**/.git/**",
          "**/.next/**",
        ],
      };
    }
    return config;
  },
};

export default nextConfig;

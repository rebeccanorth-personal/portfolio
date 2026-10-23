import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Old pages from the first version of the site now live on Home and Work
  async redirects() {
    return [
      { source: "/about", destination: "/#about", permanent: true },
      { source: "/professional", destination: "/work", permanent: true },
      { source: "/personal", destination: "/work", permanent: true },
      { source: "/graphics", destination: "/work", permanent: true },
    ];
  },
};

export default nextConfig;

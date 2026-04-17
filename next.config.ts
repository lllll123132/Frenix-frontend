import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  /* 
     Note: 'rewrites' are removed for static export. 
     You should point your API calls directly to https://api.frenix.sh
  */
};

export default nextConfig;

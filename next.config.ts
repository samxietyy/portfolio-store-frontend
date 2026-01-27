import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images:{
    remotePatterns:[
      {
        protocol: 'https',
        hostname: 'pub-694584bfd7c84eda96c532ff02c87b3c.r2.dev',
        /* port: '',
        pathname: 'product-images',
        search: '' */
      }
    ]
  },

};

export default nextConfig;

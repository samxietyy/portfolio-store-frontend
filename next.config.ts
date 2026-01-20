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

  


  /* async rewrites(){
    return [
      {
        source: '/api/:path',
        destination: 'http://localhost:3000/:path'
      }
    ]
  } */
};

export default nextConfig;

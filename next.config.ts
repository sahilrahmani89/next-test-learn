import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites(){
    return[{
      source:'/rewrite-checks',
      destination:'/'
    }]
  }
};

export default nextConfig;

/** @type {import('next').NextConfig} */
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    assetPrefix: '/Sunary-Website/', 
    // assetPrefix: '/', 
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'storage.googleapis.com',
            },
            {
                protocol: 'https',
                hostname: 'assets.coingecko.com',
            },
            {
                protocol: "https",
                hostname: "cdn.sunary.tw",
            },
        ],
    },
};

export default nextConfig;

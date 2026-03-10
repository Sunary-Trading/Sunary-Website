/** @type {import('next').NextConfig} */
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	assetPrefix: "/",
	// assetPrefix: '/',
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "storage.googleapis.com",
			},
			{
				protocol: "https",
				hostname: "assets.coingecko.com",
			},
			{
				protocol: "https",
				hostname: "sunary-cdn2.pages.dev",
			},
			{
				protocol: "https",
				hostname: "www.ptdtw.fun",
			},
		],
	},
};

export default nextConfig;

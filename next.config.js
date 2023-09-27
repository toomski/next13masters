const isProduction = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
	pageExtensions: ['ts', 'tsx', 'mdx'],
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "media.graphassets.com",
			},
		],
	},
	experimental: {
		typedRoutes: false,
		mdxRs: true,
	},
	compiler: {
		removeConsole: isProduction ? {exclude: ["error"]}: false,
	},
	rewrites: () => {
		return [
			{
				source: "/products",
				destination: "/products/1",
			},
			{
				source: "/products/:slug",
				destination: "/products/:slug/1",
			},
		];
	},
};

module.exports = nextConfig

const withMDX = require("@next/mdx")();
module.exports = withMDX(nextConfig);
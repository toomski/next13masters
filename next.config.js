/** @type {import('next').NextConfig} */
const nextConfig = {
	pageExtensions: ['ts', 'tsx', 'mdx'],
	experimental: {
		typedRoutes: false,
		mdxRs: true,
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
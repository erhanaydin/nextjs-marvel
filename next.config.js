/** @type {import('next').NextConfig} */


module.exports = {
	experimental: {
		scrollRestoration: true,
	},
	swcMinify: true,
	compiler: {
		styledComponents: true,
	},
	images: {
		domains: ["i.annihil.us"],
		formats: ['image/webp', 'image/jpeg', 'image/png', 'image/gif'],
	},
	eslint: {
		ignoreDuringBuilds: true,
	},
	webpack(cfg) {
		const originalEntry = cfg.entry;


		cfg.module.rules.push({
			test: /\.svg$/,
			issuer: [/\.(js|ts)x?$/],
			use: ["@svgr/webpack?-svgo,+titleProp,+ref![path]"],
		});

		return cfg;
	},
};

const nextConfig = {
	reactStrictMode: true,
	pageExtensions: ['mdx', 'md', 'jsx', 'js', 'tsx', 'ts'],
};

module.exports = nextConfig;

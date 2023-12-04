/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		dangerouslyAllowSVG: true,
		domains: ['ik.imagekit.io']
	},
	experimental: { images: { layoutRaw: true } }
}

module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  basePath: process.env.NODE_ENV === 'production' ? '/Personal_website' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/Personal_website/' : '',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  trailingSlash: true,
  distDir: 'out',
}

module.exports = nextConfig 
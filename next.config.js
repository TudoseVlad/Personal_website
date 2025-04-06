/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  basePath: process.env.NODE_ENV === 'production' ? '/Personal_website' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/Personal_website/' : '',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig 
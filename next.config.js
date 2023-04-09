/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['www.pexels.com', 'images.pexels.com'],
  },
}

module.exports = nextConfig

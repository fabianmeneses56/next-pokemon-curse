/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  typescript: {
    ignoreBuildErrors: true
  },
  images: {
    domains: ['raw.githubusercontent.com']
  }
}

module.exports = nextConfig

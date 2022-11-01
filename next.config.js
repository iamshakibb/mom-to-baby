/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['i1.ytimg.com', 'www.parents.com','imagesvc.meredithcorp.io']
  }
}

module.exports = nextConfig

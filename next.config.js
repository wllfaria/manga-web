/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: {
      ssr: true,
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 't5.nhentai.net',
      },
    ],
  },
  experimental: {
    appDir: true,
    typedRoutes: true,
  },
}

module.exports = nextConfig

import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    domains: ['api.dolamthanhphat.io.vn'],
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '8080'
      }
    ]
  }
}

export default nextConfig

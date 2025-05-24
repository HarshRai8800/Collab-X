/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  output: 'standalone',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { 
    unoptimized: true,
    domains: ['images.pexels.com', 'i.pravatar.cc']
  },
  // Add this to disable static optimization for certain pages
  unstable_runtimeJS: true,
  // Add this to handle not-found errors
  typescript: {
    ignoreBuildErrors: true,
  }
};

module.exports = nextConfig;



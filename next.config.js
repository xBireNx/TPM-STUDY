/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static export for Vercel deployment
  output: 'export',

  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },

  // Configure static paths
  trailingSlash: true,
};

module.exports = nextConfig;

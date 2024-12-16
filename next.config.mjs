/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/shanuka-me',
  reactStrictMode: true,
  assetPrefix: '/shanuka-me/',
};

export default nextConfig;

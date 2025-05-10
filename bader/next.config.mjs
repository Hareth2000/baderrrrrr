// next.config.js
import path from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname, 'src');
    return config;
  },
  images: {
    domains: [
      'loremflickr.com',
      // يمكنك إضافة دومينات أخرى هنا إذا احتجت
    ],
  },
};

export default nextConfig;

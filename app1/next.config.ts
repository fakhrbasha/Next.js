import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: 'ecommerce.routemisr.com',
        protocol: 'https',
        pathname: '/Route-Academy-products/**'
      }
    ]
  }, async redirects() {
    return [
      {
        source: '/projects',
        destination: '/projects/web',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

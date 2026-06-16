/** @type {import('next').NextConfig} */
const isDev = process.env.NODE_ENV === 'development';

/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  ...(isDev
    ? {
        async rewrites() {
          return [
            {
              source: '/wp-json/:path*',
              destination: 'https://eqologiq.in/wp-json/:path*',
            },
          ];
        },
      }
    : {
        output: 'export',
      }),
};

export default nextConfig;

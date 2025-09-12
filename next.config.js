/** @type {import('next').NextConfig} */
const nextConfig = {
  // Force webpack and disable turbopack completely
  webpack: (config, { dev }) => {
    // Force webpack compilation and disable any turbopack references
    if (dev) {
      config.cache = false;
      // Ensure we're using webpack, not turbopack
      config.infrastructureLogging = {
        level: 'error',
      };
    }
    // Disable turbopack explicitly
    config.resolve = config.resolve || {};
    config.resolve.alias = config.resolve.alias || {};
    return config;
  },
  
  // Disable all experimental features that might trigger turbopack
  experimental: {},
  
  // Configurações de imagem otimizada
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
      }
    ],
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 86400, // 24 hours
  },

  // Compressão e otimizações
  compress: true,
  poweredByHeader: false,
  
  // Headers de performance e segurança (otimizados)
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          // Security headers
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/api/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-store, must-revalidate',
          },
        ],
      },
    ];
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Otimizações para produção
  turbopack: {},
  experimental: {
    optimizePackageImports: ['@stripe/stripe-js']
  },
  
  // Configurações de imagem
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      }
    ],
    formats: ['image/webp', 'image/avif'],
  },

  // Compressão e otimizações
  compress: true,
  poweredByHeader: false,
  
  // Configurações de output para Netlify
  output: 'standalone',
  
  // Headers de segurança
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
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
        ],
      },
    ];
  },
};

export default nextConfig;

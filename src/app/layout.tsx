
// import { NextIntlClientProvider, useMessages } from 'next-intl';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { CartProvider } from '@/components/CartContext';
import Navbar from '@/components/Navbar';
import PageTransition from '@/components/PageTransition';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
  preload: false,
});

export const metadata: Metadata = {
  title: "Kowalski | Loja Virtual Minimalista",
  description: "Kowalski - Produtos genéricos de alta qualidade. Design minimalista, experiência fluida, pagamentos seguros com Stripe e Ramp. PT-BR/EN-US.",
  metadataBase: new URL('https://kowalski.com'),
  openGraph: {
    title: 'Kowalski | Loja Virtual Minimalista',
    description: 'Produtos genéricos de alta qualidade. Design minimalista, experiência fluida, pagamentos seguros com Stripe e Ramp.',
    type: 'website',
    locale: 'pt_BR',
    url: 'https://kowalski.com',
  },
  alternates: {
    canonical: '/',
    languages: {
      'pt-BR': '/pt-BR',
      'en-US': '/en-US',
    },
  },
};

export function generateViewport() {
  return {
    width: 'device-width',
    initialScale: 1,
    themeColor: '#00ff88'
  };
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body 
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground preload gpu-accelerated`} 
        style={{ backgroundColor: '#0a0a0a', color: '#eaffb7' }}
      >
        <CartProvider>
          <Navbar />
          <PageTransition>
            {children}
          </PageTransition>
        </CartProvider>
      </body>
    </html>
  );
}

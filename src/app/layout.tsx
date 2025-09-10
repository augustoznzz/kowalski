
// import { NextIntlClientProvider, useMessages } from 'next-intl';
import type { Metadata } from 'next';
import { Geist_Mono, Varela_Round } from 'next/font/google';
import './globals.css';
import { CartProvider } from '@/components/CartContext';
import PageTransition from '@/components/PageTransition';
import LanguageToggle from '@/components/LanguageToggle';

const varelaRound = Varela_Round({
  weight: '400',
  subsets: ["latin"],
  display: 'swap',
  preload: true,
  variable: "--font-varela-round",
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
    themeColor: '#CDFF00'
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
        className={`${varelaRound.variable} ${geistMono.variable} font-sans antialiased transition-all duration-300 ease-smooth preload`} 
        style={{ backgroundColor: '#282828', color: '#eaffb7' }}
      >
        <CartProvider>
          <PageTransition>
            {children}
          </PageTransition>
          <LanguageToggle />
        </CartProvider>
      </body>
    </html>
  );
}


import type { Metadata } from 'next';
import './globals.css';
import { CartProvider } from '@/components/CartContext';
import PageTransition from '@/components/PageTransition';
import LanguageToggle from '@/components/LanguageToggle';
import HeroNavbar from '@/components/HeroNavbar';

export const metadata: Metadata = {
  title: "Kowalski | Loja Virtual Minimalista",
  description: "Kowalski - Produtos genéricos de alta qualidade. Design minimalista, experiência fluida, pagamentos seguros com Stripe e Ramp. PT-BR/EN-US.",
  metadataBase: new URL('https://kowalski.netlify.app'),
  keywords: ['loja virtual', 'produtos minimalistas', 'stripe', 'ramp', 'e-commerce'],
  authors: [{ name: 'Kowalski Team' }],
  creator: 'Kowalski',
  publisher: 'Kowalski',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Kowalski | Loja Virtual Minimalista',
    description: 'Produtos genéricos de alta qualidade. Design minimalista, experiência fluida, pagamentos seguros.',
    type: 'website',
    locale: 'pt_BR',
    url: 'https://kowalski.netlify.app',
    siteName: 'Kowalski',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kowalski | Loja Virtual Minimalista',
    description: 'Produtos genéricos de alta qualidade. Design minimalista, experiência fluida.',
  },
  alternates: {
    canonical: '/',
    languages: {
      'pt-BR': '/',
      'en-US': '/en',
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export function generateViewport() {
  return {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    themeColor: '#CDFF00',
    colorScheme: 'dark',
  };
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//js.stripe.com" />
        <link rel="preconnect" href="https://api.resend.com" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="format-detection" content="telephone=no" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', () => {
                  navigator.serviceWorker.register('/sw.js');
                });
              }
            `,
          }}
        />
      </head>
      <body 
        className="antialiased transition-all duration-300 ease-smooth" 
        style={{ backgroundColor: '#282828', color: '#eaffb7', fontFamily: 'Gilan, system-ui, sans-serif' }}
      >
        <CartProvider>
          <HeroNavbar />
          <PageTransition>
            {children}
          </PageTransition>
          <LanguageToggle />
        </CartProvider>
      </body>
    </html>
  );
}

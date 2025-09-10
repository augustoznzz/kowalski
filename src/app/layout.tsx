

import { NextIntlClientProvider, useMessages } from 'next-intl';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import Navbar from '@/components/Navbar';
import { CartProvider } from '@/components/CartContext';
import './globals.css';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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

export default function RootLayout({ children, params }: { children: React.ReactNode; params: { locale: string } }) {
  const messages = useMessages();
  return (
    <html lang={params.locale}>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`} style={{ backgroundColor: '#fff', color: '#171717' }}>
        <NextIntlClientProvider locale={params.locale} messages={messages}>
          <CartProvider>
            <Navbar />
            {children}
          </CartProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

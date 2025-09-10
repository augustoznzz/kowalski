
// import { NextIntlClientProvider, useMessages } from 'next-intl';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`} style={{ backgroundColor: '#fff', color: '#171717' }}>
        {children}
      </body>
    </html>
  );
}

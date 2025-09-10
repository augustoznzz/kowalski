"use client";
import Link from "next/link";
import React from "react";
import { useTranslations } from 'next-intl';
import { useCart } from './CartContext';

export default function Navbar() {
  const t = useTranslations();
  const { items } = useCart();
  const cartCount = items.reduce((sum, i) => sum + i.quantity, 0);
  return (
    <nav className="w-full flex items-center justify-between px-6 py-4 bg-white/80 backdrop-blur border-b border-neutral-100 shadow-sm sticky top-0 z-30">
      <Link href="/" className="text-2xl font-bold tracking-tight" style={{ color: '#CDFF00' }}>
        Kowalski
      </Link>
      <div className="flex gap-6 items-center">
        <Link href="/shop" className="hover:text-[#CDFF00] font-medium transition-colors">{t('nav.shop')}</Link>
        <Link href="/about" className="hover:text-[#CDFF00] font-medium transition-colors">{t('nav.about')}</Link>
        <Link href="/contact" className="hover:text-[#CDFF00] font-medium transition-colors">{t('nav.contact')}</Link>
        <Link href="/checkout" className="relative hover:text-[#CDFF00] font-medium transition-colors">
          <span>{t('nav.cart')}</span>
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-3 bg-[#CDFF00] text-black text-xs font-bold rounded-full px-2 py-0.5">{cartCount}</span>
          )}
        </Link>
      </div>
    </nav>
  );
}

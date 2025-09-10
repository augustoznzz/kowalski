"use client";
import Link from "next/link";
import React from "react";
import { useCart } from './CartContext';

export default function Navbar() {
  const { items } = useCart();
  const cartCount = items.reduce((sum, i) => sum + i.quantity, 0);
  
  return (
    <nav className="w-full flex items-center justify-between px-8 py-6 bg-black/90 backdrop-blur border-b border-green-900 shadow-sm sticky top-0 z-30">
      <Link href="/" className="text-3xl font-extrabold tracking-tight" style={{ color: 'var(--accent)' }}>
        Kowalski
      </Link>
      <div className="flex gap-6 items-center">
        <Link href="/shop" className="hover:text-[var(--accent)] font-medium transition-colors">Produtos</Link>
        <Link href="/about" className="hover:text-[var(--accent)] font-medium transition-colors">Sobre</Link>
        <Link href="/contact" className="hover:text-[var(--accent)] font-medium transition-colors">Contato</Link>
        <Link href="/checkout" className="relative hover:text-[var(--accent)] font-medium transition-colors">
          <span>Carrinho</span>
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-3 bg-[var(--accent)] text-black text-xs font-bold rounded-full px-2 py-0.5">{cartCount}</span>
          )}
        </Link>
      </div>
    </nav>
  );
}

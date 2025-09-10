"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useCart } from './CartContext';

export default function Navbar() {
  const { items } = useCart();
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const cartCount = items.reduce((sum, i) => sum + i.quantity, 0);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);
  
  return (
    <nav className="w-full flex items-center justify-between px-6 lg:px-8 py-4 bg-black/95 backdrop-blur-md border-b border-green-900/30 shadow-lg sticky top-0 z-50 transition-all duration-300">
      <Link 
        href="/about" 
        className="text-2xl lg:text-3xl font-extrabold tracking-tight hover:scale-105 transition-transform duration-200" 
        style={{ color: 'var(--accent)' }}
        onClick={closeMenu}
      >
        Kowalski
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-8 items-center">
        <Link href="/about" className="nav-link">Sobre</Link>
        <Link href="/shop" className="nav-link">Produtos</Link>
        <Link href="/contact" className="nav-link">Contato</Link>
        <Link href="/checkout" className="nav-link relative">
          <span>Carrinho</span>
          {cartCount > 0 && (
            <span className="cart-badge">{cartCount}</span>
          )}
        </Link>
      </div>

      {/* Mobile Hamburger Button */}
      <button 
        className="md:hidden hamburger-btn z-50 relative w-8 h-8 flex flex-col justify-center items-center space-y-1 transition-all duration-300"
        onClick={toggleMenu}
        aria-label="Menu"
      >
        <span className={`hamburger-line ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
        <span className={`hamburger-line ${isOpen ? 'opacity-0' : ''}`}></span>
        <span className={`hamburger-line ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
      </button>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu ${isOpen ? 'mobile-menu-open' : ''}`}>
        <div className="mobile-menu-content">
          <Link href="/about" className="mobile-nav-link" onClick={closeMenu}>
            <span className="mobile-nav-icon">👤</span>
            Sobre
          </Link>
          <Link href="/shop" className="mobile-nav-link" onClick={closeMenu}>
            <span className="mobile-nav-icon">🛍️</span>
            Produtos
          </Link>
          <Link href="/contact" className="mobile-nav-link" onClick={closeMenu}>
            <span className="mobile-nav-icon">📧</span>
            Contato
          </Link>
          <Link href="/checkout" className="mobile-nav-link relative" onClick={closeMenu}>
            <span className="mobile-nav-icon">🛒</span>
            Carrinho
            {cartCount > 0 && (
              <span className="cart-badge-mobile">{cartCount}</span>
            )}
          </Link>
        </div>
      </div>

      {/* Mobile Menu Backdrop */}
      {isOpen && (
        <div 
          className="mobile-menu-backdrop" 
          onClick={closeMenu}
        ></div>
      )}
    </nav>
  );
}

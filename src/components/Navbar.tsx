"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useCart } from './CartContext';
import { useTranslation } from './LanguageToggle';

export default function Navbar() {
  const { items } = useCart();
  const { t } = useTranslation();
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
    <nav className="w-full flex items-center justify-between px-6 lg:px-8 py-4 bg-black/95 backdrop-blur-md border-b border-lime/20 shadow-lg sticky top-0 z-50 transition-all duration-300">
      <Link 
        href="/" 
        className="text-2xl lg:text-3xl font-extrabold tracking-tight hover:scale-105 transition-all duration-300 gradient-text" 
        onClick={closeMenu}
      >
        Kowalski
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-8 items-center">
        <Link href="/about" className="nav-link">{t('about')}</Link>
        <Link href="/shop" className="nav-link">{t('products')}</Link>
        <Link href="/contact" className="nav-link">{t('contact')}</Link>
        <Link href="/checkout" className="nav-link relative group">
          <span>{t('cart')}</span>
          {cartCount > 0 && (
            <span className="cart-badge animate-pulse-lime">{cartCount}</span>
          )}
        </Link>
      </div>

      {/* Mobile Hamburger Button */}
      <button 
        className="md:hidden hamburger-btn z-50 relative w-10 h-10 flex flex-col justify-center items-center space-y-1 transition-all duration-300 hover:scale-110"
        onClick={toggleMenu}
        aria-label="Menu"
      >
        <span className={`hamburger-line transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2 bg-lime' : 'bg-foreground'}`}></span>
        <span className={`hamburger-line transition-all duration-300 ${isOpen ? 'opacity-0' : 'bg-foreground'}`}></span>
        <span className={`hamburger-line transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2 bg-lime' : 'bg-foreground'}`}></span>
      </button>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu ${isOpen ? 'mobile-menu-open' : ''}`}>
        <div className="mobile-menu-content">
          <Link href="/about" className="mobile-nav-link group" onClick={closeMenu}>
            <span className="mobile-nav-icon group-hover:scale-125 transition-transform duration-300">👤</span>
            {t('about')}
          </Link>
          <Link href="/shop" className="mobile-nav-link group" onClick={closeMenu}>
            <span className="mobile-nav-icon group-hover:scale-125 transition-transform duration-300">🛍️</span>
            {t('products')}
          </Link>
          <Link href="/contact" className="mobile-nav-link group" onClick={closeMenu}>
            <span className="mobile-nav-icon group-hover:scale-125 transition-transform duration-300">📧</span>
            {t('contact')}
          </Link>
          <Link href="/checkout" className="mobile-nav-link relative group" onClick={closeMenu}>
            <span className="mobile-nav-icon group-hover:scale-125 transition-transform duration-300">🛒</span>
            {t('cart')}
            {cartCount > 0 && (
              <span className="absolute top-2 right-4 bg-lime text-black text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center animate-pulse-lime">
                {cartCount}
              </span>
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

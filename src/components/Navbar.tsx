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
    <nav className="w-full flex items-center px-6 lg:px-8 py-4 bg-black/95 backdrop-blur-md border-b border-lime/20 shadow-lg sticky top-0 z-50 transition-all duration-300">
      {/* Mobile Hamburger Button - positioned on the left */}
      <button 
        className="md:hidden hamburger-btn z-50 relative w-10 h-10 flex flex-col justify-center items-center space-y-1 transition-all duration-300 hover:scale-110 mr-4"
        onClick={toggleMenu}
        aria-label="Menu"
      >
        <span className={`hamburger-line transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2 bg-lime' : 'bg-foreground'}`}></span>
        <span className={`hamburger-line transition-all duration-300 ${isOpen ? 'opacity-0' : 'bg-foreground'}`}></span>
        <span className={`hamburger-line transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2 bg-lime' : 'bg-foreground'}`}></span>
      </button>

      {/* Logo - centered on mobile, left-aligned on desktop */}
      <Link 
        href="/" 
        className="text-2xl lg:text-3xl font-extrabold tracking-tight hover:scale-105 transition-all duration-300 gradient-text flex-1 md:flex-initial text-center md:text-left" 
        onClick={closeMenu}
      >
        Kowalski
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-8 items-center ml-auto">
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

      {/* Cart button for mobile - positioned on the right */}
      <Link href="/checkout" className="md:hidden relative p-2 text-lime hover:text-white transition-colors duration-300 group ml-4">
        <svg className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5H17" />
        </svg>
        {cartCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-lime text-black text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold animate-pulse">
            {cartCount}
          </span>
        )}
      </Link>

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

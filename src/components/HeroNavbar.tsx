"use client";

import React, { useState } from "react";
import Link from 'next/link';
import { useTranslation } from './LanguageToggle';

export const KowalskiLogo = () => {
  return (
    <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
      <path
        clipRule="evenodd"
        d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};

export default function HeroNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation();

  const menuItems = [
    { key: "about", label: t('about'), href: "/about" },
    { key: "products", label: t('products'), href: "/shop" },
    { key: "contact", label: t('contact'), href: "/contact" },
    { key: "cart", label: t('cart'), href: "/checkout" },
  ];

  return (
    <nav className="w-full bg-black/90 backdrop-blur-md border-b border-lime-400/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Desktop Menu - Hidden on mobile */}
          <div className="hidden sm:flex items-center space-x-8">
            <Link href="/" className="flex items-center space-x-2">
              <KowalskiLogo />
              <span className="font-bold text-lime-400 text-xl">Kowalski</span>
            </Link>
          </div>

          {/* Mobile Menu Button - Visible on mobile */}
          <div className="sm:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-lime-400 hover:text-lime-300 focus:outline-none focus:text-lime-300"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Brand - Centered on mobile */}
          <div className="sm:hidden absolute left-1/2 transform -translate-x-1/2">
            <Link href="/" className="flex items-center space-x-2">
              <KowalskiLogo />
              <span className="font-bold text-lime-400 text-xl">Kowalski</span>
            </Link>
          </div>

          {/* Desktop Navigation - Centered */}
          <div className="hidden sm:flex items-center space-x-8">
            {menuItems.slice(0, 3).map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className="text-white hover:text-lime-400 transition-colors duration-200 font-medium"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Cart Button - Always visible */}
          <div className="flex items-center">
            <Link
              href="/checkout"
              className="bg-lime-400 hover:bg-lime-500 text-black px-4 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center space-x-2"
            >
              <span>{t('cart')}</span>
              <span>🛒</span>
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black/95 rounded-lg mt-2">
              {menuItems.map((item) => (
                <Link
                  key={item.key}
                  href={item.href}
                  className="block px-3 py-2 text-white hover:text-lime-400 transition-colors duration-200 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

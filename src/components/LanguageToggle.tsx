"use client";
import React, { useState, useEffect } from 'react';

type Language = 'pt-BR' | 'en-US';

interface Translations {
  [key: string]: {
    'pt-BR': string;
    'en-US': string;
  };
}

const translations: Translations = {
  // Navigation
  products: { 'pt-BR': 'Produtos', 'en-US': 'Products' },
  about: { 'pt-BR': 'Sobre', 'en-US': 'About' },
  contact: { 'pt-BR': 'Contato', 'en-US': 'Contact' },
  shop: { 'pt-BR': 'Loja', 'en-US': 'Shop' },
  
  // Home page
  welcome: { 'pt-BR': 'Bem-vindo à Kowalski', 'en-US': 'Welcome to Kowalski' },
  homeSubtitle: { 
    'pt-BR': 'Descubra produtos de alta qualidade com design minimalista. Inovação, estilo e funcionalidade para transformar seu dia a dia.',
    'en-US': 'Discover high-quality products with minimalist design. Innovation, style and functionality to transform your daily life.'
  },
  exploreProducts: { 'pt-BR': 'Explorar Produtos', 'en-US': 'Explore Products' },
  featuredProducts: { 'pt-BR': 'Produtos em Destaque', 'en-US': 'Featured Products' },
  
  // Product actions
  addToCart: { 'pt-BR': 'Adicionar ao Carrinho', 'en-US': 'Add to Cart' },
  viewDetails: { 'pt-BR': 'Ver Detalhes', 'en-US': 'View Details' },
  buyNow: { 'pt-BR': 'Comprar Agora', 'en-US': 'Buy Now' },
  
  // Cart
  cart: { 'pt-BR': 'Carrinho', 'en-US': 'Cart' },
  checkout: { 'pt-BR': 'Finalizar Compra', 'en-US': 'Checkout' },
  
  // Common
  price: { 'pt-BR': 'Preço', 'en-US': 'Price' },
  total: { 'pt-BR': 'Total', 'en-US': 'Total' },
  quantity: { 'pt-BR': 'Quantidade', 'en-US': 'Quantity' },
  
  // Language names
  portuguese: { 'pt-BR': 'Português', 'en-US': 'Portuguese' },
  english: { 'pt-BR': 'Inglês', 'en-US': 'English' },
};

export default function LanguageToggle() {
  const [currentLang, setCurrentLang] = useState<Language>('pt-BR');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Get saved language from localStorage or browser language
    const savedLang = localStorage.getItem('kowalski-language') as Language;
    const browserLang = navigator.language;
    
    if (savedLang && ['pt-BR', 'en-US'].includes(savedLang)) {
      setCurrentLang(savedLang);
    } else if (browserLang.startsWith('en')) {
      setCurrentLang('en-US');
    } else {
      setCurrentLang('pt-BR');
    }
  }, []);

  const switchLanguage = (lang: Language) => {
    setCurrentLang(lang);
    localStorage.setItem('kowalski-language', lang);
    setIsOpen(false);
    
    // Dispatch custom event to notify other components
    window.dispatchEvent(new CustomEvent('languageChange', { detail: lang }));
  };

  const getFlag = (lang: Language) => {
    return lang === 'pt-BR' ? '🇧🇷' : '🇺🇸';
  };

  const getLanguageName = (lang: Language) => {
    return lang === 'pt-BR' ? 'PT' : 'EN';
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-black/80 backdrop-blur-md border border-lime/20 rounded-full p-3 shadow-lg hover:bg-black/90 transition-all duration-300 ease-smooth hover:scale-105 hover:border-lime/40 group"
          aria-label="Toggle language"
        >
          <div className="flex items-center gap-2 text-lime">
            <span className="text-lg">{getFlag(currentLang)}</span>
            <span className="text-sm font-medium">{getLanguageName(currentLang)}</span>
            <svg 
              className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </button>

        {isOpen && (
          <div className="absolute bottom-full right-0 mb-2 bg-black/90 backdrop-blur-md border border-lime/20 rounded-xl shadow-xl overflow-hidden animate-slide-up">
            <div className="p-2">
              <button
                onClick={() => switchLanguage('pt-BR')}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 hover:bg-lime/10 ${
                  currentLang === 'pt-BR' ? 'bg-lime/20 text-lime' : 'text-white hover:text-lime'
                }`}
              >
                <span className="text-lg">🇧🇷</span>
                <span className="text-sm font-medium">Português</span>
                {currentLang === 'pt-BR' && (
                  <svg className="w-4 h-4 ml-auto" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                )}
              </button>
              
              <button
                onClick={() => switchLanguage('en-US')}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 hover:bg-lime/10 ${
                  currentLang === 'en-US' ? 'bg-lime/20 text-lime' : 'text-white hover:text-lime'
                }`}
              >
                <span className="text-lg">🇺🇸</span>
                <span className="text-sm font-medium">English</span>
                {currentLang === 'en-US' && (
                  <svg className="w-4 h-4 ml-auto" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        )}
      </div>
      
      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 -z-10" 
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
}

// Hook to use translations
export function useTranslation() {
  const [currentLang, setCurrentLang] = useState<Language>('pt-BR');

  useEffect(() => {
    const savedLang = localStorage.getItem('kowalski-language') as Language;
    if (savedLang && ['pt-BR', 'en-US'].includes(savedLang)) {
      setCurrentLang(savedLang);
    }

    const handleLanguageChange = (event: CustomEvent) => {
      setCurrentLang(event.detail);
    };

    window.addEventListener('languageChange', handleLanguageChange as EventListener);
    return () => window.removeEventListener('languageChange', handleLanguageChange as EventListener);
  }, []);

  const t = (key: string): string => {
    return translations[key]?.[currentLang] || key;
  };

  return { t, currentLang };
}

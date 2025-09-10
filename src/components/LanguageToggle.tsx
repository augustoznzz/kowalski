"use client";

import { useState, useEffect } from 'react';

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
  
  // About section
  aboutKowalski: { 'pt-BR': 'Sobre a Kowalski', 'en-US': 'About Kowalski' },
  aboutDescription: { 
    'pt-BR': 'A Kowalski nasceu para redefinir o conceito de qualidade e simplicidade. Nossos produtos combinam design minimalista com funcionalidade excepcional, criando experiências únicas que transformam o cotidiano em algo extraordinário.',
    'en-US': 'Kowalski was born to redefine the concept of quality and simplicity. Our products combine minimalist design with exceptional functionality, creating unique experiences that transform everyday life into something extraordinary.'
  },
  qualityPremium: { 'pt-BR': 'Qualidade Premium', 'en-US': 'Premium Quality' },
  qualityPremiumDesc: { 'pt-BR': 'Produtos cuidadosamente selecionados com os mais altos padrões de qualidade.', 'en-US': 'Carefully selected products with the highest quality standards.' },
  fastDelivery: { 'pt-BR': 'Entrega Rápida', 'en-US': 'Fast Delivery' },
  fastDeliveryDesc: { 'pt-BR': 'Receba seus produtos rapidamente com rastreamento em tempo real.', 'en-US': 'Receive your products quickly with real-time tracking.' },
  securePayment: { 'pt-BR': 'Pagamento Seguro', 'en-US': 'Secure Payment' },
  securePaymentDesc: { 'pt-BR': 'Checkout seguro com Stripe (cartão) e Ramp (cripto).', 'en-US': 'Secure checkout with Stripe (card) and Ramp (crypto).' },
  knowOurStory: { 'pt-BR': 'Conheça Nossa História', 'en-US': 'Know Our Story' },
  
  // Promotion section
  launchPromotion: { 'pt-BR': 'Promoção de Lançamento', 'en-US': 'Launch Promotion' },
  discountText: { 
    'pt-BR': 'Ganhe 15% de desconto na sua primeira compra usando o cupom',
    'en-US': 'Get 15% off your first purchase using the coupon'
  },
  takeOffer: { 'pt-BR': 'Aproveitar Oferta', 'en-US': 'Take Offer' },
  
  // Footer
  allRightsReserved: { 'pt-BR': 'Todos os direitos reservados', 'en-US': 'All rights reserved' },
  ecommerceDescription: { 'pt-BR': 'E-commerce de qualidade premium com design minimalista', 'en-US': 'Premium quality e-commerce with minimalist design' },
  
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
  all: { 'pt-BR': 'Todos', 'en-US': 'All' },
  
  // Shop page
  category: { 'pt-BR': 'Categoria', 'en-US': 'Category' },
  priceRange: { 'pt-BR': 'Faixa de Preço', 'en-US': 'Price Range' },
  minimum: { 'pt-BR': 'Mínimo', 'en-US': 'Minimum' },
  maximum: { 'pt-BR': 'Máximo', 'en-US': 'Maximum' },
  inStock: { 'pt-BR': 'em estoque', 'en-US': 'in stock' },
  outOfStock: { 'pt-BR': 'Esgotado', 'en-US': 'Out of Stock' },
  noProductsFound: { 'pt-BR': 'Nenhum produto encontrado.', 'en-US': 'No products found.' },
  
  // Checkout page
  finalizePurchase: { 'pt-BR': 'Finalizar Compra', 'en-US': 'Complete Purchase' },
  orderSummary: { 'pt-BR': 'Resumo do Pedido', 'en-US': 'Order Summary' },
  deliveryInfo: { 'pt-BR': 'Informações de Entrega', 'en-US': 'Delivery Information' },
  emailAddress: { 'pt-BR': 'Endereço de E-mail', 'en-US': 'Email Address' },
  digitalProductsNote: { 'pt-BR': 'Seus produtos digitais serão enviados para este e-mail.', 'en-US': 'Your digital products will be sent to this email.' },
  payWithCard: { 'pt-BR': '💳 Pagar com Cartão via Stripe', 'en-US': '💳 Pay with Card via Stripe' },
  processing: { 'pt-BR': 'Processando...', 'en-US': 'Processing...' },
  emptyCart: { 'pt-BR': 'Seu carrinho está vazio.', 'en-US': 'Your cart is empty.' },
  
  // Product page
  backToShop: { 'pt-BR': 'Voltar para a loja', 'en-US': 'Back to shop' },
  detailedDescription: { 'pt-BR': 'Descrição Detalhada', 'en-US': 'Detailed Description' },
  whatYouGet: { 'pt-BR': 'O que você recebe', 'en-US': 'What you get' },
  immediateDownload: { 'pt-BR': 'Download Imediato', 'en-US': 'Immediate Download' },
  highResFiles: { 'pt-BR': 'Arquivos em alta resolução', 'en-US': 'High resolution files' },
  commercialLicense: { 'pt-BR': 'Licença para uso pessoal e comercial', 'en-US': 'License for personal and commercial use' },
  supportUpdates: { 'pt-BR': 'Suporte e atualizações futuras', 'en-US': 'Support and future updates' },
  youMayAlsoLike: { 'pt-BR': 'Você também pode gostar', 'en-US': 'You may also like' },
  
  // Language names
  portuguese: { 'pt-BR': 'Português', 'en-US': 'Portuguese' },
  english: { 'pt-BR': 'Inglês', 'en-US': 'English' },
};

export default function LanguageToggle() {
  const [currentLang, setCurrentLang] = useState<Language>('pt-BR');

  useEffect(() => {
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
    window.dispatchEvent(new CustomEvent('languageChange', { detail: lang }));
    setTimeout(() => {
      window.location.reload();
    }, 100);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="relative">
        <div className="bg-black/80 backdrop-blur-md border border-lime/20 rounded-full p-3 shadow-lg">
          <div className="flex items-center gap-3 text-lime">
            <span className="text-sm font-medium">🇧🇷 PT</span>
            <label className="relative block aspect-[2/0.75] w-16 rounded-full bg-gradient-to-br from-lime-100 via-lime-600 shadow-2xl shadow-lime-300 transition-all duration-300 hover:bg-[length:100%_500%] focus:bg-[length:100%_500%] bg-[length:100%_100%] cursor-pointer">
              <input 
                className="peer/input hidden" 
                type="checkbox"
                checked={currentLang === 'en-US'}
                onChange={(e) => switchLanguage(e.target.checked ? 'en-US' : 'pt-BR')}
              />
              <div className="absolute left-[3%] top-1/2 aspect-square h-[90%] -translate-y-1/2 rotate-180 rounded-full bg-white bg-gradient-to-t transition-all duration-500 peer-checked/input:left-[63%] peer-checked/input:-rotate-6"></div>
            </label>
            <span className="text-sm font-medium">🇺🇸 EN</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function useTranslation() {
  const [currentLang, setCurrentLang] = useState<Language>('pt-BR');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedLang = localStorage.getItem('kowalski-language') as Language;
    if (savedLang && ['pt-BR', 'en-US'].includes(savedLang)) {
      setCurrentLang(savedLang);
    }

    const handleLanguageChange = (event: CustomEvent) => {
      setCurrentLang(event.detail);
    };

    const handleStorageChange = () => {
      const newLang = localStorage.getItem('kowalski-language') as Language;
      if (newLang && ['pt-BR', 'en-US'].includes(newLang)) {
        setCurrentLang(newLang);
      }
    };

    window.addEventListener('languageChange', handleLanguageChange as EventListener);
    window.addEventListener('storage', handleStorageChange);
    
    return () => {
      window.removeEventListener('languageChange', handleLanguageChange as EventListener);
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const t = (key: string): string => {
    if (!mounted) return key;
    return translations[key]?.[currentLang] || key;
  };

  return { t, currentLang, mounted };
}
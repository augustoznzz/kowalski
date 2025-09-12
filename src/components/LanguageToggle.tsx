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
  ecommerceDescription: { 'pt-BR': '', 'en-US': 'Premium quality e-commerce with minimalist design' },
  
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
  
  // About page translations
  aboutTitle: { 'pt-BR': 'Sobre a Kowalski', 'en-US': 'About Kowalski' },
  aboutSubtitle: { 
    'pt-BR': 'A Kowalski nasceu com a missão de redefinir a experiência de compra online, oferecendo produtos de alta qualidade com design minimalista e funcionalidade excepcional.',
    'en-US': 'Kowalski was born with the mission to redefine the online shopping experience, offering high-quality products with minimalist design and exceptional functionality.'
  },
  ourStory: { 'pt-BR': 'Nossa História', 'en-US': 'Our Story' },
  storyText1: {
    'pt-BR': 'Fundada em 2025, a Kowalski surgiu da paixão por inovação e simplicidade. Nossa jornada começou com uma pergunta simples: como podemos tornar produtos essenciais ainda mais extraordinários?',
    'en-US': 'Founded in 2025, Kowalski emerged from a passion for innovation and simplicity. Our journey began with a simple question: how can we make essential products even more extraordinary?'
  },
  storyText2: {
    'pt-BR': 'Acreditamos que o design minimalista não significa apenas aparência clean, mas sim funcionalidade inteligente que simplifica a vida das pessoas. Cada produto em nosso catálogo é cuidadosamente selecionado e testado para garantir que atenda aos mais altos padrões de qualidade.',
    'en-US': 'We believe that minimalist design means not just clean appearance, but intelligent functionality that simplifies people\'s lives. Each product in our catalog is carefully selected and tested to ensure it meets the highest quality standards.'
  },
  storyText3: {
    'pt-BR': 'Desde o início, nosso compromisso tem sido criar uma experiência de compra transparente, segura e satisfatória para todos os nossos clientes.',
    'en-US': 'From the beginning, our commitment has been to create a transparent, secure and satisfying shopping experience for all our customers.'
  },
  constantInnovation: { 'pt-BR': 'Inovação Constante', 'en-US': 'Constant Innovation' },
  innovationDesc: {
    'pt-BR': 'Sempre em busca de soluções que fazem a diferença no dia a dia dos nossos clientes.',
    'en-US': 'Always looking for solutions that make a difference in our customers\' daily lives.'
  },
  missionValues: { 'pt-BR': 'Missão & Valores', 'en-US': 'Mission & Values' },
  quality: { 'pt-BR': 'Qualidade', 'en-US': 'Quality' },
  qualityDesc: { 'pt-BR': 'Produtos premium selecionados com rigorosos padrões de qualidade.', 'en-US': 'Premium products selected with rigorous quality standards.' },
  simplicity: { 'pt-BR': 'Simplicidade', 'en-US': 'Simplicity' },
  simplicityDesc: { 'pt-BR': 'Design minimalista que foca no essencial e na funcionalidade.', 'en-US': 'Minimalist design that focuses on the essential and functionality.' },
  transparency: { 'pt-BR': 'Transparência', 'en-US': 'Transparency' },
  transparencyDesc: { 'pt-BR': 'Atendimento honesto e comunicação clara em todos os processos.', 'en-US': 'Honest service and clear communication in all processes.' },
  sustainability: { 'pt-BR': 'Sustentabilidade', 'en-US': 'Sustainability' },
  sustainabilityDesc: { 'pt-BR': 'Compromisso com práticas responsáveis e sustentáveis.', 'en-US': 'Commitment to responsible and sustainable practices.' },
  qualityCommitment: { 'pt-BR': 'Nosso Compromisso com a Qualidade', 'en-US': 'Our Commitment to Quality' },
  qualityCommitmentDesc: {
    'pt-BR': 'Na Kowalski, qualidade não é apenas uma palavra - é nossa filosofia central. Cada produto passa por rigorosos testes de qualidade e durabilidade antes de chegar até você.',
    'en-US': 'At Kowalski, quality is not just a word - it\'s our core philosophy. Each product undergoes rigorous quality and durability testing before reaching you.'
  },
  satisfactionGuaranteed: { 'pt-BR': 'Satisfação Garantida', 'en-US': 'Satisfaction Guaranteed' },
  technicalSupport: { 'pt-BR': 'Suporte Técnico', 'en-US': 'Technical Support' },
  averageRating: { 'pt-BR': 'Avaliação Média', 'en-US': 'Average Rating' },
  readyToKnow: { 'pt-BR': 'Pronto para Conhecer Nossos Produtos?', 'en-US': 'Ready to Know Our Products?' },
  qualityDesignDesc: {
    'pt-BR': 'Descubra como a qualidade e o design podem transformar sua experiência de compra.',
    'en-US': 'Discover how quality and design can transform your shopping experience.'
  },
  exploreCatalog: { 'pt-BR': 'Explorar Catálogo', 'en-US': 'Explore Catalog' },
  
  // Contact page translations
  contactTitle: { 'pt-BR': 'Contato & Suporte', 'en-US': 'Contact & Support' },
  contactSubtitle: { 'pt-BR': 'Precisa de ajuda? Nossa equipe está pronta para atendê-lo da melhor forma possível.', 'en-US': 'Need help? Our team is ready to serve you in the best possible way.' },
  sendMessage: { 'pt-BR': 'Envie sua Mensagem', 'en-US': 'Send Your Message' },
  fullName: { 'pt-BR': 'Nome Completo', 'en-US': 'Full Name' },
  fullNamePlaceholder: { 'pt-BR': 'Seu nome completo', 'en-US': 'Your full name' },
  email: { 'pt-BR': 'E-mail', 'en-US': 'Email' },
  emailPlaceholder: { 'pt-BR': 'seu@email.com', 'en-US': 'your@email.com' },
  subject: { 'pt-BR': 'Assunto', 'en-US': 'Subject' },
  productQuestion: { 'pt-BR': 'Dúvida sobre produto', 'en-US': 'Product question' },
  orderProblem: { 'pt-BR': 'Problema com pedido', 'en-US': 'Order problem' },
  suggestion: { 'pt-BR': 'Sugestão', 'en-US': 'Suggestion' },
  complaint: { 'pt-BR': 'Reclamação', 'en-US': 'Complaint' },
  compliment: { 'pt-BR': 'Elogio', 'en-US': 'Compliment' },
  other: { 'pt-BR': 'Outro', 'en-US': 'Other' },
  message: { 'pt-BR': 'Mensagem', 'en-US': 'Message' },
  messagePlaceholder: { 'pt-BR': 'Descreva sua dúvida ou mensagem...', 'en-US': 'Describe your question or message...' },
  sendMessageBtn: { 'pt-BR': 'Enviar Mensagem', 'en-US': 'Send Message' },
  otherContact: { 'pt-BR': 'Outras Formas de Contato', 'en-US': 'Other Ways to Contact' },
  technicalSupportEmail: { 'pt-BR': 'Para suporte técnico:', 'en-US': 'For technical support:' },
  businessHours: { 'pt-BR': 'Horário de Atendimento', 'en-US': 'Business Hours' },
  mondayFriday: { 'pt-BR': 'Segunda a Sexta: 9h às 18h', 'en-US': 'Monday to Friday: 9am to 6pm' },
  saturday: { 'pt-BR': 'Sábado: 9h às 14h', 'en-US': 'Saturday: 9am to 2pm' },
  sunday: { 'pt-BR': 'Domingo: Fechado', 'en-US': 'Sunday: Closed' },
  responseTime: { 'pt-BR': 'Tempo de Resposta', 'en-US': 'Response Time' },
  emailResponse: { 'pt-BR': 'E-mail: até 24 horas', 'en-US': 'Email: up to 24 hours' },
  formResponse: { 'pt-BR': 'Formulário: até 12 horas', 'en-US': 'Form: up to 12 hours' },
  urgentResponse: { 'pt-BR': 'Urgente: até 4 horas', 'en-US': 'Urgent: up to 4 hours' },
  followSocial: { 'pt-BR': 'Siga-nos nas Redes Sociais', 'en-US': 'Follow Us on Social Media' },
  faq: { 'pt-BR': 'Perguntas Frequentes', 'en-US': 'Frequently Asked Questions' },
  trackOrder: { 'pt-BR': 'Como rastrear meu pedido?', 'en-US': 'How to track my order?' },
  trackOrderAnswer: { 'pt-BR': 'Enviamos o código de rastreamento por e-mail após o envio.', 'en-US': 'We send the tracking code by email after shipping.' },
  deliveryTime: { 'pt-BR': 'Qual o prazo de entrega?', 'en-US': 'What is the delivery time?' },
  deliveryTimeAnswer: { 'pt-BR': 'De 3 a 7 dias úteis para todo o Brasil.', 'en-US': '3 to 7 business days throughout Brazil.' },
  canExchange: { 'pt-BR': 'Posso trocar um produto?', 'en-US': 'Can I exchange a product?' },
  canExchangeAnswer: { 'pt-BR': 'Sim, até 30 dias após o recebimento.', 'en-US': 'Yes, up to 30 days after receipt.' },
};

export default function LanguageToggle() {
  const [currentLang, setCurrentLang] = useState<Language>('pt-BR');

  useEffect(() => {
    const savedLang = typeof window !== 'undefined' ? localStorage.getItem('kowalski-language') as Language : null;
    
    if (savedLang && ['pt-BR', 'en-US'].includes(savedLang)) {
      setCurrentLang(savedLang);
    } else {
      // Sempre usar português como padrão
      setCurrentLang('pt-BR');
    }
  }, []);

  const switchLanguage = (lang: Language) => {
    setCurrentLang(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('kowalski-language', lang);
      window.dispatchEvent(new CustomEvent('languageChange', { detail: lang }));
      setTimeout(() => {
        window.location.reload();
      }, 100);
    }
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
    const savedLang = typeof window !== 'undefined' ? localStorage.getItem('kowalski-language') as Language : null;
    if (savedLang && ['pt-BR', 'en-US'].includes(savedLang)) {
      setCurrentLang(savedLang);
    }

    const handleLanguageChange = (event: CustomEvent) => {
      setCurrentLang(event.detail);
    };

    const handleStorageChange = () => {
      const newLang = typeof window !== 'undefined' ? localStorage.getItem('kowalski-language') as Language : null;
      if (newLang && ['pt-BR', 'en-US'].includes(newLang)) {
        setCurrentLang(newLang);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('languageChange', handleLanguageChange as EventListener);
      window.addEventListener('storage', handleStorageChange);
    }
    
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('languageChange', handleLanguageChange as EventListener);
        window.removeEventListener('storage', handleStorageChange);
      }
    };
  }, []);

  const t = (key: string): string => {
    if (!mounted) return key;
    return translations[key]?.[currentLang] || key;
  };

  return { t, currentLang, mounted };
}
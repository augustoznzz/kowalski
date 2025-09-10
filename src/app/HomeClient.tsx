"use client";
import Link from 'next/link';
import Image from 'next/image';
import { products } from '@/data/products';
import { useTranslation } from '@/components/LanguageToggle';

export default function HomeClient() {
  const { t } = useTranslation();
  const featuredProducts = products.filter(product => product.featured);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-black via-neutral-900 to-black text-foreground font-sans">
      <nav className="w-full flex items-center justify-between px-8 py-6 bg-black/90 backdrop-blur-md border-b border-lime/20 shadow-lg sticky top-0 z-30">
        <Link href="/" className="text-3xl font-extrabold tracking-tight gradient-text">
          Kowalski
        </Link>
        <div className="flex gap-6 items-center">
          <Link href="/shop" className="nav-link hover:text-lime transition-all duration-300 hover:scale-105">
            {t('products')}
          </Link>
          <Link href="/about" className="nav-link hover:text-lime transition-all duration-300 hover:scale-105">
            {t('about')}
          </Link>
          <Link href="/contact" className="nav-link hover:text-lime transition-all duration-300 hover:scale-105">
            {t('contact')}
          </Link>
        </div>
      </nav>

      {/* Enhanced banner with floating elements */}
      <header className="relative flex flex-col items-center py-20 px-4 text-center w-full overflow-hidden">
        <div className="absolute inset-0 w-full h-full pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 bg-lime/10 rounded-full blur-3xl animate-float" style={{animationDelay: '0s'}}></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-lime/15 rounded-full blur-2xl animate-float" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-32 left-1/3 w-40 h-40 bg-lime/8 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        </div>
        
        <h1 className="text-5xl sm:text-7xl font-extrabold mb-6 tracking-tight animate-fade-in-down gradient-text">
          {t('welcome')}
        </h1>
        <p className="text-xl sm:text-2xl max-w-4xl text-neutral-200 mb-8 animate-fade-in-up leading-relaxed">
          {t('homeSubtitle')}
        </p>
        <Link 
          href="/shop" 
          className="btn-primary text-lg px-12 py-4 shadow-lg animate-bounce-subtle hover:animate-pulse-lime"
          style={{ minWidth: 280, fontWeight: 700, fontSize: '1.3rem' }}
        >
          {t('exploreProducts')}
        </Link>
      </header>

      {/* Enhanced featured products with staggered animations */}
      <section className="w-full max-w-7xl px-4 py-16 mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center gradient-text animate-fade-in">
          {t('featuredProducts')}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {featuredProducts.map((product, index) => (
            <div 
              key={product.id} 
              className="group rounded-2xl border border-lime/20 bg-black/80 backdrop-blur-sm shadow-xl p-6 flex flex-col items-center transition-all duration-500 hover:border-lime hover:bg-black/90 hover:shadow-2xl hover:shadow-lime/20 animate-fade-in-up glow-border"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-24 h-24 bg-gradient-to-br from-lime/20 to-lime/10 rounded-xl mb-4 flex items-center justify-center group-hover:scale-110 transition-all duration-500">
                <Image 
                  src={product.image} 
                  alt={product.name} 
                  width={80} 
                  height={80} 
                  className="object-contain group-hover:scale-110 transition-all duration-500" 
                />
              </div>
              <h3 className="text-lg font-bold mb-2 text-white text-center group-hover:text-lime transition-colors duration-300">
                {product.name}
              </h3>
              <p className="text-sm text-neutral-300 mb-3 text-center line-clamp-2 group-hover:text-neutral-200 transition-colors duration-300">
                {product.description}
              </p>
              <div className="text-xl font-bold text-lime mb-4 group-hover:scale-110 transition-all duration-300">
                R$ {product.price.toFixed(2)}
              </div>
              <Link 
                href={`/product/${product.id}`} 
                className="btn-primary w-full text-center opacity-90 group-hover:opacity-100 transition-all duration-300"
              >
                {t('viewDetails')}
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Enhanced promotion section */}
      <section className="w-full max-w-5xl px-4 py-16 mx-auto animate-fade-in">
        <div className="relative rounded-3xl bg-gradient-to-r from-lime/20 via-lime/15 to-lime/10 border border-lime/30 p-12 flex flex-col items-center text-center overflow-hidden">
          <h3 className="text-3xl font-bold mb-4 text-lime">
            🎉 {t('launchPromotion')}
          </h3>
          <p className="text-lg text-neutral-200 mb-6 max-w-2xl leading-relaxed">
            {t('discountText')} 
            <span className="font-bold text-lime bg-black/60 px-4 py-2 rounded-xl ml-2 border border-lime/30">
              KOWALSKI15
            </span>
          </p>
          <Link href="/shop" className="btn-primary text-lg px-10 py-4 hover:scale-105 transition-all duration-300">
            {t('takeOffer')}
          </Link>
        </div>
      </section>

      {/* Enhanced about section with floating elements */}
      <section className="relative w-full max-w-5xl px-4 py-16 mx-auto animate-fade-in">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6 gradient-text">{t('aboutKowalski')}</h2>
          <p className="text-lg text-neutral-200 mb-8 max-w-3xl mx-auto leading-relaxed">
            {t('aboutDescription')}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {[
              { icon: '🎯', title: t('qualityPremium'), desc: t('qualityPremiumDesc') },
              { icon: '⚡', title: t('fastDelivery'), desc: t('fastDeliveryDesc') },
              { icon: '🔒', title: t('securePayment'), desc: t('securePaymentDesc') }
            ].map((item, index) => (
              <div 
                key={index}
                className="flex flex-col items-center group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-lime/20 to-lime/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-500 border border-lime/20 group-hover:border-lime/40">
                  <span className="text-4xl group-hover:scale-110 transition-all duration-500">{item.icon}</span>
                </div>
                <h4 className="text-xl font-bold mb-2 text-white group-hover:text-lime transition-colors duration-300">
                  {item.title}
                </h4>
                <p className="text-neutral-300 text-center group-hover:text-neutral-200 transition-colors duration-300">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
          <Link href="/about" className="btn-primary text-lg px-10 py-4">
            {t('knowOurStory')}
          </Link>
        </div>
      </section>

      {/* Enhanced footer */}
      <footer className="w-full py-12 bg-black/95 border-t border-lime/20 mt-16 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 flex flex-col items-center">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4 gradient-text">{t('followUs')}</h3>
            <div className="flex gap-6 justify-center">
              {[
                { icon: '📸', text: t('instagram'), url: 'https://instagram.com' },
                { icon: '🐦', text: t('twitter'), url: 'https://twitter.com' },
                { icon: '📘', text: t('facebook'), url: 'https://facebook.com' }
              ].map((social, index) => (
                <a 
                  key={index}
                  href={social.url} 
                  target="_blank" 
                  rel="noopener" 
                  className="flex items-center gap-2 px-4 py-2 rounded-lg hover:text-lime transition-all duration-300 hover:bg-lime/10 hover:scale-105"
                >
                  <span className="text-xl">{social.icon}</span>
                  <span>{social.text}</span>
                </a>
              ))}
            </div>
          </div>
          <div className="text-sm text-neutral-400 text-center">
            <p>Kowalski © {new Date().getFullYear()} • {t('allRightsReserved')}</p>
            <p className="mt-2">{t('ecommerceDescription')}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

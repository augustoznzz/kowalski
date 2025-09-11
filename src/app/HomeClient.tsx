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
        <p className="hero-description text-xl sm:text-2xl max-w-4xl mb-8 animate-fade-in-up leading-relaxed">
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
              className="group rounded-2xl border border-lime/20 bg-black/80 backdrop-blur-sm shadow-xl p-6 flex flex-col items-center justify-between transition-all duration-500 hover:border-lime hover:bg-black/90 hover:shadow-2xl hover:shadow-lime/20 animate-fade-in-up glow-border min-h-[320px]"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col items-center flex-1">
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
                <p className="text-description text-sm mb-3 text-center line-clamp-2 group-hover:text-neutral-200 transition-colors duration-300">
                  {product.description}
                </p>
                <div className="text-xl font-bold text-lime mb-4 group-hover:scale-110 transition-all duration-300">
                  R$ {product.price.toFixed(2)}
                </div>
              </div>
              <Link 
                href={`/product/${product.id}`} 
                className="btn-primary w-full text-center opacity-90 group-hover:opacity-100 transition-all duration-300 mt-auto"
              >
                {t('viewDetails')}
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Animated Card Section */}
      <section className="w-full max-w-5xl px-4 py-16 mx-auto animate-fade-in">
        <div className="flex justify-center">
          <div className="animated-card">
            <div className="bg uwu"></div>
            <div className="bg"></div>
            <div className="content">
              <div className="img">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z"></path>
                </svg>
              </div>
              <div className="h1">
                Augusto <br />Zuanazzi
              </div>
              <div className="p">
                Developer
                <p>
                  Trust the process, even when the results have not yet appeared.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced about section with floating elements */}
      <section className="relative w-full max-w-5xl px-4 py-16 mx-auto animate-fade-in">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6 gradient-text">{t('aboutKowalski')}</h2>
          <p className="about-description text-lg mb-8 max-w-3xl mx-auto leading-relaxed">
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
                <p className="feature-text text-center group-hover:text-neutral-200 transition-colors duration-300">
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
            <h3 className="text-2xl font-bold mb-4 gradient-text">Entre no nosso servidor do Discord!</h3>
            <div className="flex gap-6 justify-center">
              <a 
                href="https://discord.gg/kowalski" 
                target="_blank" 
                rel="noopener" 
                className="flex items-center gap-2 px-6 py-3 rounded-lg hover:text-lime transition-all duration-300 hover:bg-lime/10 hover:scale-105 bg-[#5865F2] text-white hover:bg-[#4752C4]"
              >
                <span className="text-xl">💬</span>
                <span>Discord</span>
              </a>
            </div>
          </div>
          <div className="text-sm text-center text-secondary">
            <p>Kowalski © {new Date().getFullYear()} • {t('allRightsReserved')}</p>
            <p className="mt-2 text-description">{t('')}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

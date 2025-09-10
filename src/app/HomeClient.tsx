"use client";
import Link from 'next/link';
import Image from 'next/image';
import { products } from '@/data/products';

export default function HomeClient() {
  const featuredProducts = products.filter(product => product.featured);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-black via-green-900 to-black text-foreground font-sans">
      <nav className="w-full flex items-center justify-between px-8 py-6 bg-black/90 backdrop-blur border-b border-green-900 shadow-sm sticky top-0 z-30">
        <Link href="/" className="text-3xl font-extrabold tracking-tight" style={{ color: 'var(--accent)' }}>Kowalski</Link>
        <div className="flex gap-6 items-center">
          <Link href="/shop" className="hover:text-[var(--accent)] font-medium transition-colors">Produtos</Link>
          <Link href="/about" className="hover:text-[var(--accent)] font-medium transition-colors">Sobre</Link>
          <Link href="/contact" className="hover:text-[var(--accent)] font-medium transition-colors">Contato</Link>
        </div>
      </nav>
      {/* Banner animado */}
      <header className="flex flex-col items-center py-20 px-4 text-center relative w-full overflow-hidden">
        <div className="absolute inset-0 w-full h-full pointer-events-none animate-pulse" style={{background: 'radial-gradient(circle at 60% 40%, rgba(0,255,136,0.15) 0, transparent 70%)'}} />
        <h1 className="text-5xl sm:text-6xl font-extrabold mb-6 tracking-tight animate-fade-in-down" style={{ color: 'var(--accent)', letterSpacing: '-0.03em' }}>
          Bem-vindo à Kowalski
        </h1>
        <p className="text-xl sm:text-2xl max-w-3xl text-neutral-200 mb-8 animate-fade-in-up">
          Descubra produtos de alta qualidade com design minimalista. Inovação, estilo e funcionalidade para transformar seu dia a dia.
        </p>
        <Link href="/shop" className="btn-primary text-lg px-12 py-4 shadow-lg scale-on-hover animate-bounce" style={{ minWidth: 240, fontWeight: 700, fontSize: '1.3rem' }}>
          Explorar Produtos
        </Link>
      </header>

      {/* Destaque de produtos principais */}
      <section className="w-full max-w-7xl px-4 py-16 mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center" style={{ color: 'var(--accent)' }}>Produtos em Destaque</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {featuredProducts.map((product) => (
            <div key={product.id} className="rounded-2xl border border-green-900 bg-black/70 shadow-xl p-6 flex flex-col items-center scale-on-hover transition-all duration-300 hover:border-[var(--accent)]">
              <div className="w-24 h-24 bg-[var(--accent)]/10 rounded-lg mb-4 flex items-center justify-center">
                <Image src={product.image} alt={product.name} width={80} height={80} className="object-contain" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-white text-center">{product.name}</h3>
              <p className="text-sm text-neutral-300 mb-3 text-center line-clamp-2">{product.description}</p>
              <div className="text-xl font-bold text-[var(--accent)] mb-4">R$ {product.price.toFixed(2)}</div>
              <Link href={`/product/${product.id}`} className="btn-primary w-full text-center">
                Ver Detalhes
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Promoções */}
      <section className="w-full max-w-5xl px-4 py-16 mx-auto">
        <div className="rounded-2xl bg-gradient-to-r from-[var(--accent)]/20 to-green-800/20 border border-green-700 p-12 flex flex-col items-center text-center">
          <h3 className="text-3xl font-bold mb-4 text-[var(--accent)]">🎉 Promoção de Lançamento</h3>
          <p className="text-lg text-neutral-200 mb-6 max-w-2xl">
            Ganhe <span className="font-bold text-[var(--accent)]">15% de desconto</span> na sua primeira compra usando o cupom 
            <span className="font-bold text-[var(--accent)] bg-black/50 px-3 py-1 rounded-lg ml-2">KOWALSKI15</span>
          </p>
          <Link href="/shop" className="btn-primary text-lg px-8 py-3">
            Aproveitar Oferta
          </Link>
        </div>
      </section>

      {/* Introdução à marca */}
      <section className="w-full max-w-5xl px-4 py-16 mx-auto">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6" style={{ color: 'var(--accent)' }}>Sobre a Kowalski</h2>
          <p className="text-lg text-neutral-200 mb-8 max-w-3xl mx-auto leading-relaxed">
            A Kowalski nasceu para redefinir o conceito de qualidade e simplicidade. Nossos produtos combinam design minimalista 
            com funcionalidade excepcional, criando experiências únicas que transformam o cotidiano em algo extraordinário.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-[var(--accent)]/20 flex items-center justify-center mb-4">
                <span className="text-3xl">🎯</span>
              </div>
              <h4 className="text-xl font-bold mb-2 text-white">Qualidade Premium</h4>
              <p className="text-neutral-300 text-center">Produtos cuidadosamente selecionados com os mais altos padrões de qualidade.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-[var(--accent)]/20 flex items-center justify-center mb-4">
                <span className="text-3xl">⚡</span>
              </div>
              <h4 className="text-xl font-bold mb-2 text-white">Entrega Rápida</h4>
              <p className="text-neutral-300 text-center">Receba seus produtos rapidamente com rastreamento em tempo real.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-[var(--accent)]/20 flex items-center justify-center mb-4">
                <span className="text-3xl">🔒</span>
              </div>
              <h4 className="text-xl font-bold mb-2 text-white">Pagamento Seguro</h4>
              <p className="text-neutral-300 text-center">Checkout seguro com Stripe (cartão) e Ramp (cripto).</p>
            </div>
          </div>
          <Link href="/about" className="btn-primary text-lg px-8 py-3">
            Conheça Nossa História
          </Link>
        </div>
      </section>
      <footer className="w-full py-12 bg-black/95 border-t border-green-900 mt-16">
        <div className="max-w-6xl mx-auto px-4 flex flex-col items-center">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--accent)' }}>Siga-nos nas Redes Sociais</h3>
            <div className="flex gap-6 justify-center">
              <a href="https://instagram.com" target="_blank" rel="noopener" className="hover:text-[var(--accent)] transition-colors">
                📸 Instagram
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener" className="hover:text-[var(--accent)] transition-colors">
                🐦 Twitter
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener" className="hover:text-[var(--accent)] transition-colors">
                📘 Facebook
              </a>
            </div>
          </div>
          <div className="text-sm text-neutral-400 text-center">
            <p>Kowalski © {new Date().getFullYear()} • Todos os direitos reservados</p>
            <p className="mt-2">E-commerce de qualidade premium com design minimalista</p>
          </div>
        </div>
      </footer>

      {/* Animações CSS */}
      <style jsx global>{`
        @keyframes fade-in-down { 
          from { opacity: 0; transform: translateY(-40px); } 
          to { opacity: 1; transform: translateY(0); } 
        }
        @keyframes fade-in-up { 
          from { opacity: 0; transform: translateY(40px); } 
          to { opacity: 1; transform: translateY(0); } 
        }
        .animate-fade-in-down { 
          animation: fade-in-down 1.2s cubic-bezier(0.4, 0, 0.2, 1) both; 
        }
        .animate-fade-in-up { 
          animation: fade-in-up 1.2s cubic-bezier(0.4, 0, 0.2, 1) both; 
          animation-delay: 0.3s;
        }
        .animate-bounce { 
          animation: bounce 2s infinite; 
        }
        @keyframes bounce { 
          0%, 20%, 53%, 80%, 100% { transform: translateY(0); }
          40%, 43% { transform: translateY(-10px); }
          70% { transform: translateY(-5px); }
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}

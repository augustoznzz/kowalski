"use client";
import Link from 'next/link';

export default function HomeClient() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-black via-green-900 to-black text-foreground font-sans fade-in">
      <nav className="w-full flex items-center justify-between px-8 py-6 bg-black/90 backdrop-blur border-b border-green-900 shadow-sm sticky top-0 z-30">
        <span className="text-3xl font-extrabold tracking-tight" style={{ color: 'var(--accent)' }}>Kowalski</span>
        <div className="flex gap-6 items-center">
          <Link href="/shop" className="hover:text-[var(--accent)] font-medium transition-colors">Produtos</Link>
          <Link href="/about" className="hover:text-[var(--accent)] font-medium transition-colors">Sobre</Link>
          <Link href="/contact" className="hover:text-[var(--accent)] font-medium transition-colors">Contato</Link>
        </div>
      </nav>
      {/* Banner animado */}
      <header className="flex flex-col items-center py-20 px-4 text-center relative w-full overflow-hidden">
        <div className="absolute inset-0 w-full h-full pointer-events-none animate-pulse" style={{background: 'radial-gradient(circle at 60% 40%, rgba(0,255,136,0.10) 0, transparent 70%)'}} />
        <h1 className="text-5xl sm:text-6xl font-extrabold mb-4 tracking-tight animate-fade-in-down" style={{ color: 'var(--accent)', letterSpacing: '-0.03em' }}>
          Novidades e Promoções Exclusivas
        </h1>
        <p className="text-xl sm:text-2xl max-w-2xl text-foreground/80 mb-8 animate-fade-in-up">
          Conheça a nova coleção de produtos Kowalski. Qualidade, inovação e estilo para o seu dia a dia.
        </p>
        <Link href="/shop" className="btn-primary text-lg px-10 py-4 shadow-lg scale-on-hover fade-in animate-bounce" style={{ minWidth: 220, fontWeight: 700, fontSize: '1.25rem' }}>
          Ver Produtos
        </Link>
      </header>
      {/* Destaque de produtos */}
      <section className="w-full max-w-6xl px-4 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center" style={{ color: 'var(--accent)' }}>Produtos em Destaque</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
          {[1,2,3,4,5].map((i) => (
            <div key={i} className="rounded-2xl border border-green-900 bg-black shadow-lg p-8 flex flex-col items-center scale-on-hover transition-all duration-200">
              <div className="w-24 h-24 bg-[var(--accent)]/10 rounded-lg mb-4 flex items-center justify-center animate-fade-in-up">
                <img src={`/produto${i}.jpg`} alt={`Produto ${i}`} className="w-20 h-20 object-contain" onError={e => (e.currentTarget.src = '/vercel.svg')} />
              </div>
              <h3 className="text-lg font-bold mb-2 text-white">Produto {i}</h3>
              <p className="text-base text-neutral-300 mb-4 text-center">Descrição breve do produto {i}. Alta qualidade, preço justo.</p>
              <Link href={`/product/${i}`} className="btn-primary w-full">Ver mais</Link>
            </div>
          ))}
        </div>
      </section>
      {/* Promoções */}
      <section className="w-full max-w-4xl px-4 py-12 flex flex-col items-center">
        <div className="rounded-xl bg-[var(--accent)]/10 border border-green-900 p-8 flex flex-col items-center w-full animate-fade-in-up">
          <h3 className="text-2xl font-bold mb-2 text-[var(--accent)]">Promoção de Lançamento</h3>
          <p className="text-base text-neutral-200 mb-4 text-center">Ganhe 10% de desconto na sua primeira compra usando o cupom <span className="font-bold text-[var(--accent)]">KOWALSKI10</span>.</p>
          <Link href="/shop" className="btn-primary">Aproveitar Oferta</Link>
        </div>
      </section>
      {/* Introdução à marca */}
      <section className="w-full max-w-4xl px-4 py-12 flex flex-col items-center">
        <h2 className="text-3xl font-bold mb-4 text-center" style={{ color: 'var(--accent)' }}>Sobre a Kowalski</h2>
        <p className="text-lg text-neutral-200 mb-6 text-center max-w-2xl">
          A Kowalski nasceu para transformar o essencial em extraordinário. Produtos minimalistas, design inovador e compromisso com a qualidade. Experimente uma nova forma de comprar online.
        </p>
        <Link href="/about" className="btn-primary">Conheça nossa história</Link>
      </section>
      <footer className="w-full py-10 flex flex-col items-center text-sm text-neutral-400 bg-black/90 mt-12 border-t border-green-900">
        <span>Kowalski © {new Date().getFullYear()} &middot; Todos os direitos reservados</span>
        <div className="flex gap-4 mt-2">
          <a href="https://instagram.com" target="_blank" rel="noopener" className="hover:text-[var(--accent)]">Instagram</a>
          <a href="https://twitter.com" target="_blank" rel="noopener" className="hover:text-[var(--accent)]">Twitter</a>
          <a href="https://facebook.com" target="_blank" rel="noopener" className="hover:text-[var(--accent)]">Facebook</a>
        </div>
      </footer>
      {/* Animações extras */}
      <style jsx global>{`
        @keyframes fade-in-down { from { opacity: 0; transform: translateY(-30px); } to { opacity: 1; transform: none; } }
        @keyframes fade-in-up { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: none; } }
        .animate-fade-in-down { animation: fade-in-down 1s cubic-bezier(.4,0,.2,1) both; }
        .animate-fade-in-up { animation: fade-in-up 1s cubic-bezier(.4,0,.2,1) both; }
        .animate-bounce { animation: bounce 1.2s infinite alternate; }
        @keyframes bounce { to { transform: translateY(-8px) scale(1.04); } }
      `}</style>
    </div>
  );
}

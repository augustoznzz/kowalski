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
      <header className="flex flex-col items-center py-20 px-4 text-center">
        <h1 className="text-5xl sm:text-6xl font-extrabold mb-4 tracking-tight" style={{ color: 'var(--accent)', letterSpacing: '-0.03em' }}>
          Minimalismo, Qualidade e Inovação
        </h1>
        <p className="text-xl sm:text-2xl max-w-2xl text-foreground/80 mb-8">
          Descubra produtos genéricos premium para o seu dia a dia. Design elegante, experiência fluida e pagamentos seguros.
        </p>
        <Link href="/shop" className="btn-primary text-lg px-10 py-4 shadow-lg scale-on-hover fade-in" style={{ minWidth: 220, fontWeight: 700, fontSize: '1.25rem' }}>
          Ver Produtos
        </Link>
      </header>
      <section className="w-full max-w-6xl px-4 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="flex flex-col items-center">
          <div className="w-20 h-20 rounded-full bg-[var(--accent)]/20 flex items-center justify-center mb-4">
            <span className="text-4xl">✨</span>
          </div>
          <h3 className="text-xl font-bold mb-2">Design Minimalista</h3>
          <p className="text-base text-foreground/70">Produtos com linhas limpas, tons de verde e preto, foco no essencial.</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-20 h-20 rounded-full bg-[var(--accent)]/20 flex items-center justify-center mb-4">
            <span className="text-4xl">🔒</span>
          </div>
          <h3 className="text-xl font-bold mb-2">Pagamentos Seguros</h3>
          <p className="text-base text-foreground/70">Checkout rápido e seguro com Stripe e Ramp, proteção total dos seus dados.</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-20 h-20 rounded-full bg-[var(--accent)]/20 flex items-center justify-center mb-4">
            <span className="text-4xl">🚀</span>
          </div>
          <h3 className="text-xl font-bold mb-2">Entrega Rápida</h3>
          <p className="text-base text-foreground/70">Receba seus produtos em casa com agilidade e rastreamento em tempo real.</p>
        </div>
      </section>
      <section className="w-full max-w-6xl px-4 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center" style={{ color: 'var(--accent)' }}>Destaques</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {[1,2,3].map((i) => (
            <div key={i} className="rounded-2xl border border-green-900 bg-black shadow-lg p-8 flex flex-col items-center scale-on-hover transition-all duration-200">
              <div className="w-24 h-24 bg-[var(--accent)]/10 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-5xl text-[var(--accent)]">📦</span>
              </div>
              <h3 className="text-lg font-bold mb-2 text-white">Produto {i}</h3>
              <p className="text-base text-neutral-300 mb-4 text-center">Descrição breve do produto {i}. Alta qualidade, preço justo.</p>
              <Link href="/shop" className="btn-primary w-full">Ver mais</Link>
            </div>
          ))}
        </div>
      </section>
      <footer className="w-full py-10 flex flex-col items-center text-sm text-neutral-400 bg-black/90 mt-12 border-t border-green-900">
        <span>Kowalski © {new Date().getFullYear()} &middot; Todos os direitos reservados</span>
        <div className="flex gap-4 mt-2">
          <a href="https://instagram.com" target="_blank" rel="noopener" className="hover:text-[var(--accent)]">Instagram</a>
          <a href="https://twitter.com" target="_blank" rel="noopener" className="hover:text-[var(--accent)]">Twitter</a>
          <a href="https://facebook.com" target="_blank" rel="noopener" className="hover:text-[var(--accent)]">Facebook</a>
        </div>
      </footer>
    </div>
  );
}

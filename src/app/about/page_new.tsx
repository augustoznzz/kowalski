import React from "react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-[var(--foreground)] font-sans">
      <main className="flex-1 max-w-5xl mx-auto px-4 py-16">
        <header className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6" style={{ color: 'var(--accent)' }}>
            Sobre a Kowalski
          </h1>
          <p className="text-xl text-neutral-200 max-w-3xl mx-auto leading-relaxed">
            A Kowalski nasceu com a missão de redefinir a experiência de compra online, oferecendo produtos de alta qualidade 
            com design minimalista e funcionalidade excepcional.
          </p>
        </header>

        <div className="space-y-16">
          {/* Nossa História */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6" style={{ color: 'var(--accent)' }}>Nossa História</h2>
              <div className="space-y-4 text-neutral-200 leading-relaxed">
                <p>
                  Fundada em 2025, a Kowalski surgiu da paixão por inovação e simplicidade. Nossa jornada começou com uma 
                  pergunta simples: como podemos tornar produtos essenciais ainda mais extraordinários?
                </p>
                <p>
                  Acreditamos que o design minimalista não significa apenas aparência clean, mas sim funcionalidade 
                  inteligente que simplifica a vida das pessoas. Cada produto em nosso catálogo é cuidadosamente 
                  selecionado e testado para garantir que atenda aos mais altos padrões de qualidade.
                </p>
                <p>
                  Desde o início, nosso compromisso tem sido criar uma experiência de compra transparente, segura e 
                  satisfatória para todos os nossos clientes.
                </p>
              </div>
            </div>
            <div className="bg-[var(--accent)]/10 rounded-2xl p-8 border border-green-900">
              <div className="text-center">
                <div className="text-6xl mb-4">🚀</div>
                <h3 className="text-2xl font-bold mb-4 text-[var(--accent)]">Inovação Constante</h3>
                <p className="text-neutral-200">
                  Sempre em busca de soluções que fazem a diferença no dia a dia dos nossos clientes.
                </p>
              </div>
            </div>
          </section>

          {/* Missão & Valores */}
          <section>
            <h2 className="text-3xl font-bold mb-12 text-center" style={{ color: 'var(--accent)' }}>
              Missão & Valores
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-black/70 border border-green-900 rounded-xl p-6 text-center">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-bold mb-3 text-[var(--accent)]">Qualidade</h3>
                <p className="text-neutral-200">Produtos premium selecionados com rigorosos padrões de qualidade.</p>
              </div>
              <div className="bg-black/70 border border-green-900 rounded-xl p-6 text-center">
                <div className="text-4xl mb-4">🔄</div>
                <h3 className="text-xl font-bold mb-3 text-[var(--accent)]">Simplicidade</h3>
                <p className="text-neutral-200">Design minimalista que foca no essencial e na funcionalidade.</p>
              </div>
              <div className="bg-black/70 border border-green-900 rounded-xl p-6 text-center">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-xl font-bold mb-3 text-[var(--accent)]">Transparência</h3>
                <p className="text-neutral-200">Atendimento honesto e comunicação clara em todos os processos.</p>
              </div>
              <div className="bg-black/70 border border-green-900 rounded-xl p-6 text-center">
                <div className="text-4xl mb-4">💚</div>
                <h3 className="text-xl font-bold mb-3 text-[var(--accent)]">Sustentabilidade</h3>
                <p className="text-neutral-200">Compromisso com práticas responsáveis e sustentáveis.</p>
              </div>
            </div>
          </section>

          {/* Compromisso com a Qualidade */}
          <section className="bg-gradient-to-r from-[var(--accent)]/10 to-green-800/10 border border-green-700 rounded-2xl p-12">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6" style={{ color: 'var(--accent)' }}>
                Nosso Compromisso com a Qualidade
              </h2>
              <p className="text-lg text-neutral-200 mb-8 leading-relaxed">
                Na Kowalski, qualidade não é apenas uma palavra - é nossa filosofia central. Cada produto passa por 
                rigorosos testes de qualidade e durabilidade antes de chegar até você.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-[var(--accent)] mb-2">100%</div>
                  <p className="text-neutral-200">Satisfação Garantida</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[var(--accent)] mb-2">24h</div>
                  <p className="text-neutral-200">Suporte Técnico</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[var(--accent)] mb-2">5★</div>
                  <p className="text-neutral-200">Avaliação Média</p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center">
            <h2 className="text-3xl font-bold mb-6" style={{ color: 'var(--accent)' }}>
              Pronto para Conhecer Nossos Produtos?
            </h2>
            <p className="text-lg text-neutral-200 mb-8 max-w-2xl mx-auto">
              Descubra como a qualidade e o design podem transformar sua experiência de compra.
            </p>
            <Link href="/shop" className="btn-primary text-lg px-8 py-4">
              Explorar Catálogo
            </Link>
          </section>
        </div>
      </main>
    </div>
  );
}

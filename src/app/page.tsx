
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground font-sans fade-in">
      <header className="w-full flex flex-col items-center py-12">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-2" style={{ color: '#CDFF00', letterSpacing: '-0.03em' }}>
          Kowalski
        </h1>
        <p className="text-lg sm:text-xl text-center max-w-2xl text-foreground/80 mb-6">
          Produtos genéricos de alta qualidade para o seu dia a dia. Minimalismo, elegância e experiência fluida.
        </p>
        <div className="w-full flex justify-center">
          <div className="rounded-2xl bg-gradient-to-r from-[#CDFF00] to-[#b6e600] shadow-lg px-8 py-6 flex flex-col items-center gap-2 scale-on-hover transition-all duration-300">
            <span className="text-black text-xl font-semibold animate-pulse">Bem-vindo à nova experiência de compras online.</span>
            <a href="/shop" className="btn-primary mt-2 text-base fade-in" style={{ minWidth: 180 }}>
              Ver Produtos
            </a>
          </div>
        </div>
      </header>
      <main className="flex-1 w-full max-w-6xl px-4 py-8">
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-foreground">Destaques</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Produtos em destaque (placeholders) */}
            {[1,2,3].map((i) => (
              <div key={i} className="rounded-xl border border-neutral-100 bg-white shadow-sm p-6 flex flex-col items-center scale-on-hover transition-all duration-200">
                <div className="w-32 h-32 bg-neutral-100 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-4xl text-neutral-400">📦</span>
                </div>
                <h3 className="text-lg font-bold mb-2">Produto {i}</h3>
                <p className="text-sm text-neutral-600 mb-4 text-center">Descrição breve do produto {i}. Alta qualidade, preço justo.</p>
                <button className="btn-primary w-full">Adicionar ao carrinho</button>
              </div>
            ))}
          </div>
        </section>
      </main>
      <footer className="w-full py-8 flex flex-col items-center text-sm text-neutral-500">
        <span>Kowalski © {new Date().getFullYear()} &middot; Todos os direitos reservados</span>
      </footer>
    </div>
  );
}

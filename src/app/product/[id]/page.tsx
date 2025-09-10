import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { products } from "@/data/products";

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === params.id);
  if (!product) return notFound();

  return (
    <div className="min-h-screen flex flex-col bg-black text-[var(--foreground)] font-sans">
      <nav className="w-full flex items-center justify-between px-8 py-6 bg-black/90 backdrop-blur border-b border-green-900">
        <Link href="/" className="text-3xl font-extrabold tracking-tight" style={{ color: 'var(--accent)' }}>Kowalski</Link>
        <div className="flex gap-6 items-center">
          <Link href="/shop" className="hover:text-[var(--accent)] font-medium transition-colors">← Voltar à Loja</Link>
          <Link href="/about" className="hover:text-[var(--accent)] font-medium transition-colors">Sobre</Link>
          <Link href="/contact" className="hover:text-[var(--accent)] font-medium transition-colors">Contato</Link>
        </div>
      </nav>
      
      <main className="flex-1 max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Imagem do produto */}
          <div className="flex justify-center">
            <div className="w-full max-w-md bg-[var(--accent)]/10 rounded-2xl p-8 border border-green-900">
              <Image 
                src={product.image} 
                alt={product.name} 
                width={400} 
                height={400} 
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* Informações do produto */}
          <div className="space-y-6">
            <div>
              <span className="inline-block px-3 py-1 bg-[var(--accent)]/20 text-[var(--accent)] rounded-full text-sm font-medium mb-4">
                {product.category}
              </span>
              <h1 className="text-4xl font-bold mb-4" style={{ color: 'var(--accent)' }}>
                {product.name}
              </h1>
              <p className="text-xl text-neutral-200 mb-6 leading-relaxed">
                {product.description}
              </p>
            </div>

            <div className="bg-black/70 border border-green-900 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4 text-[var(--accent)]">Descrição Detalhada</h3>
              <p className="text-neutral-200 leading-relaxed">
                {product.detailedDescription}
              </p>
            </div>

            <div className="flex items-center justify-between bg-gradient-to-r from-[var(--accent)]/10 to-green-800/10 border border-green-700 rounded-xl p-6">
              <div>
                <p className="text-sm text-neutral-300 mb-1">Preço</p>
                <span className="text-3xl font-bold text-[var(--accent)]">
                  R$ {product.price.toFixed(2)}
                </span>
              </div>
              <div className="flex flex-col gap-3">
                <button className="btn-primary px-8 py-3 text-lg font-bold">
                  Adicionar ao Carrinho
                </button>
                <Link href="/checkout" className="text-center text-[var(--accent)] hover:underline">
                  Comprar Agora
                </Link>
              </div>
            </div>

            {/* Características do produto */}
            <div className="bg-black/70 border border-green-900 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4 text-[var(--accent)]">Por que escolher este produto?</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <span className="text-[var(--accent)]">✓</span>
                  <span className="text-neutral-200">Qualidade premium garantida</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-[var(--accent)]">✓</span>
                  <span className="text-neutral-200">Design minimalista e funcional</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-[var(--accent)]">✓</span>
                  <span className="text-neutral-200">Entrega rápida e segura</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-[var(--accent)]">✓</span>
                  <span className="text-neutral-200">Suporte especializado</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Produtos relacionados */}
        <section className="mt-20">
          <h2 className="text-3xl font-bold mb-8 text-center" style={{ color: 'var(--accent)' }}>
            Produtos Relacionados
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products
              .filter(p => p.id !== product.id && p.category === product.category)
              .slice(0, 4)
              .map((relatedProduct) => (
                <Link href={`/product/${relatedProduct.id}`} key={relatedProduct.id}>
                  <div className="rounded-xl border border-green-900 bg-black/70 shadow-lg p-6 scale-on-hover transition-all duration-300 hover:border-[var(--accent)]">
                    <div className="w-24 h-24 bg-[var(--accent)]/10 rounded-lg mb-4 mx-auto flex items-center justify-center">
                      <Image src={relatedProduct.image} alt={relatedProduct.name} width={80} height={80} className="object-contain" />
                    </div>
                    <h4 className="text-sm font-bold mb-2 text-white text-center">{relatedProduct.name}</h4>
                    <p className="text-lg font-bold text-[var(--accent)] text-center">R$ {relatedProduct.price.toFixed(2)}</p>
                  </div>
                </Link>
              ))
            }
          </div>
        </section>
      </main>
    </div>
  );
}

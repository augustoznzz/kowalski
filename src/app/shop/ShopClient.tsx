"use client";
import React from "react";
import Navbar from '@/components/Navbar';
import { CartProvider } from '@/components/CartContext';

export default function ShopClient() {
  return (
    <CartProvider>
      <Navbar />
      <div className="min-h-screen flex flex-col items-center bg-black text-[var(--foreground)] font-sans fade-in">
        <header className="w-full flex flex-col items-center py-10">
          <h1 className="text-3xl sm:text-4xl font-bold mb-2" style={{ color: 'var(--accent)' }}>
            Catálogo de Produtos
          </h1>
          <p className="text-lg text-neutral-200 mb-4">Encontre produtos de alta qualidade para todas as necessidades.</p>
        </header>
        <main className="w-full max-w-6xl px-4 py-8">
          <div className="flex flex-col sm:flex-row gap-8 mb-8">
            {/* Filtros (placeholders) */}
            <div className="flex-1 flex flex-col gap-2">
              <label className="font-semibold">Categoria</label>
              <select className="border border-green-900 bg-black text-white rounded px-3 py-2">
                <option>Todas</option>
                <option>Categoria 1</option>
                <option>Categoria 2</option>
              </select>
            </div>
            <div className="flex-1 flex flex-col gap-2">
              <label className="font-semibold">Preço</label>
              <select className="border border-green-900 bg-black text-white rounded px-3 py-2">
                <option>Todos</option>
                <option>Até R$ 100</option>
                <option>R$ 100 - R$ 500</option>
                <option>Acima de R$ 500</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Produtos (placeholders) */}
            {[1,2,3,4,5,6].map((i) => (
              <div key={i} className="rounded-xl border border-green-900 bg-black shadow-lg p-6 flex flex-col items-center scale-on-hover transition-all duration-200">
                <div className="w-32 h-32 bg-[var(--accent)]/10 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-4xl text-[var(--accent)]">📦</span>
                </div>
                <h3 className="text-lg font-bold mb-2 text-white">Produto {i}</h3>
                <p className="text-sm text-neutral-300 mb-4 text-center">Descrição breve do produto {i}. Alta qualidade, preço justo.</p>
                <button className="btn-primary w-full">Adicionar ao carrinho</button>
              </div>
            ))}
          </div>
        </main>
      </div>
    </CartProvider>
  );
}

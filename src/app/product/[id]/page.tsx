import React from "react";
import { notFound } from "next/navigation";

// Placeholder para simular produtos
const products = [
  { id: "1", name: "Produto 1", description: "Descrição detalhada do Produto 1.", price: 199.9 },
  { id: "2", name: "Produto 2", description: "Descrição detalhada do Produto 2.", price: 299.9 },
  { id: "3", name: "Produto 3", description: "Descrição detalhada do Produto 3.", price: 399.9 },
];

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === params.id);
  if (!product) return notFound();

  return (
    <div className="min-h-screen flex flex-col items-center bg-black text-[var(--foreground)] font-sans fade-in">
      <main className="w-full max-w-2xl px-4 py-16 flex flex-col items-center">
        <div className="w-48 h-48 bg-[var(--accent)]/10 rounded-lg mb-6 flex items-center justify-center">
          <span className="text-6xl text-[var(--accent)]">📦</span>
        </div>
        <h1 className="text-3xl font-bold mb-2" style={{ color: 'var(--accent)' }}>{product.name}</h1>
        <p className="text-lg text-neutral-200 mb-4 text-center">{product.description}</p>
        <span className="text-2xl font-semibold mb-6 text-white">R$ {product.price.toFixed(2)}</span>
        <button className="btn-primary w-full max-w-xs">Adicionar ao carrinho</button>
      </main>
    </div>
  );
}

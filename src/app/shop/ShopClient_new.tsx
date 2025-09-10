"use client";
import React, { useState } from "react";
import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '@/components/CartContext';
import { products, categories, priceRanges, Product } from '@/data/products';

export default function ShopClient() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [selectedPriceRange, setSelectedPriceRange] = useState(0);
  const { addToCart } = useCart();

  const filteredProducts = products.filter(product => {
    const categoryMatch = selectedCategory === "Todos" || product.category === selectedCategory;
    const priceRange = priceRanges[selectedPriceRange];
    const priceMatch = product.price >= priceRange.min && product.price <= priceRange.max;
    return categoryMatch && priceMatch;
  });

  const handleAddToCart = (product: Product) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price
    });
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-black text-[var(--foreground)] font-sans fade-in">
      <div className="w-full max-w-7xl px-4 py-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4" style={{ color: 'var(--accent)' }}>
            Catálogo de Produtos
          </h1>
          <p className="text-lg text-neutral-200">Encontre produtos de alta qualidade para todas as necessidades.</p>
        </header>

        {/* Filtros */}
        <div className="flex flex-col sm:flex-row gap-6 mb-12 bg-black/70 border border-green-900 rounded-xl p-6">
          <div className="flex-1">
            <label className="block font-semibold mb-2 text-white">Categoria</label>
            <select 
              className="w-full border border-green-900 bg-black text-white rounded-lg px-4 py-3 focus:border-[var(--accent)] focus:outline-none"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
          <div className="flex-1">
            <label className="block font-semibold mb-2 text-white">Faixa de Preço</label>
            <select 
              className="w-full border border-green-900 bg-black text-white rounded-lg px-4 py-3 focus:border-[var(--accent)] focus:outline-none"
              value={selectedPriceRange}
              onChange={(e) => setSelectedPriceRange(Number(e.target.value))}
            >
              {priceRanges.map((range, index) => (
                <option key={index} value={index}>
                  {range.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Lista de Produtos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredProducts.map(product => (
            <div key={product.id} className="bg-black/70 border border-green-900 rounded-xl p-6 flex flex-col items-center text-center hover:border-[var(--accent)] transition-colors duration-300">
              <div className="w-32 h-32 bg-[var(--accent)]/10 rounded-lg mb-4 flex items-center justify-center">
                <Image src={product.image} alt={product.name} width={100} height={100} className="object-contain" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-white text-center">{product.name}</h3>
              <p className="text-sm text-neutral-300 mb-3 text-center line-clamp-3">{product.description}</p>
              <div className="text-xl font-bold text-[var(--accent)] mb-4">R$ {product.price.toFixed(2)}</div>
              <div className="flex flex-col gap-2 w-full">
                <button 
                  onClick={() => handleAddToCart(product)}
                  className="btn-primary w-full py-2 text-sm"
                >
                  Adicionar ao Carrinho
                </button>
                <Link href={`/product/${product.id}`} className="text-center text-[var(--accent)] hover:underline text-sm">
                  Ver Detalhes
                </Link>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-xl text-neutral-300">Nenhum produto encontrado com os filtros selecionados.</p>
          </div>
        )}
      </div>
    </div>
  );
}

"use client";
import React, { useState } from "react";
import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '@/components/CartContext';
import { products, categories, Product } from '@/data/products';

export default function ShopClient() {
  const productPrices = products.map(p => p.price);
  const absoluteMinPrice = Math.floor(Math.min(...productPrices));
  const absoluteMaxPrice = Math.ceil(Math.max(...productPrices));

  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [minPrice, setMinPrice] = useState(absoluteMinPrice);
  const [maxPrice, setMaxPrice] = useState(absoluteMaxPrice);
  const { addToCart } = useCart();

  const filteredProducts = products.filter(product => {
    const categoryMatch = selectedCategory === "Todos" || product.category === selectedCategory;
    const priceMatch = product.price >= minPrice && product.price <= maxPrice;
    return categoryMatch && priceMatch;
  });

  const handleAddToCart = (product: Product) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1
    });
  };

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] font-sans fade-in">
      <div className="w-full max-w-7xl mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-2 text-[var(--foreground)]">
            Digital Marketplace
          </h1>
          <p className="text-lg text-gray-600">Ativos de alta qualidade para seus projetos criativos.</p>
        </header>

        {/* Filtros Horizontais */}
        <div className="bg-[var(--neutral-white)] border border-[var(--neutral-gray)] rounded-xl p-4 mb-12 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            
            {/* Filtro de Categoria */}
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">Categoria</label>
              <select 
                className="w-full border border-[var(--neutral-gray)] bg-white text-gray-800 rounded-lg px-4 py-2 focus:border-[var(--accent)] focus:outline-none transition-colors"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
            
            {/* Filtro de Preço */}
            <div className="flex-1 md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Faixa de Preço: R$ {minPrice.toFixed(0)} - R$ {maxPrice.toFixed(0)}
              </label>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-gray-500 mb-1">Mínimo</label>
                  <input
                    type="range"
                    min={absoluteMinPrice}
                    max={absoluteMaxPrice}
                    value={minPrice}
                    onChange={(e) => {
                      const value = Number(e.target.value);
                      if (value <= maxPrice) setMinPrice(value);
                    }}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-500 mb-1">Máximo</label>
                  <input
                    type="range"
                    min={absoluteMinPrice}
                    max={absoluteMaxPrice}
                    value={maxPrice}
                    onChange={(e) => {
                      const value = Number(e.target.value);
                      if (value >= minPrice) setMaxPrice(value);
                    }}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* Lista de Produtos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredProducts.map(product => (
            <div key={product.id} className="bg-white border border-[var(--neutral-gray)] rounded-xl overflow-hidden flex flex-col group hover:shadow-lg transition-all duration-300">
              <div className="w-full h-48 bg-gray-50 flex items-center justify-center p-4 overflow-hidden">
                <Image src={product.image} alt={product.name} width={80} height={80} className="object-contain group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="p-4 flex flex-col flex-grow">
                <p className="text-xs text-gray-500 mb-1">{product.category}</p>
                <h3 className="text-md font-semibold mb-2 text-gray-800 flex-grow">{product.name}</h3>
                <div className="flex justify-between items-center mb-3">
                  <div className="text-lg font-bold text-[var(--accent)]">R$ {product.price.toFixed(2)}</div>
                  <div className={`text-xs font-medium px-2 py-1 rounded-full ${product.stock > 0 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                    {product.stock > 0 ? `${product.stock} em estoque` : 'Esgotado'}
                  </div>
                </div>
                <div className="flex flex-col gap-2 w-full mt-auto">
                  <button 
                    onClick={() => handleAddToCart(product)}
                    disabled={product.stock === 0}
                    className="btn-primary w-full py-2 text-sm disabled:bg-gray-300 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none"
                  >
                    {product.stock > 0 ? 'Adicionar ao Carrinho' : 'Esgotado'}
                  </button>
                  <Link href={`/product/${product.id}`} className="text-center text-gray-500 hover:text-[var(--accent)] hover:underline text-sm">
                    Ver Detalhes
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-xl text-gray-500">Nenhum produto encontrado.</p>
          </div>
        )}
      </div>
    </div>
  );
}

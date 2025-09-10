"use client";
import React, { useState } from "react";
import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '@/components/CartContext';
import { useTranslation } from '@/components/LanguageToggle';
import { products, categories, Product } from '@/data/products';

export default function ShopClient() {
  const { t } = useTranslation();
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
      price: product.price
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
        <div className="bg-[#3f3e3e] border border-lime/20 rounded-xl p-6 mb-12 shadow-lg backdrop-blur-sm">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            
            {/* Filtro de Categoria */}
            <div className="flex-1">
              <label className="block text-sm font-medium text-lime mb-2">{t('category')}</label>
              <select 
                className="w-full border border-lime/30 bg-[#2a2a2a] text-white rounded-lg px-4 py-2 focus:border-lime focus:outline-none transition-all duration-300 hover:bg-[#333333]"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map(category => (
                  <option key={category} value={category} className="bg-[#2a2a2a] text-white">{category}</option>
                ))}
              </select>
            </div>
            
            {/* Filtro de Preço */}
            <div className="flex-1 md:col-span-2">
              <label className="block text-sm font-medium text-lime mb-2">
                {t('priceRange')}: R$ {minPrice.toFixed(0)} - R$ {maxPrice.toFixed(0)}
              </label>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-neutral-300 mb-1">{t('minimum')}</label>
                  <input
                    type="range"
                    min={absoluteMinPrice}
                    max={absoluteMaxPrice}
                    value={minPrice}
                    onChange={(e) => {
                      const value = Number(e.target.value);
                      if (value <= maxPrice) setMinPrice(value);
                    }}
                    className="w-full h-2 bg-neutral-600 rounded-lg appearance-none cursor-pointer slider"
                  />
                </div>
                <div>
                  <label className="block text-xs text-neutral-300 mb-1">{t('maximum')}</label>
                  <input
                    type="range"
                    min={absoluteMinPrice}
                    max={absoluteMaxPrice}
                    value={maxPrice}
                    onChange={(e) => {
                      const value = Number(e.target.value);
                      if (value >= minPrice) setMaxPrice(value);
                    }}
                    className="w-full h-2 bg-neutral-600 rounded-lg appearance-none cursor-pointer slider"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* Lista de Produtos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredProducts.map(product => (
            <div key={product.id} className="bg-[#3f3e3e] border border-lime/20 rounded-xl overflow-hidden flex flex-col group hover:shadow-xl hover:shadow-lime/10 hover:-translate-y-2 transition-all duration-500 hover:border-lime/40 transform will-change-transform">
              <div className="w-full h-48 bg-gradient-to-br from-neutral-700 to-neutral-800 flex items-center justify-center p-4 overflow-hidden">
                <Image src={product.image} alt={product.name} width={80} height={80} className="object-contain group-hover:scale-110 transition-transform duration-500 animate-float" />
              </div>
              <div className="p-4 flex flex-col flex-grow">
                <p className="text-xs text-lime/80 mb-1 font-medium">{product.category}</p>
                <h3 className="text-md font-semibold mb-2 text-white flex-grow group-hover:text-lime transition-colors duration-300">{product.name}</h3>
                <div className="flex justify-between items-center mb-3">
                  <div className="text-lg font-bold text-lime group-hover:animate-pulse-lime">R$ {product.price.toFixed(2)}</div>
                  <div className={`text-xs font-medium px-2 py-1 rounded-full ${product.stock > 0 ? 'bg-lime/20 text-lime' : 'bg-red-500/20 text-red-400'}`}>
                    {product.stock > 0 ? `${product.stock} ${t('inStock')}` : t('outOfStock')}
                  </div>
                </div>
                <div className="flex flex-col gap-2 w-full mt-auto">
                  <button 
                    onClick={() => handleAddToCart(product)}
                    disabled={product.stock === 0}
                    className="btn-primary w-full py-2 text-sm disabled:bg-neutral-600 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none disabled:text-neutral-400"
                  >
                    {product.stock > 0 ? t('addToCart') : t('outOfStock')}
                  </button>
                  <Link href={`/product/${product.id}`} className="text-center text-neutral-300 hover:text-lime hover:underline text-sm transition-colors duration-300">
                    {t('viewDetails')}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-xl text-neutral-300 animate-fade-in">{t('noProductsFound')}</p>
          </div>
        )}
      </div>
    </div>
  );
}

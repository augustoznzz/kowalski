"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { products, Product } from "@/data/products";
import { useCart } from "@/components/CartContext";
import { useTranslation } from "@/components/LanguageToggle";

export default function ProductPage({ params }: { params: { id: string } }) {
  const { t } = useTranslation();
  const product = products.find((p) => p.id === params.id);
  const { addToCart } = useCart();

  if (!product) return notFound();

  const handleAddToCart = (product: Product) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price
    });
  };

  const relatedProducts = products
    .filter(p => p.id !== product.id && p.category === product.category)
    .slice(0, 4);

  return (
    <div className="min-h-screen bg-neutral-900 text-white font-sans">
      <main className="flex-1 max-w-6xl mx-auto px-4 py-12">
        <div className="mb-8">
          <Link href="/shop" className="text-sm text-neutral-300 hover:text-lime transition-colors duration-300 animate-fade-in">
            ← {t('backToShop')}
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Imagem do produto */}
          <div className="flex justify-center items-center bg-gradient-to-br from-neutral-700 to-neutral-800 rounded-2xl p-8 border border-lime/20 hover:border-lime/40 transition-all duration-500 animate-fade-in">
            <Image 
              src={product.image} 
              alt={product.name} 
              width={350} 
              height={350} 
              className="w-full h-auto object-contain animate-float"
            />
          </div>

          {/* Informações do produto */}
          <div className="space-y-6 animate-fade-in-up">
            <div>
              <span className="inline-block px-3 py-1 bg-lime/20 text-lime rounded-full text-sm font-medium mb-3 animate-pulse-subtle">
                {product.category}
              </span>
              <h1 className="text-4xl font-bold mb-4 text-white">
                {product.name}
              </h1>
              <p className="text-lg text-neutral-300 mb-6 leading-relaxed">
                {product.description}
              </p>
            </div>

            <div className="bg-[#3f3e3e] border border-lime/20 rounded-xl p-6 hover:border-lime/40 transition-all duration-500">
              <h3 className="text-lg font-semibold mb-3 text-white">{t('detailedDescription')}</h3>
              <p className="text-neutral-300 leading-relaxed">
                {product.detailedDescription}
              </p>
            </div>

            <div className="bg-[#3f3e3e] border border-lime/20 rounded-xl p-6 hover:border-lime/40 transition-all duration-500">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-neutral-400 mb-1">{t('price')}</p>
                  <span className="text-3xl font-bold text-lime animate-pulse-lime">
                    R$ {product.price.toFixed(2)}
                  </span>
                </div>
                <div className={`text-sm font-medium px-3 py-1.5 rounded-full ${product.stock > 0 ? 'bg-lime/20 text-lime' : 'bg-red-500/20 text-red-400'}`}>
                  {product.stock > 0 ? `${product.stock} ${t('inStock')}` : t('outOfStock')}
                </div>
              </div>
              <div className="mt-6 flex flex-col gap-3">
                <button 
                  onClick={() => handleAddToCart(product)}
                  disabled={product.stock === 0}
                  className="btn-primary w-full py-3 text-base font-bold disabled:bg-neutral-600 disabled:cursor-not-allowed disabled:text-neutral-400"
                >
                  {product.stock > 0 ? t('addToCart') : t('outOfStock')}
                </button>
              </div>
            </div>

            {/* Características do produto digital */}
            <div className="bg-[#3f3e3e] border border-lime/20 rounded-xl p-6 hover:border-lime/40 transition-all duration-500">
              <h3 className="text-lg font-semibold mb-4 text-white">{t('whatYouGet')}</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <span className="text-lime animate-pulse-subtle">✓</span>
                  <span className="text-neutral-300">{t('immediateDownload')}</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-lime animate-pulse-subtle">✓</span>
                  <span className="text-neutral-300">{t('highResFiles')}</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-lime animate-pulse-subtle">✓</span>
                  <span className="text-neutral-300">{t('commercialLicense')}</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-lime animate-pulse-subtle">✓</span>
                  <span className="text-neutral-300">{t('supportUpdates')}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Produtos relacionados */}
        {relatedProducts.length > 0 && (
          <section className="mt-20 pt-12 border-t border-lime/20">
            <h2 className="text-3xl font-bold mb-8 text-center text-white animate-fade-in">
              {t('youMayAlsoLike')}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
              {relatedProducts.map((relatedProduct) => (
                <Link href={`/product/${relatedProduct.id}`} key={relatedProduct.id}>
                  <div className="bg-[#3f3e3e] border border-lime/20 rounded-xl overflow-hidden group hover:shadow-xl hover:shadow-lime/10 hover:-translate-y-2 transition-all duration-500 hover:border-lime/40 transform will-change-transform animate-fade-in-up">
                    <div className="w-full h-40 bg-gradient-to-br from-neutral-700 to-neutral-800 flex items-center justify-center p-4">
                      <Image src={relatedProduct.image} alt={relatedProduct.name} width={60} height={60} className="object-contain group-hover:scale-110 transition-transform duration-500 animate-float" />
                    </div>
                    <div className="p-4">
                      <h4 className="text-sm font-semibold mb-1 text-white truncate group-hover:text-lime transition-colors duration-300">{relatedProduct.name}</h4>
                      <p className="text-md font-bold text-lime group-hover:animate-pulse-lime">R$ {relatedProduct.price.toFixed(2)}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
}

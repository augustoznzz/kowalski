"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { products, Product } from "@/data/products";
import { useCart } from "@/components/CartContext";

export default function ProductPage({ params }: { params: { id: string } }) {
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
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] font-sans">
      <main className="flex-1 max-w-6xl mx-auto px-4 py-12">
        <div className="mb-8">
          <Link href="/shop" className="text-sm text-gray-500 hover:text-[var(--accent)] transition-colors">
            &larr; Voltar para a loja
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Imagem do produto */}
          <div className="flex justify-center items-center bg-gray-50 rounded-2xl p-8 border border-[var(--neutral-gray)]">
            <Image 
              src={product.image} 
              alt={product.name} 
              width={350} 
              height={350} 
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Informações do produto */}
          <div className="space-y-6">
            <div>
              <span className="inline-block px-3 py-1 bg-blue-100 text-[var(--accent)] rounded-full text-sm font-medium mb-3">
                {product.category}
              </span>
              <h1 className="text-4xl font-bold mb-4 text-gray-800">
                {product.name}
              </h1>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                {product.description}
              </p>
            </div>

            <div className="bg-white border border-[var(--neutral-gray)] rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-3 text-gray-800">Descrição Detalhada</h3>
              <p className="text-gray-600 leading-relaxed">
                {product.detailedDescription}
              </p>
            </div>

            <div className="bg-white border border-[var(--neutral-gray)] rounded-xl p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Preço</p>
                  <span className="text-3xl font-bold text-[var(--accent)]">
                    R$ {product.price.toFixed(2)}
                  </span>
                </div>
                <div className={`text-sm font-medium px-3 py-1.5 rounded-full ${product.stock > 0 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                  {product.stock > 0 ? `${product.stock} em estoque` : 'Esgotado'}
                </div>
              </div>
              <div className="mt-6 flex flex-col gap-3">
                <button 
                  onClick={() => handleAddToCart(product)}
                  disabled={product.stock === 0}
                  className="btn-primary w-full py-3 text-base font-bold disabled:bg-gray-300 disabled:cursor-not-allowed"
                >
                  {product.stock > 0 ? 'Adicionar ao Carrinho' : 'Esgotado'}
                </button>
              </div>
            </div>

            {/* Características do produto digital */}
            <div className="bg-white border border-[var(--neutral-gray)] rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-4 text-gray-800">O que você recebe</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-600">Download Imediato</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-600">Arquivos em alta resolução</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-600">Licença para uso pessoal e comercial</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-600">Suporte e atualizações futuras</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Produtos relacionados */}
        {relatedProducts.length > 0 && (
          <section className="mt-20 pt-12 border-t border-[var(--neutral-gray)]">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
              Você também pode gostar
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
              {relatedProducts.map((relatedProduct) => (
                <Link href={`/product/${relatedProduct.id}`} key={relatedProduct.id}>
                  <div className="bg-white border border-[var(--neutral-gray)] rounded-xl overflow-hidden group hover:shadow-md transition-all duration-300">
                    <div className="w-full h-40 bg-gray-50 flex items-center justify-center p-4">
                      <Image src={relatedProduct.image} alt={relatedProduct.name} width={60} height={60} className="object-contain group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div className="p-4">
                      <h4 className="text-sm font-semibold mb-1 text-gray-800 truncate">{relatedProduct.name}</h4>
                      <p className="text-md font-bold text-[var(--accent)]">R$ {relatedProduct.price.toFixed(2)}</p>
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

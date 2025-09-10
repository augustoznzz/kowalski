import React from "react";
import Link from 'next/link';

export default function LocaleHomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground font-sans fade-in">
      <h1 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: '#CDFF00' }}>
        Bem-vindo à Kowalski
      </h1>
      <p className="text-lg text-foreground/80 mb-6 max-w-xl text-center">
        Esta é a página inicial para o idioma selecionado.
      </p>
      <Link href="/shop" className="btn-primary mt-2 text-base fade-in" style={{ minWidth: 180 }}>
        Ver Produtos
      </Link>
    </div>
  );
}

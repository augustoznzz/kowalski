import React from "react";

import StripeCheckoutButton from "@/components/StripeCheckoutButton";
import RampCheckoutButton from "@/components/RampCheckoutButton";

export default function CheckoutPage() {
  // Placeholder para valor total
  const total = 499.8;
  return (
    <div className="min-h-screen flex flex-col items-center bg-background text-foreground font-sans fade-in">
      <header className="w-full flex flex-col items-center py-10">
        <h1 className="text-3xl sm:text-4xl font-bold mb-2" style={{ color: '#CDFF00' }}>
          Finalizar Compra
        </h1>
        <p className="text-lg text-foreground/80 mb-4 max-w-2xl text-center">
          Revise seus produtos e escolha a forma de pagamento.
        </p>
      </header>
      <main className="w-full max-w-2xl px-4 py-8 flex flex-col gap-8">
        {/* Resumo do carrinho (placeholder) */}
        <section className="bg-white rounded-xl shadow p-6 mb-4">
          <h2 className="text-xl font-semibold mb-4">Seu Carrinho</h2>
          <ul className="mb-4">
            <li className="flex justify-between mb-2"><span>Produto 1</span><span>R$ 199,90</span></li>
            <li className="flex justify-between mb-2"><span>Produto 2</span><span>R$ 299,90</span></li>
          </ul>
          <div className="flex justify-between font-bold text-lg">
            <span>Total</span>
            <span>R$ {total.toFixed(2)}</span>
          </div>
        </section>
        {/* Formas de pagamento */}
        <section className="flex flex-col gap-4">
          <StripeCheckoutButton amount={total} />
          <RampCheckoutButton amount={total} />
        </section>
      </main>
    </div>
  );
}

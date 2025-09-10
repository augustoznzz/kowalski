"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import StripeCheckoutButton from "@/components/StripeCheckoutButton";
import RampCheckoutButton from "@/components/RampCheckoutButton";
import { useCart } from '@/components/CartContext';

export default function CheckoutClient() {
  const { items, total, clearCart } = useCart();
  const searchParams = useSearchParams();
  const [message, setMessage] = useState<{ type: 'success' | 'error' | null; text: string }>({ type: null, text: '' });

  useEffect(() => {
    const success = searchParams.get('success');
    const canceled = searchParams.get('canceled');

    if (success === '1') {
      setMessage({ type: 'success', text: '🎉 Pagamento realizado com sucesso! Obrigado pela sua compra.' });
      clearCart();
    } else if (canceled === '1') {
      setMessage({ type: 'error', text: '❌ Pagamento cancelado. Você pode tentar novamente quando quiser.' });
    }
  }, [searchParams, clearCart]);

  return (
    <div className="min-h-screen flex flex-col items-center bg-black text-[var(--foreground)] font-sans fade-in">
      <header className="w-full flex flex-col items-center py-10">
        <h1 className="text-3xl sm:text-4xl font-bold mb-2" style={{ color: 'var(--accent)' }}>
          Finalizar Compra
        </h1>
        <p className="text-lg text-neutral-200 mb-4 max-w-2xl text-center">
          Revise seus produtos e escolha a forma de pagamento.
        </p>
      </header>

      {/* Mensagem de Status */}
      {message.type && (
        <div className={`w-full max-w-2xl mx-auto mb-6 px-4`}>
          <div className={`p-4 rounded-lg border ${
            message.type === 'success' 
              ? 'bg-green-900/20 border-green-500 text-green-300' 
              : 'bg-red-900/20 border-red-500 text-red-300'
          }`}>
            {message.text}
          </div>
        </div>
      )}

      <main className="w-full max-w-2xl px-4 py-8 flex flex-col gap-8">
        {/* Resumo do carrinho */}
        <section className="bg-neutral-black rounded-xl shadow p-6 mb-4 border border-green-900">
          <h2 className="text-xl font-semibold mb-4" style={{ color: 'var(--accent)' }}>Seu Carrinho</h2>
          {items.length === 0 ? (
            <p className="text-neutral-300 text-center py-8">Seu carrinho está vazio</p>
          ) : (
            <>
              <ul className="mb-4">
                {items.map(item => (
                  <li key={item.id} className="flex justify-between mb-2 text-white">
                    <span>{item.name} (x{item.quantity})</span>
                    <span>R$ {(item.price * item.quantity).toFixed(2)}</span>
                  </li>
                ))}
              </ul>
              <div className="flex justify-between font-bold text-lg text-[var(--accent)]">
                <span>Total</span>
                <span>R$ {total.toFixed(2)}</span>
              </div>
            </>
          )}
        </section>
        
        {/* Formas de pagamento */}
        {items.length > 0 && (
          <section className="flex flex-col gap-4">
            <StripeCheckoutButton amount={total} />
            <RampCheckoutButton amount={total} />
          </section>
        )}
      </main>
    </div>
  );
}

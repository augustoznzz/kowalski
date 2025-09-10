"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useCart } from '@/components/CartContext';
import { useTranslation } from '@/components/LanguageToggle';

export default function CheckoutClient() {
  const { t } = useTranslation();
  const { items, total, clearCart } = useCart();
  const searchParams = useSearchParams();
  const [message, setMessage] = useState<{ type: 'success' | 'error' | null; text: string }>({ type: null, text: '' });
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const success = searchParams.get('success');
    const canceled = searchParams.get('canceled');

    if (success === '1') {
      setMessage({ type: 'success', text: '🎉 Pagamento realizado com sucesso! Verifique seu e-mail para o link de download.' });
      clearCart();
    } else if (canceled === '1') {
      setMessage({ type: 'error', text: '❌ Pagamento cancelado. Você pode tentar novamente.' });
    }
  }, [searchParams, clearCart]);

  const handleCheckout = async () => {
    if (!email) {
      alert("Por favor, insira seu e-mail.");
      return;
    }
    setIsLoading(true);
    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ items, email }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Falha ao iniciar o checkout.");
      }

      const { url } = await response.json();
      window.location.href = url;
    } catch (error) {
      console.error("Checkout error:", error);
      setMessage({ type: 'error', text: (error as Error).message });
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] font-sans fade-in">
      <div className="w-full max-w-2xl mx-auto px-4 py-12">
        <header className="text-center mb-10">
          <h1 className="text-4xl font-bold mb-2 text-white">
            {t('finalizePurchase')}
          </h1>
          <p className="text-lg text-neutral-300">
            Complete seu pedido para receber seus produtos digitais.
          </p>
        </header>

        {message.type && (
          <div className={`w-full mx-auto mb-6`}>
            <div className={`p-4 rounded-lg border ${
              message.type === 'success' 
                ? 'bg-lime/20 border-lime/40 text-lime' 
                : 'bg-red-500/20 border-red-500/40 text-red-400'
            }`}>
              {message.text}
            </div>
          </div>
        )}

        <main className="flex flex-col gap-8">
          <section className="bg-[#3f3e3e] rounded-xl shadow-sm p-6 border border-lime/20 hover:border-lime/40 transition-all duration-500">
            <h2 className="text-xl font-semibold mb-4 text-white">{t('orderSummary')}</h2>
            {items.length === 0 && !message.type ? (
              <p className="text-neutral-300 text-center py-8">{t('emptyCart')}</p>
            ) : (
              <>
                <ul className="mb-4 space-y-3">
                  {items.map(item => (
                    <li key={item.id} className="flex justify-between items-center text-neutral-300">
                      <span>{item.name} (x{item.quantity})</span>
                      <span className="font-medium text-lime">R$ {(item.price * item.quantity).toFixed(2)}</span>
                    </li>
                  ))}
                </ul>
                <div className="border-t border-lime/20 pt-4 flex justify-between font-bold text-lg">
                  <span className="text-white">{t('total')}</span>
                  <span className="text-lime animate-pulse-lime">R$ {total.toFixed(2)}</span>
                </div>
              </>
            )}
          </section>
          
          {items.length > 0 && (
            <section className="bg-[#3f3e3e] rounded-xl shadow-sm p-6 border border-lime/20 hover:border-lime/40 transition-all duration-500">
              <h2 className="text-xl font-semibold mb-4 text-white">{t('deliveryInfo')}</h2>
              <div className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-lime mb-1">
                    {t('emailAddress')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="voce@exemplo.com"
                    className="w-full border border-lime/30 bg-neutral-700 text-white rounded-lg px-4 py-2 focus:border-lime focus:outline-none transition-all duration-300 placeholder-neutral-400"
                    required
                  />
                  <p className="text-xs text-neutral-400 mt-1">{t('digitalProductsNote')}</p>
                </div>
                
                <button 
                  onClick={handleCheckout}
                  disabled={isLoading || !email}
                  className="w-full btn-primary py-3 text-base font-bold flex items-center justify-center gap-2 disabled:bg-neutral-600 disabled:cursor-not-allowed disabled:text-neutral-400"
                >
                  {isLoading ? t('processing') : t('payWithCard')}
                </button>
              </div>
            </section>
          )}
        </main>
      </div>
    </div>
  );
}

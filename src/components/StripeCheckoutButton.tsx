"use client";
import React from "react";
import { useCart } from "@/components/CartContext";

type StripeCheckoutButtonProps = {
  amount: number;
};

export default function StripeCheckoutButton({ amount }: StripeCheckoutButtonProps) {
  const { items } = useCart();

  async function handleCheckout() {
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items, amount }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        alert(data.error || "Erro ao processar pagamento com Stripe");
      }
    } catch (error) {
      console.error("Erro no checkout:", error);
      alert("Erro ao processar pagamento. Tente novamente.");
    }
  }

  return (
    <button 
      className="btn-primary w-full py-3 text-lg font-semibold" 
      onClick={handleCheckout} 
      disabled={items.length === 0}
    >
      💳 Pagar com Cartão (Stripe)
    </button>
  );
}

"use client";
import React, { useState } from "react";
import { useCart } from "@/components/CartContext";

type StripeCheckoutButtonProps = {
  amount: number;
};

export default function StripeCheckoutButton({ amount }: StripeCheckoutButtonProps) {
  const { items } = useCart();
  const [isLoading, setIsLoading] = useState(false);

  async function handleCheckout() {
    if (items.length === 0) {
      alert("Seu carrinho está vazio");
      return;
    }

    setIsLoading(true);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items, amount }),
      });
      
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      
      const data = await res.json();
      
      if (data.url) {
        window.location.href = data.url;
      } else {
        alert(data.error || "Erro ao processar pagamento com Stripe");
      }
    } catch (error) {
      console.error("Erro no checkout:", error);
      alert("Erro ao processar pagamento. Tente novamente.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <button 
      className="btn-primary w-full py-3 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed" 
      onClick={handleCheckout} 
      disabled={items.length === 0 || isLoading}
    >
      {isLoading ? "Processando..." : "💳 Pagar com Cartão (Stripe)"}
    </button>
  );
}

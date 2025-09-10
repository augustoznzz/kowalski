"use client";
import React from "react";
import { useCart } from "@/components/CartContext";
import { useTranslations } from 'next-intl';

type StripeCheckoutButtonProps = {
  amount: number;
};

export default function StripeCheckoutButton({ amount }: StripeCheckoutButtonProps) {
  const { items } = useCart();
  const t = useTranslations();

  async function handleCheckout() {
    const res = await fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items, amount }),
    });
    const data = await res.json();
    if (data.url) {
      window.location.href = data.url;
    } else {
      alert(data.error || t('checkout.pay.stripe'));
    }
  }

  return (
    <button className="btn-primary w-full" onClick={handleCheckout} disabled={items.length === 0}>
      {t('checkout.pay.stripe')}
    </button>
  );
}

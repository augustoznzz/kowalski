"use client";
import React from "react";
import { useCart } from "@/components/CartContext";
import { useTranslations } from 'next-intl';

export default function StripeCheckoutButton() {
  const { items } = useCart();
  const t = useTranslations();

  async function handleCheckout() {
    const res = await fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items }),
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

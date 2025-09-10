"use client";
import React, { useState } from "react";

export default function RampCheckoutButton({ amount }: { amount: number }) {
  const [open, setOpen] = useState(false);
  const apiKey = process.env.NEXT_PUBLIC_RAMP_API_KEY || "YOUR_RAMP_API_KEY";

  return (
    <>
      <button
        className="btn-primary w-full py-3 text-lg font-semibold"
        style={{ background: '#fff', color: '#222', border: '2px solid #CDFF00' }}
        onClick={() => setOpen(true)}
      >
        💰 Pagar via Ramp
      </button>
      {open && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-lg p-6 relative w-full max-w-lg">
            <button className="absolute top-2 right-2 text-xl" onClick={() => setOpen(false)}>&times;</button>
            {/* Widget Ramp Network */}
            <iframe
              src={`https://buy.ramp.network/?hostApiKey=${apiKey}&defaultAsset=ETH&fiatValue=${amount}`}
              title="Ramp Network Checkout"
              width="100%"
              height="500"
              style={{ border: 0 }}
              allow="accelerometer; autoplay; camera; gyroscope; payment"
            />
          </div>
        </div>
      )}
    </>
  );
}

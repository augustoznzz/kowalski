"use client";
import { useEffect } from 'react';

export default function PageTransition({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Check if we're in the browser before accessing document
    if (typeof window !== 'undefined' && document.body) {
      // Remove preload class after mount to enable transitions
      document.body.classList.remove('preload');
    }
  }, []);

  return (
    <div className="page-transition">
      {children}
    </div>
  );
}

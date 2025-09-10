"use client";
import { useEffect, useState } from 'react';

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Remove preload class after mount
    document.body.classList.remove('preload');
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="animate-pulse">
          <div className="text-2xl font-bold" style={{ color: 'var(--accent)' }}>
            Kowalski
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="page-transition">
      {children}
    </div>
  );
}

import React from "react";

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-black text-[var(--foreground)] font-sans fade-in">
      <header className="w-full flex flex-col items-center py-10">
        <h1 className="text-3xl sm:text-4xl font-bold mb-2" style={{ color: 'var(--accent)' }}>
          Contato & Suporte
        </h1>
        <p className="text-lg text-neutral-200 mb-4 max-w-2xl text-center">
          Precisa de ajuda? Fale conosco pelo formulário abaixo ou pelas redes sociais.
        </p>
      </header>
      <main className="w-full max-w-xl px-4 py-8 flex flex-col gap-8">
        <form className="flex flex-col gap-4 bg-neutral-black rounded-xl shadow p-6 border border-green-900">
          <label className="font-semibold">Nome
            <input type="text" className="mt-1 border border-green-900 bg-black text-white rounded px-3 py-2 w-full" required />
          </label>
          <label className="font-semibold">E-mail
            <input type="email" className="mt-1 border border-green-900 bg-black text-white rounded px-3 py-2 w-full" required />
          </label>
          <label className="font-semibold">Mensagem
            <textarea className="mt-1 border border-green-900 bg-black text-white rounded px-3 py-2 w-full" rows={4} required />
          </label>
          <button type="submit" className="btn-primary mt-2">Enviar</button>
        </form>
        <div className="flex flex-col items-center gap-2 text-sm text-neutral-400">
          <span>Ou envie um e-mail para <a href="mailto:suporte@kowalski.com" className="underline text-[var(--accent)]">suporte@kowalski.com</a></span>
          <div className="flex gap-4 mt-2">
            <a href="#" className="hover:text-[var(--accent)]">Instagram</a>
            <a href="#" className="hover:text-[var(--accent)]">Twitter</a>
            <a href="#" className="hover:text-[var(--accent)]">Facebook</a>
          </div>
        </div>
      </main>
    </div>
  );
}

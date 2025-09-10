import React from "react";

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-background text-foreground font-sans fade-in">
      <header className="w-full flex flex-col items-center py-10">
        <h1 className="text-3xl sm:text-4xl font-bold mb-2" style={{ color: '#CDFF00' }}>
          Contato & Suporte
        </h1>
        <p className="text-lg text-foreground/80 mb-4 max-w-2xl text-center">
          Precisa de ajuda? Fale conosco pelo formulário abaixo ou pelas redes sociais.
        </p>
      </header>
      <main className="w-full max-w-xl px-4 py-8 flex flex-col gap-8">
        <form className="flex flex-col gap-4 bg-white rounded-xl shadow p-6">
          <label className="font-semibold">Nome
            <input type="text" className="mt-1 border rounded px-3 py-2 w-full" required />
          </label>
          <label className="font-semibold">E-mail
            <input type="email" className="mt-1 border rounded px-3 py-2 w-full" required />
          </label>
          <label className="font-semibold">Mensagem
            <textarea className="mt-1 border rounded px-3 py-2 w-full" rows={4} required />
          </label>
          <button type="submit" className="btn-primary mt-2">Enviar</button>
        </form>
        <div className="flex flex-col items-center gap-2 text-sm text-foreground/70">
          <span>Ou envie um e-mail para <a href="mailto:suporte@kowalski.com" className="underline">suporte@kowalski.com</a></span>
          <div className="flex gap-4 mt-2">
            <a href="#" className="hover:text-[#CDFF00]">Instagram</a>
            <a href="#" className="hover:text-[#CDFF00]">Twitter</a>
            <a href="#" className="hover:text-[#CDFF00]">Facebook</a>
          </div>
        </div>
      </main>
    </div>
  );
}

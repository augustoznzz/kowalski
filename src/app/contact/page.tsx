import React from "react";
import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-[var(--foreground)] font-sans">
      <nav className="w-full flex items-center justify-between px-8 py-6 bg-black/90 backdrop-blur border-b border-green-900">
        <Link href="/" className="text-3xl font-extrabold tracking-tight" style={{ color: 'var(--accent)' }}>Kowalski</Link>
        <div className="flex gap-6 items-center">
          <Link href="/shop" className="hover:text-[var(--accent)] font-medium transition-colors">Produtos</Link>
          <Link href="/about" className="hover:text-[var(--accent)] font-medium transition-colors">Sobre</Link>
          <Link href="/contact" className="hover:text-[var(--accent)] font-medium transition-colors">Contato</Link>
        </div>
      </nav>

      <main className="flex-1 max-w-4xl mx-auto px-4 py-16">
        <header className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6" style={{ color: 'var(--accent)' }}>
            Contato & Suporte
          </h1>
          <p className="text-xl text-neutral-200 max-w-3xl mx-auto">
            Precisa de ajuda? Nossa equipe está pronta para atendê-lo da melhor forma possível.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Formulário de contato */}
          <div>
            <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--accent)' }}>
              Envie sua Mensagem
            </h2>
            <form className="space-y-6 bg-black/70 border border-green-900 rounded-xl p-8">
              <div>
                <label className="block font-semibold mb-2 text-white">Nome Completo</label>
                <input 
                  type="text" 
                  className="w-full border border-green-900 bg-black text-white rounded-lg px-4 py-3 focus:border-[var(--accent)] focus:outline-none transition-colors" 
                  placeholder="Seu nome completo"
                  required 
                />
              </div>
              
              <div>
                <label className="block font-semibold mb-2 text-white">E-mail</label>
                <input 
                  type="email" 
                  className="w-full border border-green-900 bg-black text-white rounded-lg px-4 py-3 focus:border-[var(--accent)] focus:outline-none transition-colors" 
                  placeholder="seu@email.com"
                  required 
                />
              </div>

              <div>
                <label className="block font-semibold mb-2 text-white">Assunto</label>
                <select className="w-full border border-green-900 bg-black text-white rounded-lg px-4 py-3 focus:border-[var(--accent)] focus:outline-none transition-colors">
                  <option>Dúvida sobre produto</option>
                  <option>Problema com pedido</option>
                  <option>Sugestão</option>
                  <option>Reclamação</option>
                  <option>Elogio</option>
                  <option>Outro</option>
                </select>
              </div>
              
              <div>
                <label className="block font-semibold mb-2 text-white">Mensagem</label>
                <textarea 
                  className="w-full border border-green-900 bg-black text-white rounded-lg px-4 py-3 focus:border-[var(--accent)] focus:outline-none transition-colors" 
                  rows={6}
                  placeholder="Descreva sua dúvida ou mensagem..."
                  required 
                />
              </div>
              
              <button type="submit" className="btn-primary w-full py-3 text-lg font-semibold">
                Enviar Mensagem
              </button>
            </form>
          </div>

          {/* Informações de contato */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--accent)' }}>
                Outras Formas de Contato
              </h2>
              
              <div className="space-y-6">
                <div className="bg-black/70 border border-green-900 rounded-xl p-6">
                  <h3 className="text-lg font-semibold mb-3 text-[var(--accent)]">📧 E-mail</h3>
                  <p className="text-neutral-200 mb-2">Para dúvidas gerais:</p>
                  <a href="mailto:contato@kowalski.com" className="text-[var(--accent)] hover:underline font-medium">
                    contato@kowalski.com
                  </a>
                  <p className="text-neutral-200 mb-2 mt-4">Para suporte técnico:</p>
                  <a href="mailto:suporte@kowalski.com" className="text-[var(--accent)] hover:underline font-medium">
                    suporte@kowalski.com
                  </a>
                </div>

                <div className="bg-black/70 border border-green-900 rounded-xl p-6">
                  <h3 className="text-lg font-semibold mb-3 text-[var(--accent)]">⏰ Horário de Atendimento</h3>
                  <div className="text-neutral-200 space-y-1">
                    <p>Segunda a Sexta: 9h às 18h</p>
                    <p>Sábado: 9h às 14h</p>
                    <p>Domingo: Fechado</p>
                  </div>
                </div>

                <div className="bg-black/70 border border-green-900 rounded-xl p-6">
                  <h3 className="text-lg font-semibold mb-3 text-[var(--accent)]">⚡ Tempo de Resposta</h3>
                  <div className="text-neutral-200 space-y-1">
                    <p>E-mail: até 24 horas</p>
                    <p>Formulário: até 12 horas</p>
                    <p>Urgente: até 4 horas</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Redes sociais */}
            <div>
              <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--accent)' }}>
                Siga-nos nas Redes Sociais
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener" 
                  className="bg-black/70 border border-green-900 rounded-xl p-4 text-center hover:border-[var(--accent)] transition-colors"
                >
                  <div className="text-2xl mb-2">📸</div>
                  <div className="text-[var(--accent)] font-medium">Instagram</div>
                  <div className="text-neutral-400 text-sm">@kowalski_oficial</div>
                </a>
                
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener" 
                  className="bg-black/70 border border-green-900 rounded-xl p-4 text-center hover:border-[var(--accent)] transition-colors"
                >
                  <div className="text-2xl mb-2">🐦</div>
                  <div className="text-[var(--accent)] font-medium">Twitter</div>
                  <div className="text-neutral-400 text-sm">@kowalski_br</div>
                </a>
                
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener" 
                  className="bg-black/70 border border-green-900 rounded-xl p-4 text-center hover:border-[var(--accent)] transition-colors"
                >
                  <div className="text-2xl mb-2">📘</div>
                  <div className="text-[var(--accent)] font-medium">Facebook</div>
                  <div className="text-neutral-400 text-sm">Kowalski Oficial</div>
                </a>
              </div>
            </div>

            {/* FAQ rápido */}
            <div className="bg-gradient-to-r from-[var(--accent)]/10 to-green-800/10 border border-green-700 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4 text-[var(--accent)]">Perguntas Frequentes</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="font-medium text-white">Como rastrear meu pedido?</p>
                  <p className="text-neutral-300">Enviamos o código de rastreamento por e-mail após o envio.</p>
                </div>
                <div>
                  <p className="font-medium text-white">Qual o prazo de entrega?</p>
                  <p className="text-neutral-300">De 3 a 7 dias úteis para todo o Brasil.</p>
                </div>
                <div>
                  <p className="font-medium text-white">Posso trocar um produto?</p>
                  <p className="text-neutral-300">Sim, até 30 dias após o recebimento.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

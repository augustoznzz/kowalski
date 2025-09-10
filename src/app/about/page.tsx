import React from "react";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-background text-foreground font-sans fade-in">
      <header className="w-full flex flex-col items-center py-10">
        <h1 className="text-3xl sm:text-4xl font-bold mb-2" style={{ color: '#CDFF00' }}>
          Sobre a Kowalski
        </h1>
        <p className="text-lg text-foreground/80 mb-4 max-w-2xl text-center">
          A Kowalski nasceu com a missão de oferecer produtos genéricos de alta qualidade, com design minimalista e experiência de compra fluida. Nosso compromisso é com a excelência, transparência e satisfação do cliente.
        </p>
      </header>
      <main className="w-full max-w-3xl px-4 py-8 flex flex-col gap-8">
        <section>
          <h2 className="text-xl font-semibold mb-2">Nossa História</h2>
          <p className="text-base text-foreground/80">
            Fundada em 2025, a Kowalski surgiu da paixão por inovação e simplicidade. Acreditamos que o essencial pode ser extraordinário quando feito com cuidado e atenção aos detalhes.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-2">Missão & Valores</h2>
          <ul className="list-disc pl-6 text-base text-foreground/80">
            <li>Qualidade acima de tudo</li>
            <li>Design minimalista e funcional</li>
            <li>Atendimento transparente e humano</li>
            <li>Compromisso com a satisfação do cliente</li>
          </ul>
        </section>
      </main>
    </div>
  );
}

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-black via-neutral-900 to-black text-foreground">
      <div className="text-center px-4">
        <h1 className="text-6xl font-bold mb-4 gradient-text">404</h1>
        <h2 className="text-2xl font-semibold mb-6 text-white">Página não encontrada</h2>
        <p className="text-lg mb-8 text-neutral-300 max-w-md">
          A página que você está procurando não existe ou foi movida.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/" 
            className="btn-primary px-8 py-3"
          >
            Voltar ao Início
          </Link>
          <Link 
            href="/shop" 
            className="btn-secondary px-8 py-3"
          >
            Ver Produtos
          </Link>
        </div>
      </div>
    </div>
  );
}

# Kowalski - Loja Virtual

Este projeto é uma loja virtual moderna e minimalista, especializada em produtos genéricos de alta qualidade. Desenvolvido com Next.js, TypeScript, Tailwind CSS, internacionalização (PT-BR/EN-US), integração Stripe e Ramp Network, design responsivo e otimizado para SEO e performance.

## Funcionalidades
- Home, Shop, About Us, Contact, Product Details, Checkout
- Carrinho de compras em tempo real
- Filtros avançados de produtos (categoria e faixa de preço personalizada)
- Pagamento com Stripe e Ramp Network
- Menu hambúrguer responsivo estiloso
- Animações CSS elegantes
- Design minimalista (Verde neon #00ff88, preto e branco)
- SEO otimizado
- Performance otimizada para produção

## 🚀 Como rodar

### 1. Instalação
```bash
npm install
```

### 2. Configuração de Ambiente
```bash
# Copie o arquivo de exemplo
cp .env.example .env.local

# Edite .env.local com suas chaves reais
```

### 3. Desenvolvimento
```bash
npm run dev
```

### 4. Build para Produção
```bash
npm run build
npm start
```

## 🔐 Configuração Segura das APIs

### Desenvolvimento Local
1. Copie `.env.example` para `.env.local`
2. Configure suas chaves de **teste** do Stripe:
```env
STRIPE_SECRET_KEY=sk_test_SEU_KEY_DE_TESTE
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_SEU_KEY_DE_TESTE
```

### Deploy em Produção (Netlify)
1. **NÃO** adicione chaves reais no código
2. Configure no Netlify Dashboard:
   - Site Settings → Environment variables
   - Adicione:
     - `STRIPE_SECRET_KEY`
     - `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
     - `NEXT_PUBLIC_RAMP_API_KEY` (opcional)

### Deploy em Produção (Vercel)
1. Configure no Vercel Dashboard:
   - Project Settings → Environment Variables
   - Adicione as mesmas variáveis

## 🛡️ Segurança
- ✅ `.env.local` está no .gitignore
- ✅ Chaves secretas não estão no código
- ✅ Headers de segurança configurados
- ✅ Validação de dados na API
- ✅ HTTPS obrigatório em produção

## 📁 Estrutura do Projeto
```
src/
├── app/                 # App Router (Next.js 13+)
├── components/          # Componentes reutilizáveis
├── data/               # Dados dos produtos
└── styles/             # Estilos globais
```

## 🎨 Personalização
- Substitua imagens em `/public/`
- Edite dados dos produtos em `/src/data/products.ts`
- Customize cores em `/src/app/globals.css`
- Configure domínio em `next.config.ts`

---

# Kowalski - Modern Virtual Store

This project is a modern and minimalist virtual store, specialized in high-quality generic products. Built with Next.js, TypeScript, Tailwind CSS, Stripe and Ramp Network integration, responsive design, and SEO/performance optimization.

## Features
- Advanced product filtering (category and custom price range)
- Real-time shopping cart
- Stylish responsive hamburger menu
- Payment with Stripe and Ramp Network
- Elegant CSS animations
- Minimalist design (Neon green #00ff88, black and white)
- SEO and performance optimized

## 🚀 How to run

### 1. Installation
```bash
npm install
```

### 2. Environment Setup
```bash
# Copy example file
cp .env.example .env.local

# Edit .env.local with your real keys
```

### 3. Development
```bash
npm run dev
```

### 4. Production Build
```bash
npm run build
npm start
```

## 🔐 Secure API Configuration

### Local Development
1. Copy `.env.example` to `.env.local`
2. Configure your Stripe **test** keys:
```env
STRIPE_SECRET_KEY=sk_test_YOUR_TEST_KEY
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_YOUR_TEST_KEY
```

### Production Deploy (Netlify/Vercel)
1. **DO NOT** add real keys to code
2. Configure in hosting dashboard environment variables
3. Use production keys only in production environment

## 🛡️ Security
- ✅ `.env.local` in .gitignore
- ✅ Secret keys not in code
- ✅ Security headers configured
- ✅ API data validation
- ✅ HTTPS required in production

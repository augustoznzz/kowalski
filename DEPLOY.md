# Guia de Deploy - Kowalski

## Configuração de Variáveis de Ambiente

Para que o projeto funcione corretamente na Netlify, você precisa configurar as seguintes variáveis de ambiente no painel da Netlify:

### Obrigatórias

1. **STRIPE_SECRET_KEY**
   - Sua chave secreta do Stripe
   - Formato: `sk_live_...` (produção) ou `sk_test_...` (teste)

2. **NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY**
   - Sua chave pública do Stripe
   - Formato: `pk_live_...` (produção) ou `pk_test_...` (teste)

### Opcionais

3. **RESEND_API_KEY**
   - Chave da API do Resend para envio de e-mails
   - Se não configurada, o formulário de contato mostrará uma mensagem alternativa

4. **NEXT_PUBLIC_RAMP_API_KEY**
   - Chave da API do Ramp Network para pagamentos com cripto
   - Se não configurada, a opção de pagamento cripto não aparecerá

5. **STRIPE_WEBHOOK_SECRET**
   - Segredo do webhook do Stripe para validar eventos
   - Necessário para confirmar pagamentos automaticamente

## Como Configurar na Netlify

1. Acesse o painel da Netlify
2. Vá em **Site settings** > **Environment variables**
3. Clique em **Add a variable**
4. Adicione cada variável com seu respectivo valor

## Configuração do Build

O arquivo `netlify.toml` já está configurado corretamente com:

- Comando de build: `npm run build`
- Diretório de publicação: `.next`
- Plugin do Next.js para Netlify
- Headers de segurança

## Troubleshooting

### Erro: "Missing API key. Pass it to the constructor `new Resend("re_123")`"
- **Solução**: Configure a variável `RESEND_API_KEY` ou deixe o formulário de contato usar o fallback

### Erro: "Invalid stripe key"
- **Solução**: Verifique se `STRIPE_SECRET_KEY` e `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` estão corretas

### Build falha com "Module not found"
- **Solução**: Execute `npm install` localmente e verifique se todas as dependências estão no `package.json`

## Checklist de Deploy

- [ ] Todas as variáveis de ambiente configuradas na Netlify
- [ ] Chaves do Stripe válidas (teste ou produção)
- [ ] Build local funcionando (`npm run build`)
- [ ] Testes do formulário de contato
- [ ] Testes de pagamento Stripe
- [ ] Verificação de responsividade
- [ ] Testes de performance

## URLs Importantes

- **Stripe Dashboard**: https://dashboard.stripe.com/
- **Resend Dashboard**: https://resend.com/
- **Ramp Dashboard**: https://dashboard.ramp.network/
- **Netlify Dashboard**: https://app.netlify.com/

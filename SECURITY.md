# 🔐 Guia de Configuração Segura - Kowalski

## ⚠️ IMPORTANTE: Proteção de Chaves Sensíveis

Este documento explica como configurar as chaves de API de forma segura, evitando vazamentos de dados sensíveis.

## 🚫 O que NÃO fazer

❌ **NUNCA** faça isso:
```bash
# ERRADO - NÃO commit chaves reais no código
git add .env.local
git commit -m "Add API keys"
```

❌ **NUNCA** coloque chaves reais em:
- `netlify.toml`
- `vercel.json`
- Arquivos de configuração
- Código fonte
- README.md
- Comentários no código

## ✅ Configuração Correta

### 1. Desenvolvimento Local

```bash
# 1. Copie o arquivo de exemplo
cp .env.example .env.local

# 2. Edite .env.local (este arquivo está no .gitignore)
# Use chaves de TESTE durante desenvolvimento:
STRIPE_SECRET_KEY=sk_test_51xxxxx...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_51xxxxx...
```

### 2. Deploy no Netlify

1. **Site Dashboard** → **Site Settings** → **Environment variables**
2. Adicione cada variável:

```
Variable name: STRIPE_SECRET_KEY
Value: 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

Variable name: NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY  
Value: pk_live_51PcM6UFuXE24kn9Z7LlT1OFU8VYq6tlC9xr7gvBBghNIU2tBDvmXoGhw6CyBbd6pNNxX1tukbitK8ze73zphX5NU00gzrEepVS
```

### 3. Deploy no Vercel

1. **Project Settings** → **Environment Variables**
2. Adicione as mesmas variáveis do Netlify

### 4. Deploy em outros provedores

- **Railway:** Environment Variables
- **Heroku:** Config Vars
- **AWS:** Systems Manager Parameter Store
- **Azure:** Application Settings

## 🛡️ Checklist de Segurança

### Antes do deploy:
- [ ] `.env.local` está no .gitignore
- [ ] Nenhuma chave real está no código fonte
- [ ] Chaves configuradas no painel do hosting
- [ ] README não contém chaves sensíveis
- [ ] `netlify.toml` não contém chaves reais

### Após o deploy:
- [ ] Teste pagamento com valores baixos
- [ ] Monitore dashboard do Stripe
- [ ] Configure webhooks se necessário
- [ ] Verifique logs de erro

## 🔍 Como verificar se há vazamentos

```bash
# Buscar por chaves no código
grep -r "sk_live_" . --exclude-dir=node_modules
grep -r "pk_live_" . --exclude-dir=node_modules

# Verificar o que será commitado
git status
git diff --cached
```

## 🚨 Se uma chave vazar

1. **Revogue imediatamente** no dashboard do Stripe
2. **Gere novas chaves**
3. **Atualize nos ambientes** de produção
4. **Remova do histórico** do Git se necessário:
```bash
git filter-branch --force --index-filter 'git rm --cached --ignore-unmatch .env.local' --prune-empty --tag-name-filter cat -- --all
```

## 📞 Suporte

Se você não tem certeza sobre a configuração:
1. Use apenas chaves de teste inicialmente
2. Consulte a documentação do Stripe
3. Teste em ambiente de staging primeiro

---

**Lembre-se: Segurança não é opcional! 🔒**

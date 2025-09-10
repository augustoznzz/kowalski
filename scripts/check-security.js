#!/usr/bin/env node

/**
 * Script para verificar se as configurações estão seguras
 * Execute: node scripts/check-security.js
 */

import fs from 'fs';

function checkFile(filePath, description) {
  if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Verificar se há chaves reais no arquivo
    const hasLiveKeys = content.includes('sk_live_') || content.includes('pk_live_');
    
    if (hasLiveKeys) {
      console.error(`❌ ERRO: ${description} contém chaves reais!`);
      console.error(`   Arquivo: ${filePath}`);
      return false;
    } else {
      console.log(`✅ OK: ${description} está seguro`);
      return true;
    }
  } else {
    console.log(`ℹ️  INFO: ${description} não encontrado`);
    return true;
  }
}

function checkGitignore() {
  const gitignorePath = '.gitignore';
  if (fs.existsSync(gitignorePath)) {
    const content = fs.readFileSync(gitignorePath, 'utf8');
    if (content.includes('.env*')) {
      console.log('✅ OK: .gitignore está protegendo arquivos .env');
      return true;
    } else {
      console.error('❌ ERRO: .gitignore não está protegendo arquivos .env');
      return false;
    }
  } else {
    console.error('❌ ERRO: .gitignore não encontrado');
    return false;
  }
}

function main() {
  console.log('🔐 Verificando configurações de segurança...\n');
  
  const checks = [
    checkGitignore(),
    checkFile('netlify.toml', 'netlify.toml'),
    checkFile('vercel.json', 'vercel.json'),
    checkFile('README.md', 'README.md'),
    checkFile('.env.example', '.env.example'),
    checkFile('next.config.ts', 'next.config.ts'),
  ];

  // Verificar se .env.local existe (não deveria estar no Git)
  if (fs.existsSync('.env.local')) {
    console.log('ℹ️  INFO: .env.local encontrado (correto para desenvolvimento)');
    console.log('🔍 Verificando se está no .gitignore...');
  }

  const allPassed = checks.every(check => check);
  
  console.log('\n' + '='.repeat(50));
  
  if (allPassed) {
    console.log('🎉 TODAS as verificações passaram!');
    console.log('✅ Configuração segura para deploy');
  } else {
    console.log('🚨 FALHAS encontradas!');
    console.log('❌ Corrija os problemas antes do deploy');
    process.exit(1);
  }

  console.log('\n📖 Para mais informações, consulte SECURITY.md');
}

main();

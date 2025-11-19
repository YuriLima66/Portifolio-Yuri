# 🚀 Guia de Deploy na Vercel

Este projeto está configurado para deploy automático na Vercel.

## Método 1: Deploy via GitHub (Recomendado)

1. **Faça push do código para o GitHub:**
   ```bash
   git add .
   git commit -m "Portfólio React + TypeScript"
   git push origin main
   ```

2. **Acesse a Vercel:**
   - Vá para [vercel.com](https://vercel.com)
   - Faça login com sua conta GitHub

3. **Importe o projeto:**
   - Clique em "Add New Project"
   - Selecione o repositório `Portifolio-Yuri`
   - A Vercel detectará automaticamente as configurações do Vite

4. **Configure o projeto:**
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

5. **Deploy:**
   - Clique em "Deploy"
   - Aguarde o processo concluir
   - Seu site estará online!

## Método 2: Deploy via CLI

1. **Instale a Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Faça login:**
   ```bash
   vercel login
   ```

3. **Deploy:**
   ```bash
   vercel
   ```

4. **Para produção:**
   ```bash
   vercel --prod
   ```

## Configurações Automáticas

O arquivo `vercel.json` já está configurado com:
- ✅ Build command: `npm run build`
- ✅ Output directory: `dist`
- ✅ Framework: Vite
- ✅ Rewrites para SPA (Single Page Application)

## Variáveis de Ambiente

Atualmente não há variáveis de ambiente necessárias. Se precisar adicionar no futuro:

1. Acesse as configurações do projeto na Vercel
2. Vá em "Settings" > "Environment Variables"
3. Adicione as variáveis necessárias

## Domínio Personalizado

Para adicionar um domínio personalizado:

1. Acesse as configurações do projeto na Vercel
2. Vá em "Settings" > "Domains"
3. Adicione seu domínio
4. Siga as instruções de configuração DNS

## Atualizações Automáticas

Após o primeiro deploy, toda vez que você fizer push para a branch `main` no GitHub, a Vercel fará um novo deploy automaticamente.

---

**Pronto!** Seu portfólio estará online e atualizado automaticamente! 🎉


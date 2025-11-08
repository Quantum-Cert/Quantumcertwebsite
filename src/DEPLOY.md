# 🚀 Guia de Deploy na Vercel - QuantumCert

## Pré-requisitos

- Conta na [Vercel](https://vercel.com)
- Repositório Git (GitHub, GitLab ou Bitbucket) ou Vercel CLI instalado
- Node.js 18+ instalado localmente (para testes)

## Método 1: Deploy via GitHub (Recomendado)

### Passo 1: Preparar o Repositório

```bash
# Inicializar repositório Git (se ainda não foi feito)
git init

# Adicionar todos os arquivos
git add .

# Fazer commit
git commit -m "feat: initial commit - QuantumCert website"

# Adicionar remote do GitHub
git remote add origin https://github.com/seu-usuario/quantum-cert.git

# Push para GitHub
git push -u origin main
```

### Passo 2: Conectar com Vercel

1. Acesse [vercel.com/new](https://vercel.com/new)
2. Clique em "Import Git Repository"
3. Selecione seu repositório `quantum-cert`
4. A Vercel detectará automaticamente as configurações do Vite:
   - **Framework Preset:** Vite (detectado automaticamente)
   - **Build Command:** `npm run build` (detectado automaticamente)
   - **Output Directory:** `dist` (detectado automaticamente)
   - **Install Command:** `npm install` (detectado automaticamente)

5. **NÃO** altere nenhuma configuração - deixe os valores padrão
6. Clique em "Deploy"

### Passo 3: Configurar Domínio (Opcional)

1. Vá em "Settings" > "Domains"
2. Adicione seu domínio customizado
3. Configure os DNS records conforme instruções

## Método 2: Deploy via Vercel CLI

### Passo 1: Instalar Vercel CLI

```bash
npm install -g vercel
```

### Passo 2: Login na Vercel

```bash
vercel login
```

### Passo 3: Deploy

```bash
# Deploy em preview (para testes)
vercel

# Deploy em produção
vercel --prod
```

## Verificações Pós-Deploy

Após o deploy, verifique se:

- ✅ A tela de carregamento aparece corretamente
- ✅ O header com logo está visível
- ✅ As imagens carregam corretamente
- ✅ As animações funcionam suavemente
- ✅ O botão de Login abre a página de login
- ✅ Login com `admin@gmail.com` / `12345678` funciona
- ✅ O dashboard carrega após login
- ✅ A navegação entre páginas funciona
- ✅ O site é responsivo em mobile

## Configurações Importantes

### vercel.json

O arquivo `vercel.json` já está configurado com:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ],
  "headers": [...]
}
```

**O que isso faz:**
- `rewrites`: Garante que todas as rotas redirecionem para `index.html` (necessário para SPA)
- `headers`: Adiciona headers de segurança e otimização de cache

### Variáveis de Ambiente (se necessário)

Se você adicionar variáveis de ambiente no futuro:

1. Vá em "Settings" > "Environment Variables" no dashboard da Vercel
2. Adicione as variáveis necessárias
3. Lembre-se: apenas variáveis com prefixo `VITE_` são expostas ao client

## Otimizações Aplicadas

### Performance
- ✅ Build otimizado com Vite
- ✅ Code splitting automático
- ✅ Assets com hash para cache busting
- ✅ Lazy loading de componentes
- ✅ Imagens otimizadas do Unsplash

### SEO e Segurança
- ✅ Headers de segurança (X-Frame-Options, CSP, etc.)
- ✅ Cache otimizado para assets estáticos
- ✅ Compressão automática (Gzip/Brotli)

### Responsividade
- ✅ Design mobile-first
- ✅ Breakpoints otimizados
- ✅ Touch-friendly para dispositivos móveis

## Atualizações Futuras

Para fazer updates:

```bash
# Fazer alterações no código
git add .
git commit -m "feat: descrição da alteração"
git push

# A Vercel fará deploy automático!
```

## Monitoramento

Após o deploy, você pode:

1. **Ver Analytics:** Settings > Analytics (requer upgrade)
2. **Ver Logs:** Deployments > [sua build] > Function Logs
3. **Ver Métricas:** Overview > Web Vitals

## Domínios Sugeridos

Sugestões de domínios para o projeto:
- `quantum-cert.com`
- `quantumcert.io`
- `quantum-certification.com`
- `qcert.io`

## Troubleshooting

### Problema: Build falha

**Solução:**
```bash
# Teste o build localmente
npm run build

# Se funcionar localmente, limpe o cache da Vercel:
# Settings > General > Clear Cache
```

### Problema: Páginas retornam 404

**Solução:**
- Verifique se o `vercel.json` contém as rewrites corretas
- As rewrites já estão configuradas no arquivo

### Problema: Imagens não carregam

**Solução:**
- As imagens do Unsplash podem ter rate limiting
- Considere fazer cache local das imagens se necessário

### Problema: Performance lenta

**Solução:**
- Verifique Web Vitals no dashboard da Vercel
- Considere adicionar CDN para assets pesados
- Otimize imagens grandes

## Suporte

Se encontrar problemas:

1. Verifique os logs no dashboard da Vercel
2. Consulte [Vercel Documentation](https://vercel.com/docs)
3. Verifique [Vite Documentation](https://vitejs.dev/)

## Checklist de Deploy

Antes de fazer deploy em produção:

- [ ] Testar build localmente (`npm run build` + `npm run preview`)
- [ ] Verificar todas as páginas funcionam
- [ ] Testar login/logout
- [ ] Testar responsividade mobile
- [ ] Verificar performance (Lighthouse)
- [ ] Revisar textos e imagens
- [ ] Configurar domínio customizado
- [ ] Configurar analytics (se necessário)
- [ ] Testar em diferentes navegadores

---

✨ **Boa sorte com o deploy!** Se precisar de ajuda, consulte a documentação da Vercel ou entre em contato com o suporte.

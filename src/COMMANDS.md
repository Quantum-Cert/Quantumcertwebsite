# 📝 Comandos Úteis - QuantumCert

## Desenvolvimento

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento (http://localhost:5173)
npm run dev

# Build para produção
npm run build

# Preview do build de produção
npm run preview

# Lint do código
npm run lint
```

## Git & Versionamento

```bash
# Inicializar repositório
git init

# Ver status
git status

# Adicionar arquivos
git add .

# Commit com mensagem
git commit -m "feat: adicionar nova funcionalidade"

# Push para remoto
git push origin main

# Pull do remoto
git pull origin main

# Ver histórico
git log --oneline

# Criar nova branch
git checkout -b feature/nova-funcionalidade

# Voltar para main
git checkout main

# Merge de branch
git merge feature/nova-funcionalidade
```

## Vercel CLI

```bash
# Instalar Vercel CLI globalmente
npm install -g vercel

# Login na Vercel
vercel login

# Deploy em preview
vercel

# Deploy em produção
vercel --prod

# Ver informações do projeto
vercel inspect

# Ver logs
vercel logs

# Remover deployment
vercel remove [deployment-url]

# Listar projetos
vercel projects list

# Listar deployments
vercel list

# Baixar código de deployment
vercel pull
```

## Limpeza e Manutenção

```bash
# Remover node_modules e reinstalar
rm -rf node_modules
npm install

# Limpar cache do npm
npm cache clean --force

# Atualizar dependências (cuidado!)
npm update

# Verificar dependências desatualizadas
npm outdated

# Auditar segurança
npm audit

# Corrigir vulnerabilidades
npm audit fix
```

## Build e Testes

```bash
# Build com logs detalhados
npm run build -- --debug

# Build sem minificação (para debug)
npm run build -- --mode development

# Analisar tamanho do bundle
npm run build -- --mode production

# Verificar build localmente
npm run build && npm run preview
```

## Tailwind CSS

```bash
# Gerar tipos do Tailwind (se necessário)
npx tailwindcss init -p

# Compilar CSS manualmente
npx tailwindcss -i ./src/styles/globals.css -o ./dist/output.css
```

## TypeScript

```bash
# Verificar tipos sem fazer build
npx tsc --noEmit

# Gerar arquivos de declaração
npx tsc --declaration --emitDeclarationOnly

# Watch mode para tipos
npx tsc --watch --noEmit
```

## Utilitários

```bash
# Contar linhas de código
find ./components -name '*.tsx' -o -name '*.ts' | xargs wc -l

# Buscar em arquivos
grep -r "texto" ./components

# Encontrar arquivos grandes
find . -type f -size +1M

# Verificar espaço em disco
du -sh ./*

# Listar dependências instaladas
npm list --depth=0
```

## Troubleshooting

```bash
# Se o dev server não iniciar
killall node
npm run dev

# Se houver conflitos de porta
PORT=3000 npm run dev

# Reinstalar tudo do zero
rm -rf node_modules package-lock.json
npm install

# Limpar cache do Vite
rm -rf node_modules/.vite

# Verificar versão do Node
node -v

# Verificar versão do npm
npm -v
```

## Monitoramento

```bash
# Ver uso de memória
ps aux | grep node

# Ver processos Node rodando
ps aux | grep node

# Matar processo por porta
lsof -ti:5173 | xargs kill -9

# Monitorar tamanho dos arquivos
ls -lh dist/assets/
```

## Commits Semânticos (Conventional Commits)

Use este padrão para commits:

```bash
# Nova funcionalidade
git commit -m "feat: adicionar login com OAuth"

# Correção de bug
git commit -m "fix: corrigir erro no dashboard"

# Documentação
git commit -m "docs: atualizar README com instruções"

# Estilo (formatação, sem mudança de código)
git commit -m "style: formatar código com prettier"

# Refatoração
git commit -m "refactor: reorganizar estrutura de componentes"

# Performance
git commit -m "perf: otimizar carregamento de imagens"

# Testes
git commit -m "test: adicionar testes para HomePage"

# Build/CI
git commit -m "build: atualizar configuração do Vercel"

# Outras mudanças
git commit -m "chore: atualizar dependências"
```

## Variáveis de Ambiente

```bash
# Criar .env local
cp .env.example .env

# Editar variáveis
nano .env

# Ver variáveis (Linux/Mac)
cat .env

# Testar com variáveis customizadas
VITE_APP_NAME="Test" npm run dev
```

## Performance

```bash
# Analisar bundle com rollup-plugin-visualizer
npm install -D rollup-plugin-visualizer

# Lighthouse no terminal (requer instalação)
npx lighthouse http://localhost:5173 --view

# Verificar performance de build
time npm run build
```

## Backup

```bash
# Criar backup do projeto (excluindo node_modules)
tar -czf quantum-cert-backup-$(date +%Y%m%d).tar.gz \
  --exclude='node_modules' \
  --exclude='dist' \
  --exclude='.git' \
  .

# Restaurar backup
tar -xzf quantum-cert-backup-YYYYMMDD.tar.gz
```

## Dicas

1. **Sempre teste antes de fazer deploy:**
   ```bash
   npm run build && npm run preview
   ```

2. **Use branches para features:**
   ```bash
   git checkout -b feature/nova-pagina
   ```

3. **Commits frequentes e descritivos:**
   ```bash
   git commit -m "feat: adicionar seção de depoimentos"
   ```

4. **Mantenha dependências atualizadas:**
   ```bash
   npm outdated
   npm update
   ```

5. **Monitore o tamanho do bundle:**
   ```bash
   ls -lh dist/assets/
   ```

---

💡 **Dica:** Salve este arquivo para referência rápida!

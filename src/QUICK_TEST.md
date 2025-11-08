# ⚡ Teste Rápido Antes do Deploy

Execute estes comandos para verificar se tudo está funcionando **antes** de fazer deploy:

## 1️⃣ Instalar Dependências

```bash
npm install
```

**Resultado esperado:** Instalação sem erros

## 2️⃣ Testar Build

```bash
npm run build
```

**Resultado esperado:**
```
✓ built in Xms
✓ dist/index.html
✓ dist/assets/...
```

Se você ver a pasta `dist/` sendo criada com arquivos dentro, **está funcionando!**

## 3️⃣ Testar Preview Local

```bash
npm run preview
```

**Resultado esperado:**
```
➜  Local:   http://localhost:4173/
```

Abra o navegador em `http://localhost:4173/` e teste:
- [ ] Tela de loading aparece
- [ ] Página principal carrega
- [ ] Navegação funciona
- [ ] Login funciona (admin@gmail.com / 12345678)
- [ ] Dashboard abre após login

## 4️⃣ Verificar Estrutura Gerada

```bash
ls -la dist/
```

**Deve conter:**
```
dist/
├── index.html
├── assets/
│   ├── index-[hash].js
│   ├── index-[hash].css
│   └── ...
└── vite.svg
```

## 5️⃣ Fazer Deploy

Se todos os testes passaram, você está pronto!

### Via Git:
```bash
git add .
git commit -m "fix: adicionar configurações Vite para Vercel"
git push origin main
```

### Via Vercel CLI:
```bash
vercel --prod
```

---

## ❌ Se Algo Der Errado

### Erro: "Cannot find module"
```bash
rm -rf node_modules package-lock.json
npm install
```

### Erro: Build falha com TypeScript
```bash
npx tsc --noEmit
```
Isso mostrará os erros de TypeScript. Corrija-os antes de continuar.

### Erro: "Port 4173 already in use"
```bash
# Mate o processo na porta
npx kill-port 4173

# Ou use outra porta
npx vite preview --port 3000
```

### Build funciona mas preview não
Verifique se existe um arquivo `dist/index.html` após o build.

---

## ✅ Checklist Final

Antes de fazer deploy, certifique-se:

- [ ] `npm install` funcionou sem erros
- [ ] `npm run build` criou a pasta `dist/`
- [ ] `npm run preview` mostra o site funcionando
- [ ] Testou login e navegação
- [ ] Testou responsividade (redimensione a janela)
- [ ] Console não mostra erros críticos

**Se todos ✅, pode fazer deploy com confiança!**

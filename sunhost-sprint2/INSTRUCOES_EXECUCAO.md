# 🚀 Instruções de Execução - Sprint 2

## ⚡ Quick Start (5 minutos)

### 1. Extrair o Arquivo ZIP
```bash
unzip sunhost-sprint2-final.zip
cd sunhost-sprint2
```

### 2. Instalar Dependências
```bash
npm install
# ou
pnpm install
```

### 3. Rodar o Servidor de Desenvolvimento
```bash
npm run dev
# ou
pnpm dev
```

### 4. Abrir no Navegador
```
http://localhost:5173
```

---

## 📋 Pré-requisitos

- **Node.js** 18+ instalado ([Download](https://nodejs.org/))
- **npm** ou **pnpm** (vem com Node.js)
- **Git** (opcional, para clonar repositório)

### Verificar Instalação
```bash
node --version    # Deve ser v18 ou superior
npm --version     # Deve ser v9 ou superior
```

---

## 🎯 Funcionalidades para Testar

### 1. Navegação entre Páginas
- Clique em "Acomodações" no menu
- Clique em "Pontos Cívicos"
- Volte para "Início"

### 2. Adicionar Acomodação
1. Vá para "Acomodações"
2. Clique em "Adicionar Acomodação"
3. Preencha o formulário:
   - Título: "Casa de Praia Paradisíaca"
   - Localização: "Praia Mole, Florianópolis"
   - Preço: "350"
   - Pontos Cívicos: "75"
   - Descrição: "Casa linda com vista para o mar"
4. Clique em "Adicionar"

### 3. Testar Filtros
- Digite na busca: "Praia"
- Mude o filtro de preço para "R$ 250 - R$ 500"
- Veja os resultados atualizarem em tempo real

### 4. Testar localStorage
1. Adicione uma acomodação
2. Abra DevTools (F12)
3. Vá para Application > Local Storage
4. Veja as chaves: `sunhost_accommodations`, `sunhost_user_points`, `sunhost_points_history`
5. Recarregue a página (F5)
6. Os dados ainda estão lá! ✅

### 5. Explorar Pontos Cívicos
1. Vá para "Pontos Cívicos"
2. Veja as 4 estatísticas
3. Veja o histórico de transações
4. Clique em "Resgate 100 Pontos" (se tiver pontos suficientes)

---

## 🛠️ Comandos Úteis

### Desenvolvimento
```bash
npm run dev        # Rodar servidor de desenvolvimento
npm run build      # Build para produção
npm run preview    # Preview do build
npm run check      # Verificar tipos TypeScript
npm run format     # Formatar código
```

### Troubleshooting
```bash
# Limpar cache
rm -rf node_modules
npm install

# Limpar cache do Vite
rm -rf .vite

# Reiniciar servidor
# Ctrl + C para parar
# npm run dev para iniciar novamente
```

---

## 📁 Estrutura de Arquivos Importante

```
sunhost-sprint2/
├── client/src/
│   ├── pages/
│   │   ├── Home.tsx                    # Página inicial
│   │   ├── Accommodations.tsx          # Listagem de acomodações
│   │   └── CivicPoints.tsx             # Dashboard de pontos
│   ├── components/
│   │   ├── Header.tsx                  # Navegação
│   │   ├── AccommodationListItem.jsx   # Componente reutilizável
│   │   ├── CivicPointsCard.jsx         # Componente reutilizável
│   │   └── modals/
│   │       └── AddAccommodationModal.tsx # Formulário
│   └── App.tsx                         # Rotas
├── README_SPRINT2.md                   # Documentação completa
├── GUIA_APRESENTACAO.md                # Guia para apresentação
├── RELATORIO_SPRINT2.md                # Relatório técnico
└── package.json                        # Dependências
```

---

## 🔍 Verificação de Funcionalidades

### Checklist de Testes
- [ ] Página Home carrega
- [ ] Menu de navegação funciona
- [ ] Página Accommodations carrega
- [ ] Adicionar acomodação funciona
- [ ] Filtro de preço funciona
- [ ] Busca por nome funciona
- [ ] Remoção de acomodação funciona
- [ ] Página CivicPoints carrega
- [ ] Histórico de pontos aparece
- [ ] Botão de resgate funciona
- [ ] localStorage persiste dados
- [ ] App é responsivo (mobile/tablet/desktop)

---

## 🐛 Problemas Comuns

### Problema: "npm: command not found"
**Solução:** Instale Node.js em https://nodejs.org/

### Problema: "Port 5173 is already in use"
**Solução:** 
```bash
# Mude a porta no vite.config.ts ou use:
npm run dev -- --port 3000
```

### Problema: "Module not found"
**Solução:**
```bash
rm -rf node_modules
npm install
```

### Problema: "Componentes não aparecem"
**Solução:**
1. Limpe o cache do navegador (Ctrl + Shift + Delete)
2. Recarregue a página (Ctrl + R)
3. Reinicie o servidor (Ctrl + C e npm run dev)

### Problema: "localStorage não funciona"
**Solução:**
1. Verifique se o navegador permite localStorage
2. Abra DevTools (F12) e vá para Application > Local Storage
3. Verifique se as chaves estão sendo criadas

---

## 📱 Testar Responsividade

### No Navegador (DevTools)
1. Abra DevTools (F12)
2. Clique no ícone de dispositivo (Ctrl + Shift + M)
3. Selecione diferentes tamanhos de tela

### Tamanhos para Testar
- **Mobile**: 320px (iPhone SE)
- **Mobile**: 375px (iPhone 12)
- **Tablet**: 768px (iPad)
- **Desktop**: 1024px+

---

## 🎬 Preparação para Apresentação

### Antes de Apresentar
1. Teste todas as funcionalidades
2. Prepare dados de teste
3. Abra o VS Code com o código
4. Abra DevTools para mostrar localStorage
5. Pratique a apresentação

### Dados de Teste Recomendados
```
Título: Casa de Praia Paradisíaca
Localização: Praia Mole, Florianópolis
Preço: 350
Pontos Cívicos: 75
Descrição: Casa linda com vista para o mar
```

---

## 📚 Documentação Adicional

- **README_SPRINT2.md** - Documentação completa do projeto
- **GUIA_APRESENTACAO.md** - Guia detalhado para apresentação oral
- **RELATORIO_SPRINT2.md** - Relatório técnico com detalhes de implementação

---

## ✅ Checklist Final

- [ ] Projeto extraído
- [ ] Dependências instaladas
- [ ] Servidor rodando em http://localhost:5173
- [ ] Todas as páginas carregam
- [ ] Formulário funciona
- [ ] localStorage persiste dados
- [ ] Responsividade testada
- [ ] Documentação lida
- [ ] Pronto para apresentação

---

**Boa sorte! 🚀**

Se tiver dúvidas, consulte os arquivos de documentação inclusos no projeto.

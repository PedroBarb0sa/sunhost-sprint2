# SunHost Floripa - Sprint 1

## 📋 Visão Geral

**SunHost Floripa** é uma plataforma de hospedagem comunitária que conecta hóspedes e anfitriões em Florianópolis. O diferencial é o sistema de **Pontos Cívicos**, que transforma cada estadia em uma contribuição para a comunidade local.

Este é o projeto da **Sprint 1 (N1)** - Pré-Projeto, desenvolvido em React com Vite, TypeScript e Tailwind CSS.

---

## 🎯 Objetivo da Sprint 1

Criar um aplicativo React inicial que demonstre:

- ✅ **Componentes React funcionando** (Header, Cards, Modais)
- ✅ **Estados e Eventos** (modais de login/cadastro, toggle de favoritos, seleção de acomodação)
- ✅ **Validação de Formulários** (email, senha, confirmação)
- ✅ **Design Responsivo** (mobile, tablet, desktop)
- ✅ **Proposta de Valor Clara** (Pontos Cívicos)

---

## 🚀 Como Executar

### Pré-requisitos

- Node.js 18+ instalado
- npm ou pnpm

### Instalação e Execução

```bash
# 1. Instalar dependências
npm install

# 2. Rodar o servidor de desenvolvimento
npm run dev

# 3. Abrir no navegador
# O servidor estará disponível em: http://localhost:3000
```

---

## 📁 Estrutura do Projeto

```
client/
├── src/
│   ├── pages/
│   │   ├── Home.tsx           # Página principal com hero, seções e cards
│   │   └── NotFound.tsx       # Página 404
│   ├── components/
│   │   ├── Header.tsx         # Navegação e autenticação
│   │   ├── AccommodationCard.tsx # Card de acomodação
│   │   └── modals/
│   │       ├── LoginModal.tsx # Modal de login com validação
│   │       └── SignupModal.tsx # Modal de cadastro com validação
│   ├── App.tsx                # Rotas e layout principal
│   ├── main.tsx               # Entry point
│   └── index.css              # Estilos globais e tokens de design
├── index.html                 # HTML base
└── public/                    # Arquivos estáticos
```

---

## 🎨 Design e Tecnologias

### Stack Tecnológico

- **React 19** - Framework UI
- **Vite** - Build tool e dev server
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Utility-first CSS
- **shadcn/ui** - Componentes acessíveis
- **Lucide Icons** - Ícones SVG
- **Wouter** - Roteamento client-side

### Design System

- **Cores Primárias:** Laranja (#FF6B35), Branco, Cinza escuro
- **Tipografia:** Poppins (títulos), Inter (corpo)
- **Filosofia:** Minimalismo moderno com foco em clareza

---

## ✨ Funcionalidades Implementadas

### 1. Header com Navegação
- Menu responsivo (desktop e mobile)
- Botões de Login e Cadastro
- Modais funcionais com validação

### 2. Modais de Autenticação
- **Login Modal:** Email + Senha com validação
- **Signup Modal:** Nome + Email + Senha + Confirmação com validação
- Feedback visual de sucesso
- Mensagens de erro em tempo real

### 3. Página Inicial
- **Hero Section:** Apresentação da proposta de valor
- **Seção Pontos Cívicos:** Explicação do diferencial (3 cards informativos)
- **Acomodações em Destaque:** Grid com 3 acomodações
- **Seção Seja Anfitrião:** CTA para anfitriões
- **Footer:** Links e informações

### 4. Componentes Reutilizáveis
- **AccommodationCard:** Exibe acomodação com imagem, preço, avaliação, favoritos
- **Interatividade:** Toggle de favoritos, seleção de card com feedback visual

### 5. Estados e Eventos
- Modais abrem/fecham com clique
- Validação de formulários com feedback
- Toggle de favoritos em cards
- Seleção de acomodação com destaque visual
- Responsividade em todos os tamanhos

---

## 🔍 Demonstração de Conceitos React

### Estados (useState)
```typescript
// Exemplo: Modal aberto/fechado
const [loginOpen, setLoginOpen] = useState(false);

// Exemplo: Validação de formulário
const [errors, setErrors] = useState<{ email?: string }>();

// Exemplo: Seleção de acomodação
const [selectedAccommodation, setSelectedAccommodation] = useState<number | null>(null);
```

### Eventos
```typescript
// Clique para abrir modal
onClick={() => setLoginOpen(true)}

// Submit de formulário com validação
onSubmit={handleSubmit}

// Toggle de favoritos
onClick={(e) => {
  e.stopPropagation();
  setIsFavorite(!isFavorite);
}}
```

### Componentes
- Header com props de controle de modais
- AccommodationCard com props de dados
- Modais como componentes reutilizáveis

---

## 📝 Validações Implementadas

### Login
- Email deve ser válido (formato: user@domain.com)
- Senha deve ter mínimo 8 caracteres
- Feedback visual de erro

### Cadastro
- Nome deve ter mínimo 3 caracteres
- Email deve ser válido
- Senha deve ter mínimo 8 caracteres
- Confirmação de senha deve coincidir
- Feedback visual de sucesso

---

## 🎬 Próximas Etapas (Sprint 2+)

- [ ] Página de resultados com filtros
- [ ] Página de detalhes de acomodação
- [ ] Formulário multi-etapas para anfitriões
- [ ] Integração com localStorage
- [ ] Múltiplas páginas com roteamento
- [ ] Consumo de API RESTful

---

## 📊 Critérios de Avaliação (Sprint 1)

| Critério | Peso | Status |
|----------|------|--------|
| Clareza e viabilidade da ideia (Canvas) | 20% | ✅ |
| Aplicação React com Vite rodando | 25% | ✅ |
| Componentes, estados e eventos | 30% | ✅ |
| Repositório, README e commits | 10% | ✅ |
| Apresentação oral | 15% | 📋 |

---

## 🛠️ Desenvolvimento

### Instalar nova dependência
```bash
npm install <package-name>
```

### Build para produção
```bash
npm run build
```

### Verificar tipos TypeScript
```bash
npm run check
```

### Formatar código
```bash
npm run format
```

---

## 📞 Suporte

Para dúvidas sobre o projeto, consulte:
- Documentação do React: https://react.dev
- Tailwind CSS: https://tailwindcss.com
- Vite: https://vitejs.dev

---

## 📄 Licença

MIT License - 2026

---

**Versão:** 1.0.0 (Sprint 1)  
**Data:** Abril de 2026  
**Status:** ✅ Concluído e pronto para apresentação

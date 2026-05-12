# SunHost Floripa - Relatório Sprint 1 (N1)

**Pré-Projeto: Aplicativo React Inicial com Componentes, Estados e Eventos**

---

## 📋 Informações Gerais

| Item | Descrição |
|------|-----------|
| **Projeto** | SunHost Floripa |
| **Sprint** | Sprint 1 (N1) - Pré-Projeto |
| **Data** | Abril de 2026 |
| **Status** | ✅ Concluído |
| **Tecnologia** | React 19 + Vite + TypeScript + Tailwind CSS |

---

## 🎯 Problema e Oportunidade

### Problema Identificado

Florianópolis é um destino turístico de excelência, mas o turismo tradicional não gera impacto direto na comunidade local. Hóspedes e anfitriões não têm uma forma tangível de contribuir para projetos sociais durante suas estadias.

### Oportunidade

Criar uma plataforma de hospedagem que não apenas conecte viajantes com anfitriões, mas que transforme cada reserva em uma contribuição comunitária através de um sistema inovador de **Pontos Cívicos**.

---

## 💡 Proposta de Valor (Canvas)

### Segmentos de Clientes

| Segmento | Descrição |
|----------|-----------|
| **Hóspedes** | Viajantes que buscam hospedagem autêntica e desejam impacto social |
| **Anfitriões** | Proprietários locais que querem gerar renda e contribuir para comunidade |
| **Comunidade** | Organizações sociais que se beneficiam dos Pontos Cívicos |

### Proposta de Valor Única

**"Hospedagem com Propósito"** - Cada noite hospedada gera Pontos Cívicos que transformam turismo em impacto comunitário. Hóspedes ganham benefícios, anfitriões geram renda, e a comunidade local se fortalece.

### Canais de Distribuição

- Plataforma web (SunHost Floripa)
- Redes sociais e marketing digital
- Parcerias com agências de turismo locais
- Boca a boca (comunidade)

### Fluxo de Receita

- Comissão sobre reservas (10-15%)
- Taxas de serviço do hóspede
- Parcerias com negócios locais

### Recursos-Chave

- Plataforma web escalável em React
- Sistema de Pontos Cívicos
- Base de dados de acomodações
- Integração com pagamentos

### Atividades-Chave

- Desenvolvimento e manutenção da plataforma
- Onboarding de anfitriões
- Marketing e aquisição de hóspedes
- Gestão de Pontos Cívicos

### Parcerias

- Organizações sociais locais
- Negócios de turismo em Florianópolis
- Instituições financeiras (para pagamentos)

### Estrutura de Custos

- Infraestrutura de hosting
- Desenvolvimento e manutenção
- Marketing e aquisição
- Suporte ao cliente

---

## 🏗️ Arquitetura Técnica

### Stack Tecnológico

| Camada | Tecnologia | Justificativa |
|--------|-----------|---------------|
| **Frontend** | React 19 + Vite | Performance, desenvolvimento rápido, hot reload |
| **Linguagem** | TypeScript | Type safety, melhor manutenibilidade |
| **Estilização** | Tailwind CSS 4 | Utility-first, responsividade, velocidade |
| **Componentes** | shadcn/ui | Acessibilidade, design system consistente |
| **Roteamento** | Wouter | Leve, client-side routing |
| **Ícones** | Lucide Icons | SVG, customizáveis, modernas |

### Estrutura de Pastas

```
client/
├── src/
│   ├── pages/           # Páginas da aplicação
│   ├── components/      # Componentes reutilizáveis
│   ├── contexts/        # React Contexts
│   ├── hooks/           # Custom hooks
│   ├── lib/             # Utilitários
│   ├── App.tsx          # Rotas principais
│   ├── main.tsx         # Entry point
│   └── index.css        # Estilos globais
├── public/              # Arquivos estáticos
└── index.html           # HTML base
```

---

## ✨ Funcionalidades Implementadas - Sprint 1

### 1. Header com Navegação Responsiva

**Componente:** `Header.tsx`

Funcionalidades:
- Menu desktop com links de navegação
- Menu mobile colapsável com hamburger
- Botões de Login e Cadastro
- Integração com modais de autenticação
- Design responsivo (mobile, tablet, desktop)

**Estados:**
- `mobileMenuOpen` - Controla abertura/fechamento do menu mobile
- `loginOpen` - Controla modal de login
- `signupOpen` - Controla modal de cadastro

**Eventos:**
- Click em botões de autenticação
- Click no hamburger para abrir/fechar menu
- Navegação suave entre seções

### 2. Modal de Login

**Componente:** `LoginModal.tsx`

Funcionalidades:
- Validação de email (formato válido)
- Validação de senha (mínimo 8 caracteres)
- Feedback visual de erros em tempo real
- Mensagem de sucesso com feedback visual
- Limpeza automática do formulário

**Estados:**
- `email` - Email do usuário
- `password` - Senha do usuário
- `errors` - Objeto com erros de validação
- `submitted` - Flag para mostrar mensagem de sucesso

**Validações:**
```typescript
- Email: Deve ter formato válido (user@domain.com)
- Senha: Mínimo 8 caracteres
```

### 3. Modal de Cadastro

**Componente:** `SignupModal.tsx`

Funcionalidades:
- Validação de nome (mínimo 3 caracteres)
- Validação de email
- Validação de senha (mínimo 8 caracteres)
- Confirmação de senha (deve coincidir)
- Feedback visual de erros em tempo real
- Mensagem de sucesso

**Estados:**
- `name` - Nome do usuário
- `email` - Email do usuário
- `password` - Senha do usuário
- `confirmPassword` - Confirmação de senha
- `errors` - Objeto com erros de validação
- `submitted` - Flag para mostrar mensagem de sucesso

**Validações:**
```typescript
- Nome: Mínimo 3 caracteres
- Email: Formato válido
- Senha: Mínimo 8 caracteres
- Confirmação: Deve coincidir com senha
```

### 4. Card de Acomodação

**Componente:** `AccommodationCard.tsx`

Funcionalidades:
- Exibição de imagem com efeito hover (zoom)
- Badge de destaque (Popular, Novo)
- Toggle de favoritos com ícone animado
- Informações de preço, avaliação e localização
- Design responsivo com sombra dinâmica

**Estados:**
- `isFavorite` - Controla se acomodação está nos favoritos

**Eventos:**
- Click em favorito com preventDefault
- Hover com efeito visual

### 5. Página Inicial (Home)

**Componente:** `Home.tsx`

Seções:
- **Hero Section:** Apresentação da proposta com CTA
- **Civic Points Section:** 3 cards explicando o diferencial
- **Featured Accommodations:** Grid com 3 acomodações em destaque
- **Host Section:** CTA para anfitriões
- **Footer:** Links e informações

**Estados:**
- `selectedAccommodation` - ID da acomodação selecionada

**Eventos:**
- Click em acomodação para selecionar
- Click em botões de ação
- Navegação por âncoras

**Dados Mock:**
- 3 acomodações com informações completas
- Imagens de alta qualidade
- Avaliações e preços realistas

---

## 🎨 Design System

### Paleta de Cores

| Cor | Valor | Uso |
|-----|-------|-----|
| **Laranja Primária** | #FF6B35 | Botões, links, accents |
| **Branco** | #FFFFFF | Background principal |
| **Cinza Escuro** | #2C3E50 | Texto principal |
| **Cinza Claro** | #E8EAED | Borders, backgrounds suaves |

### Tipografia

| Elemento | Fonte | Peso | Tamanho |
|----------|-------|------|---------|
| **Títulos Principais** | Poppins | 700 | 48-60px |
| **Subtítulos** | Poppins | 600 | 24-32px |
| **Corpo** | Inter | 400 | 16px |
| **Labels** | Inter | 500 | 12-14px |

### Componentes Visuais

- **Border Radius:** 8px (cards), 4px (inputs)
- **Sombras:** Sutil (0 2px 4px rgba(0,0,0,0.1))
- **Transições:** 300ms ease-in-out
- **Espaçamento:** Sistema de 8px (8, 16, 24, 32, 64px)

---

## 📊 Demonstração de Conceitos React

### Estados (useState)

```typescript
// Exemplo 1: Controle de modal
const [loginOpen, setLoginOpen] = useState(false);

// Exemplo 2: Validação de formulário
const [errors, setErrors] = useState<{ email?: string }>();

// Exemplo 3: Seleção de item
const [selectedAccommodation, setSelectedAccommodation] = useState<number | null>(null);

// Exemplo 4: Toggle de favorito
const [isFavorite, setIsFavorite] = useState(false);
```

### Eventos

```typescript
// Evento de clique
onClick={() => setLoginOpen(true)}

// Evento de submit com validação
onSubmit={(e) => {
  e.preventDefault();
  // validação...
}}

// Evento com preventDefault
onClick={(e) => {
  e.stopPropagation();
  setIsFavorite(!isFavorite);
}}

// Evento com mudança de valor
onChange={(e) => setEmail(e.target.value)}
```

### Componentes Reutilizáveis

```typescript
// AccommodationCard recebe props
<AccommodationCard
  id={1}
  title="Apartamento Vista Mar"
  location="Lagoa da Conceição"
  price={280}
  rating={4.8}
  reviews={24}
  image="..."
  badge="Popular"
  onClick={() => setSelectedAccommodation(1)}
/>
```

---

## ✅ Critérios de Avaliação - Sprint 1

| Critério | Peso | Implementação | Status |
|----------|------|----------------|--------|
| **Clareza e viabilidade da ideia (Canvas)** | 20% | Canvas completo com problema, oportunidade e proposta de valor | ✅ |
| **Aplicação React criada com Vite e rodando** | 25% | React 19 + Vite + TypeScript + Tailwind CSS | ✅ |
| **Componentes, estados e eventos** | 30% | 5 componentes com múltiplos estados e eventos funcionando | ✅ |
| **Repositório, README e commits** | 10% | README detalhado, estrutura clara | ✅ |
| **Apresentação oral** | 15% | Pronto para apresentar | 📋 |

---

## 🚀 Como Executar

### Pré-requisitos

- Node.js 18+
- npm ou pnpm

### Instalação

```bash
# Instalar dependências
npm install

# Rodar servidor de desenvolvimento
npm run dev

# Abrir em: http://localhost:3000
```

### Verificar Tipos

```bash
npm run check
```

### Build para Produção

```bash
npm run build
```

---

## 🎬 Próximas Etapas - Sprint 2

- [ ] Página de resultados com filtros avançados
- [ ] Página de detalhes de acomodação
- [ ] Formulário multi-etapas para cadastro de anfitriões
- [ ] Integração com localStorage para persistência
- [ ] Múltiplas páginas com roteamento completo
- [ ] Navegação entre páginas funcional

---

## 📝 Notas Importantes

### Validações Implementadas

**Login:**
- Email deve ser válido (formato: user@domain.com)
- Senha deve ter mínimo 8 caracteres
- Feedback visual de erro em tempo real

**Cadastro:**
- Nome deve ter mínimo 3 caracteres
- Email deve ser válido
- Senha deve ter mínimo 8 caracteres
- Confirmação de senha deve coincidir
- Feedback visual de sucesso

### Responsividade

- Mobile: Otimizado para telas até 640px
- Tablet: Layout adaptado para 641-1024px
- Desktop: Experiência completa acima de 1024px

### Performance

- Componentes otimizados com React 19
- Vite para build rápido
- Tailwind CSS para CSS otimizado
- Imagens em WebP comprimidas

---

## 📚 Referências Técnicas

- React Documentation: https://react.dev
- Vite Guide: https://vitejs.dev
- Tailwind CSS: https://tailwindcss.com
- TypeScript Handbook: https://www.typescriptlang.org/docs

---

## ✍️ Conclusão

A Sprint 1 foi concluída com sucesso. O projeto demonstra claramente:

1. **Componentes React funcionando** com estados e eventos
2. **Validação de formulários** com feedback visual
3. **Design responsivo** e moderno
4. **Proposta de valor clara** (Pontos Cívicos)
5. **Código limpo e bem estruturado** pronto para evolução

O projeto está pronto para apresentação e para evolução nas próximas sprints.

---

**Data de Conclusão:** Abril de 2026  
**Versão:** 1.0.0  
**Status:** ✅ Pronto para Apresentação

# SunHost Floripa - Sprint 1: Design Brainstorm

## Análise de Requisitos

**Projeto:** Plataforma de hospedagem comunitária em Florianópolis com sistema de Pontos Cívicos  
**Objetivo Sprint 1:** Criar aplicativo React inicial com componentes, estados e eventos  
**Público-alvo:** Hóspedes e anfitriões em Florianópolis  
**Proposta de valor:** Conexão entre viajantes e anfitriões locais com benefício comunitário

---

## Resposta 1: Abordagem Moderna & Minimalista

<response>
<text>
**Design Movement:** Contemporary Minimalism com toques de Warmth

**Core Principles:**
- Simplicidade radical: remover tudo que não é essencial
- Espaço em branco estratégico para criar respiração visual
- Tipografia limpa e hierarquia clara
- Cores neutras com accent em laranja quente (representando o sol de Florianópolis)

**Color Philosophy:**
- Primária: Branco/Off-white (#FAFAFA) - pureza e confiança
- Secundária: Cinza escuro (#2C3E50) - texto legível e profissionalismo
- Accent: Laranja vibrante (#FF6B35) - energia, calor, comunidade
- Neutro: Cinza claro (#E8EAED) - divisores e backgrounds suaves

**Layout Paradigm:**
- Grid assimétrico com coluna de conteúdo principal (2/3) e sidebar (1/3)
- Seções com padding generoso (64px vertical)
- Cards com sombra sutil e border-radius mínimo (4px)
- Hero section com imagem de fundo em paralax

**Signature Elements:**
- Ícones de comunidade (pessoas, casas, pontos)
- Badges de "Pontos Cívicos" com design geométrico
- Linhas decorativas horizontais que dividem seções

**Interaction Philosophy:**
- Transições suaves (300ms) em hover
- Botões com efeito de elevação ao passar mouse
- Modais com backdrop blur
- Scroll revelando elementos com fade-in

**Animation:**
- Fade-in ao carregar página (200ms)
- Hover em cards: translateY(-4px) + shadow increase
- Botões: background color transition + scale(1.02)
- Modais: scale(0.95) → scale(1) com opacity fade

**Typography System:**
- Display: Poppins Bold (32px) para títulos principais
- Heading: Inter SemiBold (24px) para subtítulos
- Body: Inter Regular (16px) para conteúdo
- Caption: Inter Regular (12px) para labels

</text>
<probability>0.08</probability>
</response>

---

## Resposta 2: Abordagem Playful & Vibrant

<response>
<text>
**Design Movement:** Contemporary Playful com influência de Design Brasileiro

**Core Principles:**
- Cores vibrantes e contrastantes que refletem a energia de Florianópolis
- Formas arredondadas e amigáveis (border-radius 12-16px)
- Ilustrações customizadas e personagens
- Tipografia bold e expressiva

**Color Philosophy:**
- Primária: Azul turquesa (#0EA5E9) - mar, céu de Florianópolis
- Secundária: Laranja coral (#FF6B35) - sol tropical
- Terciária: Verde menta (#10B981) - natureza, sustentabilidade
- Neutro: Branco com toque de azul claro (#F0F9FF)

**Layout Paradigm:**
- Seções com onda/curva na transição (SVG dividers)
- Cards com gradiente sutil de fundo
- Imagens com border-radius 16px
- Hero section com ilustração estilizada

**Signature Elements:**
- Onda decorativa (representando praia)
- Ícones customizados com estilo playful
- Badges com gradiente (Pontos Cívicos)
- Ilustrações de pessoas e casas em estilo flat

**Interaction Philosophy:**
- Animações mais lúdicas e expressivas
- Micro-interações com feedback visual claro
- Hover effects coloridos
- Celebração de ações (confetti em cadastro)

**Animation:**
- Bounce effect em botões (cubic-bezier)
- Onda SVG animada na transição de seções
- Cards com rotate suave + scale no hover
- Contador de Pontos Cívicos com animação de número

**Typography System:**
- Display: Fredoka Bold (36px) para títulos
- Heading: Fredoka SemiBold (24px)
- Body: Poppins Regular (16px)
- Caption: Poppins Regular (12px)

</text>
<probability>0.07</probability>
</response>

---

## Resposta 3: Abordagem Elegante & Premium

<response>
<text>
**Design Movement:** Luxury Minimalism com toque de Sofisticação

**Core Principles:**
- Elegância através de espaço e tipografia refinada
- Paleta restrita com uso estratégico de cores
- Detalhes sutis que revelam qualidade (gradientes, texturas)
- Hierarquia visual clara e intuitiva

**Color Philosophy:**
- Primária: Azul profundo (#1E3A5F) - confiança, sofisticação
- Secundária: Ouro/Âmbar (#D4AF37) - luxo, comunidade valorizada
- Accent: Branco (#FFFFFF) - clareza
- Neutro: Cinza quente (#8B8680) - elegância

**Layout Paradigm:**
- Seções com alinhamento vertical centrado
- Espaçamento generoso (80px entre seções)
- Cards com border sutil (1px) ao invés de sombra
- Tipografia grande e espaçada

**Signature Elements:**
- Linhas decorativas em ouro
- Ícones minimalistas e refinados
- Badges com borda em ouro
- Tipografia serif para títulos principais

**Interaction Philosophy:**
- Transições lentas e suaves (400ms)
- Hover effects sutis (opacity, border color)
- Modais com animação elegante (slide up)
- Feedback visual discreto

**Animation:**
- Fade-in lento ao carregar (400ms)
- Hover: opacity 0.8 + border color change
- Botões: subtle glow effect
- Scroll: elementos aparecem com fade + translateY

**Typography System:**
- Display: Playfair Display Bold (40px) para títulos
- Heading: Montserrat SemiBold (24px)
- Body: Lato Regular (16px)
- Caption: Lato Regular (12px)

</text>
<probability>0.06</probability>
</response>

---

## Decisão Final: Abordagem Selecionada

**Escolhido: Resposta 1 - Abordagem Moderna & Minimalista**

### Justificativa
- Reflete profissionalismo e confiabilidade (importante para plataforma de hospedagem)
- Laranja vibrante conecta com identidade visual de Florianópolis (sol, praia, energia)
- Minimalismo permite foco na funcionalidade e conteúdo
- Escalável e acessível para futuras sprints
- Alinha com tendências atuais de design de plataformas de marketplace

### Implementação
- **Cores:** Branco (#FAFAFA), Cinza escuro (#2C3E50), Laranja (#FF6B35), Cinza claro (#E8EAED)
- **Tipografia:** Poppins para display, Inter para body
- **Componentes:** Cards com sombra sutil, botões com hover elevation, modais com backdrop blur
- **Animações:** Transições suaves 300ms, fade-in ao carregar, hover effects com translateY

---

## Estrutura de Páginas (Sprint 1)

1. **Home** - Página inicial com hero, apresentação, destaques
2. **Resultados** - Listagem de acomodações com filtros
3. **Detalhes** - Página de acomodação individual
4. **Seja Anfitrião** - Formulário multi-etapas para cadastro
5. **Modais** - Login, Cadastro (globais)

---

## Componentes Principais

- Header com navegação
- Hero section
- Card de acomodação
- Filtros
- Formulário multi-etapas
- Modais de autenticação
- Footer

---

## Próximas Ações

1. Configurar tipografia (Poppins + Inter via Google Fonts)
2. Definir tokens de cor em `index.css`
3. Criar componentes base (Button, Card, Modal)
4. Implementar páginas
5. Adicionar interatividade com React hooks

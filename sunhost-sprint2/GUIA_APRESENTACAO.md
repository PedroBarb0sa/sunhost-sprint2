# 🎤 Guia de Apresentação Oral - Sprint 2 (N2)

## ⏱️ Duração Total: 10 minutos

### Distribuição de Tempo
- **Slide 1**: 1 minuto
- **Slide 2**: 2 minutos
- **Slide 3**: 2 minutos
- **Slide 4 (Demonstração)**: 4 minutos
- **Slide 5**: 1 minuto

---

## 📊 Estrutura da Apresentação

### SLIDE 1: INTRODUÇÃO (1 min)

**O que mostrar:**
- Título: "SunHost Floripa - Sprint 2"
- Subtítulo: "Mini Aplicativo React com Funcionalidades Avançadas"
- Nomes dos integrantes do grupo

**O que falar:**
> "Olá, somos o grupo [nomes]. Nesta Sprint 2, desenvolvemos um mini aplicativo React chamado SunHost Floripa. Este é um aplicativo de hospedagem comunitária que conecta hóspedes e anfitriões em Florianópolis, com um diferencial: o sistema de Pontos Cívicos que transforma cada estadia em uma contribuição para a comunidade local."

---

### SLIDE 2: ORGANIZAÇÃO DOS COMPONENTES (2 min)

**O que mostrar:**
```
Estrutura do Projeto:
├── pages/
│   ├── Home.tsx
│   ├── Accommodations.tsx (NOVO)
│   ├── CivicPoints.tsx (NOVO)
│   └── NotFound.tsx
├── components/
│   ├── Header.tsx (atualizado)
│   ├── AccommodationListItem.jsx (NOVO)
│   ├── CivicPointsCard.jsx (NOVO)
│   ├── modals/
│   │   └── AddAccommodationModal.tsx (NOVO)
│   └── ui/
└── App.tsx (atualizado)
```

**O que falar:**
> "Organizamos o projeto em uma estrutura clara e escalável. Temos 3 páginas principais:
> 
> 1. **Home** - Página inicial com informações sobre a plataforma
> 2. **Accommodations** - Listagem de acomodações com filtros e busca
> 3. **CivicPoints** - Dashboard do usuário com seus pontos cívicos
>
> Criamos 2 componentes separados em arquivos .jsx:
> - **AccommodationListItem.jsx** - Exibe um item individual de acomodação
> - **CivicPointsCard.jsx** - Card reutilizável para estatísticas
>
> Também implementamos um modal para adicionar novas acomodações com validação de formulário."

**Mostrar no código (VS Code):**
- Abrir a pasta `client/src`
- Mostrar a estrutura de `pages/` e `components/`
- Clicar em `AccommodationListItem.jsx` e `CivicPointsCard.jsx`

---

### SLIDE 3: FUNCIONALIDADES IMPLEMENTADAS (2 min)

**O que mostrar:**
```
✅ Menu de Navegação (3+ páginas)
✅ Formulário Controlado com useState (5 campos)
✅ Listagem Dinâmica de Acomodações
✅ Persistência com localStorage
✅ 2+ Componentes em .jsx Separados
✅ Validação de Formulário
✅ Filtros e Busca
✅ Design Responsivo
```

**O que falar:**
> "Implementamos todas as funcionalidades obrigatórias:
>
> **1. Menu de Navegação:** O usuário pode navegar entre 3 páginas principais usando o menu no topo.
>
> **2. Formulário Controlado:** Criamos um formulário com 5 campos (Título, Localização, Preço, Pontos Cívicos, Descrição) usando useState. Cada campo é validado em tempo real.
>
> **3. Listagem Dinâmica:** As acomodações são exibidas em um grid responsivo que atualiza dinamicamente quando novos itens são adicionados ou removidos.
>
> **4. localStorage:** Todos os dados (acomodações, pontos do usuário, histórico) são salvos no localStorage do navegador. Isso significa que os dados persistem mesmo após recarregar a página.
>
> **5. Componentes Reutilizáveis:** Criamos AccommodationListItem.jsx e CivicPointsCard.jsx como componentes separados que podem ser reutilizados em diferentes partes da aplicação.
>
> **6. Extras:** Também implementamos filtros por preço, busca por nome/localização e validação completa do formulário."

---

### SLIDE 4: DEMONSTRAÇÃO DO APP RODANDO (4 min)

**Preparação antes de começar:**
```bash
npm run dev
# Abrir http://localhost:5173 no navegador
```

**Sequência de Demonstração:**

#### 1️⃣ Mostrar Navegação (30 seg)
- Clicar em "Acomodações" no menu
- Mostrar a página com acomodações listadas
- Clicar em "Pontos Cívicos"
- Mostrar o dashboard com estatísticas
- Voltar para "Início"

**O que falar:**
> "Como vocês podem ver, o menu de navegação funciona perfeitamente. Temos 3 páginas principais e o usuário pode navegar entre elas clicando nos links do menu."

#### 2️⃣ Adicionar Acomodação (1 min)
- Ir para página "Acomodações"
- Clicar no botão "Adicionar Acomodação"
- Preencher o formulário com dados de teste:
  - Título: "Casa de Praia Paradisíaca"
  - Localização: "Praia Mole, Florianópolis"
  - Preço: "350"
  - Pontos Cívicos: "75"
  - Descrição: "Casa linda com vista para o mar"
- Clicar em "Adicionar"

**O que falar:**
> "Agora vou demonstrar o formulário controlado. Vou adicionar uma nova acomodação. Como vocês podem ver, o formulário tem validação - se eu tentar enviar sem preencher os campos, ele mostra uma mensagem de erro. Vou preencher todos os campos corretamente e enviar."

#### 3️⃣ Demonstrar Filtros e Busca (1 min)
- Digitar na busca: "Praia"
- Mostrar que filtra as acomodações
- Mudar o filtro de preço para "R$ 250 - R$ 500"
- Mostrar que filtra corretamente

**O que falar:**
> "O aplicativo também tem filtros e busca. Vou buscar por 'Praia' e vocês podem ver que apenas as acomodações com 'Praia' no nome ou localização aparecem. Também temos um filtro por faixa de preço que funciona em tempo real."

#### 4️⃣ Demonstrar localStorage (1 min)
- Abrir o DevTools (F12)
- Ir para Application > Local Storage
- Mostrar as chaves: `sunhost_accommodations`, `sunhost_user_points`, `sunhost_points_history`
- Recarregar a página (F5)
- Mostrar que os dados ainda estão lá

**O que falar:**
> "A funcionalidade mais importante é a persistência com localStorage. Vocês podem ver aqui no DevTools que os dados são salvos no localStorage do navegador. Se eu recarregar a página, os dados não são perdidos - eles permanecem salvos."

#### 5️⃣ Mostrar Página de Pontos Cívicos (30 seg)
- Ir para "Pontos Cívicos"
- Mostrar as 4 estatísticas
- Mostrar o histórico de transações
- Mostrar o botão de resgate

**O que falar:**
> "Na página de Pontos Cívicos, o usuário pode ver suas estatísticas, histórico de transações e até resgatar pontos para desconto."

---

### SLIDE 5: DIFICULDADES E APRENDIZADOS (1 min)

**O que mostrar:**
```
Dificuldades Encontradas:
- Gerenciamento de estado com múltiplos componentes
- Sincronização com localStorage
- Validação de formulário em tempo real

Soluções Implementadas:
- Uso eficiente de useState
- Efeitos colaterais com useEffect
- Tratamento de erros com feedback visual

Aprendizados:
- React Hooks (useState, useEffect)
- localStorage API
- Validação de formulários
- Componentes reutilizáveis
- Roteamento com Wouter
```

**O que falar:**
> "Durante o desenvolvimento, encontramos alguns desafios interessantes:
>
> **Dificuldade 1:** Gerenciar o estado de múltiplos componentes. Resolvemos usando useState de forma eficiente e passando props entre componentes.
>
> **Dificuldade 2:** Sincronizar os dados com localStorage. Aprendemos a usar useEffect para carregar dados ao montar o componente e atualizar localStorage sempre que os dados mudam.
>
> **Dificuldade 3:** Validação de formulário em tempo real. Implementamos um sistema de validação que mostra erros conforme o usuário digita.
>
> **Aprendizados:** Consolidamos nosso conhecimento em React Hooks, localStorage, validação de formulários e criação de componentes reutilizáveis. Também aprendemos a usar Wouter para roteamento client-side."

---

## 🎬 Dicas para a Apresentação

### ✅ O que Fazer
- ✅ Falar de forma clara e confiante
- ✅ Fazer contato visual com a plateia
- ✅ Demonstrar o app funcionando
- ✅ Responder perguntas com segurança
- ✅ Ter o código aberto para mostrar detalhes
- ✅ Testar tudo antes de apresentar

### ❌ O que Evitar
- ❌ Ler direto do slide
- ❌ Falar muito rápido
- ❌ Deixar o app com erro
- ❌ Ficar em silêncio
- ❌ Mostrar código muito complexo
- ❌ Exceder o tempo de 10 minutos

---

## 🔧 Checklist Antes da Apresentação

- [ ] Testar o app localmente (`npm run dev`)
- [ ] Verificar se todas as funcionalidades funcionam
- [ ] Preparar dados de teste para o formulário
- [ ] Abrir DevTools para mostrar localStorage
- [ ] Ter o código aberto no VS Code
- [ ] Testar a navegação entre páginas
- [ ] Verificar se o app é responsivo
- [ ] Praticar a apresentação em voz alta
- [ ] Cronometrar para não exceder 10 minutos
- [ ] Ter um backup do projeto

---

## 📱 Dados de Teste para Demonstração

### Acomodação 1
- Título: Casa de Praia Paradisíaca
- Localização: Praia Mole, Florianópolis
- Preço: 350
- Pontos Cívicos: 75
- Descrição: Casa linda com vista para o mar

### Acomodação 2
- Título: Apartamento Centro Histórico
- Localização: Centro, Florianópolis
- Preço: 180
- Pontos Cívicos: 40
- Descrição: Apartamento aconchegante no coração da cidade

---

## 🎯 Perguntas Esperadas e Respostas

**P: Como funciona o localStorage?**
> R: localStorage é uma API do navegador que permite salvar dados em formato chave-valor. Os dados persistem mesmo após fechar o navegador. Usamos JSON.stringify() para salvar e JSON.parse() para recuperar.

**P: Por que usar useState?**
> R: useState permite gerenciar o estado de componentes React. Sempre que o estado muda, o componente é re-renderizado com os novos dados.

**P: Como validar o formulário?**
> R: Implementamos uma função validateForm() que verifica cada campo antes de enviar. Se houver erros, mostramos mensagens em tempo real.

**P: Qual é a diferença entre os componentes .tsx e .jsx?**
> R: .tsx é TypeScript com JSX, .jsx é JavaScript com JSX. Ambos funcionam, mas .tsx oferece type safety.

---

## ⏰ Cronômetro Mental

- **0:00-1:00** → Slide 1 (Introdução)
- **1:00-3:00** → Slide 2 (Componentes)
- **3:00-5:00** → Slide 3 (Funcionalidades)
- **5:00-9:00** → Slide 4 (Demonstração)
- **9:00-10:00** → Slide 5 (Dificuldades)

---

**Boa sorte na apresentação! 🚀**

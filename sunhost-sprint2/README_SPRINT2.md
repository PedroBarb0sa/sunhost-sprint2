# SunHost Floripa - Sprint 2 (N2)

## 📋 Visão Geral

**SunHost Floripa Sprint 2** é a evolução do pré-projeto da Sprint 1, agora com funcionalidades avançadas de React, incluindo múltiplas páginas, formulários controlados, listagem dinâmica e persistência com localStorage.

Este é o projeto da **Sprint 2 (N2)** - Mini Aplicativo React, desenvolvido em React com Vite, TypeScript e Tailwind CSS.

---

## 🎯 Objetivos da Sprint 2

Implementar funcionalidades obrigatórias para a avaliação N2:

- ✅ **Menu de navegação com 3+ páginas** (Home, Acomodações, Pontos Cívicos)
- ✅ **Formulário controlado com useState** (5+ campos com validação)
- ✅ **Listagem dinâmica de itens** (Acomodações cadastradas)
- ✅ **Persistência com localStorage** (Dados permanecem após recarregar)
- ✅ **2+ componentes em arquivos .jsx separados** (AccommodationListItem, CivicPointsCard)
- ✅ **Apresentação oral de 10 minutos** (Estrutura pronta)

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
# O servidor estará disponível em: http://localhost:5173
```

---

## 📁 Estrutura do Projeto

```
client/src/
├── pages/
│   ├── Home.tsx                    # Página inicial (Sprint 1)
│   ├── Accommodations.tsx          # Listagem e filtros de acomodações
│   ├── CivicPoints.tsx             # Dashboard de Pontos Cívicos
│   └── NotFound.tsx                # Página 404
├── components/
│   ├── Header.tsx                  # Navegação com rotas (atualizado)
│   ├── AccommodationCard.tsx       # Card individual (Sprint 1)
│   ├── AccommodationListItem.jsx   # Item de lista (NOVO - .jsx)
│   ├── CivicPointsCard.jsx         # Card de pontos (NOVO - .jsx)
│   ├── modals/
│   │   ├── LoginModal.tsx          # Modal de login (Sprint 1)
│   │   ├── SignupModal.tsx         # Modal de cadastro (Sprint 1)
│   │   └── AddAccommodationModal.tsx # Modal para adicionar acomodação (NOVO)
│   └── ui/                         # Componentes shadcn/ui
├── App.tsx                         # Rotas (atualizado)
├── main.tsx                        # Entry point
└── index.css                       # Estilos globais
```

---

## ✨ Funcionalidades Implementadas

### 1. Menu de Navegação (3+ Páginas)
- **Home**: Página inicial com hero section e informações
- **Acomodações**: Listagem com filtros e busca
- **Pontos Cívicos**: Dashboard de pontos do usuário

### 2. Formulário Controlado com useState
**Modal de Adicionar Acomodação** (5 campos):
- Título (obrigatório)
- Localização (obrigatório)
- Preço por Noite (obrigatório, validação numérica)
- Pontos Cívicos (obrigatório, validação numérica)
- Descrição (obrigatório)

**Validações implementadas:**
- Campos obrigatórios
- Valores numéricos válidos
- Mensagens de erro em tempo real
- Limpeza de formulário após envio

### 3. Listagem Dinâmica
- Grid responsivo de acomodações
- Filtros por preço
- Busca por nome/localização
- Remoção de itens com atualização imediata

### 4. Persistência com localStorage
- **sunhost_accommodations**: Lista de acomodações
- **sunhost_user_points**: Pontos do usuário
- **sunhost_points_history**: Histórico de transações

Dados persistem após recarregar a página!

### 5. Componentes Separados em .jsx
1. **AccommodationListItem.jsx**: Exibe item individual de acomodação
2. **CivicPointsCard.jsx**: Card reutilizável para estatísticas

### 6. Página de Pontos Cívicos
- Dashboard com 4 estatísticas
- Histórico de transações em tabela
- Função de resgate de pontos
- Atualização em tempo real do localStorage

---

## 🔍 Detalhes de Implementação

### useState em Ação
```typescript
// Acomodações
const [accommodations, setAccommodations] = useState<any[]>([]);
const [filteredAccommodations, setFilteredAccommodations] = useState<any[]>([]);
const [searchTerm, setSearchTerm] = useState("");
const [priceFilter, setPriceFilter] = useState("all");

// Formulário
const [formData, setFormData] = useState({
  title: "",
  location: "",
  price: "",
  description: "",
  civic_points: "",
});
const [errors, setErrors] = useState<Record<string, string>>({});

// Pontos Cívicos
const [userPoints, setUserPoints] = useState(0);
const [history, setHistory] = useState<any[]>([]);
```

### localStorage em Ação
```typescript
// Salvar
localStorage.setItem("sunhost_accommodations", JSON.stringify(updated));

// Carregar
const stored = localStorage.getItem("sunhost_accommodations");
if (stored) {
  const data = JSON.parse(stored);
  setAccommodations(data);
}
```

### Componentes Reutilizáveis
```jsx
// AccommodationListItem.jsx - Componente separado
export default function AccommodationListItem({ accommodation, onRemove }) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4">
      {/* Conteúdo */}
    </div>
  );
}

// CivicPointsCard.jsx - Componente separado
export default function CivicPointsCard({ icon: Icon, label, value, color, bg }) {
  return (
    <div className={`${bg} rounded-lg p-6`}>
      {/* Conteúdo */}
    </div>
  );
}
```

---

## 📊 Estrutura da Apresentação (10 minutos)

### Slide 1: Introdução (1 min)
- Título: "SunHost Floripa - Sprint 2"
- Tema: Plataforma de hospedagem com impacto comunitário
- Integrantes do grupo

### Slide 2: Organização dos Componentes (2 min)
- Mostrar estrutura de pastas
- Explicar componentes principais
- Demonstrar separação em .jsx

### Slide 3: Funcionalidades Implementadas (3 min)
- Menu de navegação (3 páginas)
- Formulário controlado (5 campos)
- Listagem dinâmica com filtros
- localStorage funcionando

### Slide 4: Demonstração do App Rodando (3 min)
- Navegar entre páginas
- Adicionar acomodação via formulário
- Demonstrar filtros e busca
- Recarregar página e mostrar persistência
- Acessar Pontos Cívicos

### Slide 5: Dificuldades e Aprendizados (1 min)
- Desafios encontrados
- Soluções implementadas
- Aprendizados com React/localStorage

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Versão | Descrição |
|-----------|--------|-----------|
| React | 19 | Framework UI |
| Vite | Latest | Build tool e dev server |
| TypeScript | Latest | Type safety |
| Tailwind CSS | 4 | Utility-first CSS |
| Wouter | Latest | Roteamento client-side |
| Lucide Icons | Latest | Ícones SVG |

---

## 📝 Checklist de Requisitos

- [x] Menu de navegação com 3+ páginas
- [x] Formulário controlado com useState (5+ campos)
- [x] Listagem dinâmica de acomodações
- [x] Persistência com localStorage
- [x] 2+ componentes em .jsx separados
- [x] Validação de formulário
- [x] Filtros e busca funcionando
- [x] Responsivo (mobile, tablet, desktop)
- [x] Estrutura de apresentação pronta
- [x] Código limpo e bem documentado

---

## 🎬 Próximas Etapas (Sprint 3+)

- [ ] Integração com API RESTful
- [ ] Autenticação real com backend
- [ ] Página de detalhes de acomodação
- [ ] Sistema de avaliações e comentários
- [ ] Integração com mapa (Google Maps)
- [ ] Sistema de reservas
- [ ] Notificações em tempo real

---

## 📞 Suporte

Para dúvidas sobre o projeto, consulte:
- Documentação do React: https://react.dev
- Tailwind CSS: https://tailwindcss.com
- Vite: https://vitejs.dev
- Wouter: https://github.com/molefrog/wouter

---

## 📄 Licença

MIT License - 2026

---

**Versão:** 2.0.0 (Sprint 2)  
**Data:** Maio de 2026  
**Status:** ✅ Concluído e pronto para apresentação

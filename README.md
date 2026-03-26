# App-Fitness
O Aplicativo: ALPHA &amp; VÉNUS 30 (A Central do Seu Resultado) O aplicativo não é apenas um rastreador; ele é o seu personal trainer e nutricionista particular 24 horas por dia. Ele foi desenhado para eliminar a dúvida e garantir que cada minuto do seu treino e cada grama da sua comida gerem resultado.

## 🚀 Começando

### Pré-requisitos

- Node.js 16+ 
- npm ou yarn

### Instalação

```bash
# Instalar dependências
npm install
```

### Desenvolvimento

```bash
# Iniciar servidor de desenvolvimento
npm run dev
```

O app estará disponível em `http://localhost:5173`

### Build

```bash
# Compilar para produção
npm run build
```

## 📁 Estrutura do Projeto

```
src/
├── pages/           # Páginas da aplicação
│   ├── Index.tsx           # Página inicial
│   ├── Modules.tsx         # Listagem de módulos
│   ├── ModuleDetail.tsx    # Detalhes de um módulo
│   ├── VideoDetail.tsx     # Detalhes de um vídeo
│   ├── Checklist.tsx       # Checklist
│   ├── Progress.tsx        # Progresso do usuário
│   ├── AuthCallback.tsx    # Callback de autenticação
│   └── AuthError.tsx       # Página de erro de autenticação
├── components/      # Componentes reutilizáveis
│   └── ui/          # Componentes de UI
│       ├── sonner.tsx      # Componente de notificações
│       └── tooltip.tsx     # Componente de tooltip
├── App.tsx          # Componente raiz
├── main.tsx         # Entrada da aplicação
└── index.css        # Estilos globais
```

## 🛠️ Tecnologias Utilizadas

- **React** 18.2 - Biblioteca de UI
- **TypeScript** - Tipagem estática
- **Vite** - Build tool e dev server
- **React Router** - Roteamento
- **React Query** - Gerenciamento de estado do servidor
- **Tailwind CSS** - Utility-first CSS framework

## 📝 Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Compila a aplicação para produção
- `npm run preview` - Visualiza a build de produção localmente
- `npm run lint` - Executa o linter

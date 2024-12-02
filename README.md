# Kanban Frontend

## Estrutura de pastas

A seguinte estrutura de pastas foi utilizada:

- `src` (código fonte da aplicação)
- - `components` (todos os componentes React utilizados para compor a àrvore de componentes da aplicação)
- - `graphql`
- - - `client.ts` (client GraphQL Apollo Client)
- - - `queries.ts` (queries GraphQL utilizadas para obtenção de dados da API)
- - `App.tsx` (componente inicial React)
- - `index.css` (estilizações CSS e diretivas do TailwindCSS)
- - `main.tsx` (criação do componente inicial na árvore de componentes da página)

## Bibliotecas utilizadas

- `@apollo/client` [^3.11.10] - Client para requisições GraphQL e auxiliares para utilização com React.
- `@phosphor-icons/react` [^2.1.7] - Ícones para utilização em conjunto com React.
- `react-modal` [^3.16.1] - Componente de modal para React.
- `TailwindCSS` - Utilitário de classes CSS para estilização dos componentes.
- `Vite` - Ferramentas de bundle e inicialização do projeto.

## Decições técnicas

Infelizmente tive problemas com o filtro por data nos componentes da interface visual e não tive tempo hábil para resolver, por isso tive que retirá-lo, apesar da funcionalidade estar funcionando corretamente na API utilizada em conjunto.

Como os componentes não estavam tão distantes não precisei utilizar a Context API do React e muito menos uma biblioteca de gerenciamento de estado como Zustand ou Redux, por isso a passagem de estado via propriedades dos componentes foi suficiente.

## Execução da Aplicação

Para executar a aplicação utilize o comando `npm run dev`.
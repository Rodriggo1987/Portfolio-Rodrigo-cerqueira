# 💻 Meu Portfólio Pessoal

Bem-vindo ao repositório do meu portfólio pessoal! Este projeto foi desenvolvido para apresentar minhas habilidades, projetos práticos, formação acadêmica e meios de contato. Ele foi construído com foco em performance, responsividade e design moderno.

## 🚀 Tecnologias Utilizadas

Este projeto foi construído utilizando as seguintes tecnologias e ferramentas:

*   **[React](https://reactjs.org/)**: Biblioteca JavaScript para construção da interface de usuário baseada em componentes.
*   **[Vite](https://vitejs.dev/)**: Ferramenta de build super rápida para o ambiente de desenvolvimento.
*   **[Sass (SCSS)](https://sass-lang.com/)**: Pré-processador CSS utilizado através de CSS Modules (`.module.scss`) e estilos globais para organizar a estilização.
*   **[React Icons](https://react-icons.github.io/react-icons/)**: Biblioteca para renderização dos ícones.
*   **CSS Grid & Flexbox**: Para a criação de layouts fluidos e responsivos sem a necessidade de frameworks CSS externos.

## 🌟 Funcionalidades

*   **Design Mobile-First**: O layout foi pensado primeiramente para dispositivos móveis, adaptando-se de forma inteligente para Tablets, Laptops e Desktops utilizando *Media Queries*.
*   **Animações de Fundo**: Implementação de um componente isolado (`BackgroundAnimation`) que roda de forma assíncrona atrás do conteúdo, garantindo uma estética agradável sem atrapalhar a leitura.
*   **Otimização de Renderização**: Dados de habilidades e projetos foram isolados fora dos componentes React para evitar re-renderizações desnecessárias.
*   **Formulário Dinâmico**: A seção de contato conta com um formulário funcional em telas maiores que utiliza a API `mailto` para integração direta com o cliente de e-mail do usuário.
*   **Download de Currículo**: Pasta pública contendo o arquivo PDF do currículo mais atualizado para fácil acesso.

## 📁 Estrutura do Projeto

Abaixo está a representação da estrutura de pastas e arquivos que compõem este portfólio:

```text
📦 PORTFOLIO_RODRIGO_CERQUEIRA
 ┣ 📂 .vscode
 ┣ 📂 node_modules
 ┣ 📂 public
 ┃ ┗ 📂 curriculo
 ┃   ┗ 📜 curriculo_2025.pdf
 ┣ 📂 src
 ┃ ┣ 📂 assets
 ┃ ┣ 📂 components
 ┃ ┃ ┣ 📂 BackgroundAnimation
 ┃ ┃ ┣ 📂 Footer
 ┃ ┃ ┗ 📂 Header
 ┃ ┣ 📂 pages
 ┃ ┃ ┣ 📂 Contato
 ┃ ┃ ┣ 📂 Hero
 ┃ ┃ ┣ 📂 Projeto
 ┃ ┃ ┣ 📂 Skills
 ┃ ┃ ┗ 📂 Sobre
 ┃ ┣ 📂 Styles
 ┃ ┃ ┗ 📜 variaveis.scss
 ┃ ┣ 📜 App.jsx
 ┃ ┣ 📜 global.scss
 ┃ ┗ 📜 main.jsx
 ┣ 📜 .gitignore
 ┣ 📜 eslint.config.js
 ┣ 📜 index.html
 ┣ 📜 package-lock.json
 ┣ 📜 package.json
 ┣ 📜 README.md
 ┗ 📜 vite.config.js
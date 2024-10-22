# Controle de Depósitos Incrementais

Este é um projeto simples para controle de depósitos incrementais de 1 até 200 reais. A página permite registrar e visualizar os valores depositados, além de gerar um hash único para armazenar e carregar os depósitos posteriormente. A página também pode gerar um comprovante via WhatsApp com detalhes de cada depósito.

## Funcionalidades

- **Registrar Depósitos**: O usuário pode inserir o valor do depósito (de 1 a 200 reais).
- **Exibir Valores Depositados**: A lista dos depósitos feitos é exibida, assim como a soma total.
- **Gerar Comprovante via WhatsApp**: Ao confirmar um depósito, um comprovante com o valor, data, hora e soma total dos depósitos é gerado e enviado via WhatsApp.
- **Hash para Armazenamento**: Os valores depositados são convertidos em um hash, permitindo que os depósitos sejam carregados mais tarde a partir desse hash.
- **Limpar Depósitos**: A página possui um botão para limpar os depósitos armazenados (resetando o cache/local storage).

## Estrutura do Projeto

O projeto contém os seguintes arquivos:

/ 
├── index.html # Página principal 
├── depositos.js # Script JavaScript com a lógica do projeto 
├── styles.css # Arquivo de estilo CSS 
└── README.md # Este arquivo de instruções

## Como Usar

### 1. Instalar e Configurar

Para começar a usar este projeto, você pode simplesmente clonar o repositório e abrir o arquivo `index.html` no navegador.

```
bash

git clone https://github.com/seu-usuario/controle-de-depositos.git

```

2. Hospedagem no GitHub Pages
Este projeto foi desenvolvido para ser facilmente hospedado no GitHub Pages. Siga as etapas abaixo para configurar:

- Faça o upload dos arquivos do projeto para um repositório GitHub.
- Vá para as Configurações do repositório e encontre a seção GitHub Pages.
- Defina o branch principal (geralmente main ou master) como a fonte para as páginas e salve.
- Sua página estará disponível em https://seu-usuario.github.io/seu-repositorio.

3. Funcionalidades
- Registrar Depósitos: No formulário principal, insira o valor que deseja depositar e clique em "Confirmar Depósito". O valor será adicionado à lista e a soma total será atualizada.

- Carregar Depósitos via Hash: Insira um hash gerado anteriormente no campo "Carregar depósitos a partir de um hash" e clique em "Carregar Depósitos". O sistema decodificará o hash e mostrará os valores previamente depositados.

- Gerar Comprovante via WhatsApp: Após cada depósito, um link é gerado para enviar um comprovante via WhatsApp contendo a data, hora, o valor depositado e a soma total.

- Limpar Depósitos: Clique no botão "Limpar Depósitos" para apagar todos os valores armazenados e resetar o local storage.

Tecnologias Utilizadas

HTML5: Para a estrutura da página.
CSS3: Para o design e responsividade.
JavaScript (ES6): Para a lógica do projeto, manipulação do DOM e local storage.


Como Contribuir
Se você deseja contribuir com este projeto:

- Faça um fork do repositório.
- Crie uma branch com sua nova feature (git checkout -b feature/nova-feature).
- Commit suas mudanças (git commit -m 'Adicionei nova feature').
- Envie sua branch (git push origin feature/nova-feature).
- Abra um Pull Request.

# PROJETO: CURRICULUM MANAGER
👋 Bem-vinda(o) ao meu projeto! 

_Projeto desenvolvido para o Desafio Técnico do processo seletivo da Ilegra

### Contexto
Este projeto consiste em um gerenciador de currículos, que permite ao usuário adicionar um novo através de um formulário, visualizar a lista de currículos cadastrados, visualizar os dados de um currículo e deleta-lo caso queira.

### Instalação
Pré-requisitos:

 - Ter instalado em sua máquina o NPM
 
 No terminal da sua máquina digite a seguinte sequência de comandos:

     git clone git@github.com:renatapnunes/curriculum-manager.git
     cd curriculum-manager
     npm install
     npm start
Caso a aplicação não abra sozinha, você pode acessar no seu browser `http://localhost:3000/`

### Aplicação

![Pagina principal da aplicação](https://github.com/renatapnunes/curriculum-manager/blob/main/curriculum-manager/src/assets/home-page.png)
![Formulario de cadastro de curriculo](https://github.com/renatapnunes/curriculum-manager/blob/main/curriculum-manager/src/assets/add-page.png)

Na página principal da aplicação, que pode ser acessada pela rola '/', são listados, caso existam, todos os currículos salvos no local storage.
Ao clicar em um dos currículos, a aplicação é redirecionada para a página de detalhes, acessada pela rola '/view/:id', onde é possível visualizar todos os dados cadastrados da pessoa candidata.
Na página principal, também é possível excluir um currículo cadastrado.
Todas as páginas possuem um cabeçalho e rodapé. No cabeçalho, estão disponíveis dois links de navegação: um para a página principal e outro para a de formulário de cadastro.
Na página de adicionar novos curriculos, acessada pela rola '/add', há disponível um formulário onde o usuário pode inserir as informações da pessoa candidata. Após validação dos dados, o novo currículo é adicionado ao local storage.

### Dependências
Juntamente com o **React.js**, foi usado neste projeto o **Hook useForm**, além das seguintes dependências:

- **uniqid**: para gerar ids únicos;
- **yup e @hookform/resolvers/yup**: para validação dos dados;
- **react router dom**: para gerenciamento das rotas;
- **styled components**: para estilização da aplicação;
- **esLint airbnb**: para detecção de problemas e padronização de estilo;

### Próximos passos

 - Implementar testes unitários e de integração

### Meus contatos
Estou aberta a feedbacks sobre este projeto.
Caso queria colaborar, fique a vontade para entrar em contato pelo meu:

👉 [Linkedin](https://www.linkedin.com/in/renata-p-nunes/)

Vou ficar muito feliz em aprender algo novo! 😄

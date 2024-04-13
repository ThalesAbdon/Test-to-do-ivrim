# Teste Prático em Node.js com TypeScript

## Objetivo:
O objetivo deste teste é avaliar suas habilidades como programador full stack utilizando as tecnologias Node.js, TypeScript e React.js. O teste consiste em utilizar um layout de lista de tarefas (Todo List) no formato Kanban, pré-desenvolvido em React.js, e criar o back-end em Node.js para implementar funcionalidades de adicionar, atualizar e excluir tarefas.

## Instruções:
Neste teste, você receberá um layout de front-end pré-desenvolvido em React.js que representa uma lista de tarefas no formato Kanban, com colunas para tarefas "A Fazer", "Em Progresso" e "Concluído". Sua tarefa é criar o back-end em Node.js, e implementar as funcionalidades de adicionar, editar e excluir tarefas.

## Requisitos:
- Criar uma API RESTful em Node.js com TypeScript para gerenciar as tarefas;
- Utilizar um ORM para persistir os dados no banco de dados (MySQL, PostgreSQL ou MongoDB);
- Implementar as funcionalidades de listar, adicionar, atualizar e excluir tarefas;
- Defina os seguintes campos para cada tarefa: id, título, descrição, status (A Fazer, Em Progresso ou Concluído) e data de criação;

## Front-End (React.js):
- Utilize o layout fornecido para criar uma interface de usuário onde as tarefas são exibidas no formato Kanban.
- Conecte o front-end ao back-end para realizar operações CRUD nas tarefas.
- Implemente a funcionalidade de editar tarefas, permitindo que o usuário modifique o título, descrição e status da tarefa.
- Implemente a funcionalidade de excluir tarefas.

## Critérios de Avaliação:
- Integração correta entre front-end e back-end.
- Funcionalidade completa de adicionar, editar e excluir tarefas.
- Criação de testes unitários no back-end para as funcionalidades principais, utilizando o framework Jest.
- Manipulação adequada das requisições e respostas entre as camadas front-end e back-end.
- Código limpo e organizado.
- Utilização de boas práticas de programação.

# Prazo:
Você terá até o dia 13/04/2024 - 23:59 para concluir o teste.

# RESOLUÇÃO

## Instalação e Execução
 Para instalar o projeto é simples:
 
### 1. Clonar o Repositório

Clone o repositório do GitHub para sua máquina local:

```bash
git clone https://github.com/ThalesAbdon/Test-to-do-ivrim
```

### 2. Instalar Dependências Back-end
Acesse a pasta do back end
```
cd test-to-do-ivrim/back
```

Fiz utilizando yarn, portanto rode um:
```
yarn install
```

Rode o docker compose para subir o banco de dados ( MongoDB )
```
docker compose up -d
```
Rodar o programa:

```
yarn start:dev
```

Rode o comando abaixo para Compilar:
```
yarn build
```

Rodar projeto compilado:
```
yarn start
```

Rodar testes unitário compilado:
```
yarn test
```

### 3. Configurar Variáveis de Ambiente no Back
Verifique as variavéis de ambiente no arquivo
```
.env
```

### 4. Instalar Dependências Front

Acesse a pasta do front
```
cd test-to-do-ivrim/front
```

Fiz utilizando yarn, portanto rode um:
```
yarn install
```

Para rodar o programa, basta utilizar:
```
yarn dev
```

### 5. Configurar Variáveis de Ambiente no Front
Verifique as variavéis de ambiente no arquivos.
OBS: eu nunca tinha trabalhado com import.meta, por isso subi no código as envs. Isso NÃO é uma boa prática.
O ideal é sempre colocar .env no gitignore. Mas como é a primeira vez que trabalhei com import.meta quis deixar no repo para eu ter um exemplo futuro.
```
.env
env.d.ts
```
### 6. API Client
Utilizei o Postman.

#### GET
OBS: Lembrando que para fazer o get o status só aceita 3 values ( do jeito que está escrito abaixo):
* A Fazer
* Em Progresso
* Concluído

![image](https://github.com/ThalesAbdon/Test-to-do-ivrim/assets/87333834/e86eae20-f962-44e2-adbd-bc8322a31012)

#### POST
![image](https://github.com/ThalesAbdon/Test-to-do-ivrim/assets/87333834/095cb698-9291-4cc6-868d-39623919cb1a)

#### PUT
![image](https://github.com/ThalesAbdon/Test-to-do-ivrim/assets/87333834/56198295-9855-467e-85c8-0cbc3e4ad6fb)

#### DELETE
![image](https://github.com/ThalesAbdon/Test-to-do-ivrim/assets/87333834/c639cbdf-747c-4cdf-bdae-d2482b50d808)

Dentro da pasta do backend há uma collection do postman ( que foi a utilizada nos meus testes ), então basta importar.



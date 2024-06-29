# API-Food_Inventory_Manager
Este repositório contém o projeto desenvolvido por meio dos conteúdos da aula de Programação para Web do curso de ADS, ministrada pelo professor https://github.com/vilelaricardo, da UFCA. Tendo como objetivo principal ensinar os conceitos de persistência de dados utilizando MongoDB e Mongoose, integrados com o framework Express.

## Estrutura do Projeto
O projeto está organizado em camadas para facilitar a manutenção e a escalabilidade:

- **controllers/**: Contém os controladores que lidam com as requisições HTTP.
- **models/**: Define os esquemas de dados e interage diretamente com o MongoDB usando Mongoose.
- **routes/**: Define as rotas da API e as associa aos controladores correspondentes.
- **services/**: Contém a lógica de negócio e interage com os modelos para manipulação de dados.
- **app.js**: Arquivo principal da aplicação onde o Express é configurado, as rotas são integradas e a conexão com o MongoDB é estabelecida.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript no servidor.
- **Express**: Framework web para Node.js.
- **MongoDB**: Banco de dados NoSQL.
- **Mongoose**: ODM (Object Data Modeling) para MongoDB e Node.js.

## Funcionalidades da API

A API é responsável por implementar as funções de CRUD ao estoque de alimentos, armazenado em banco de dados não relacional, através de alguns Endpoints.
<br><br>
**Create**: Para cadastrar um novo alimento.
```http
POST /foods
```
**Read**: Para resgatar todos os alimentos.
```http
GET /foods
```
**Read**: Para regastar um alimento pelo ID.
```http
GET /foods/{_id}
```
**Update**: Para atualizar um alimento pelo ID.
```http
PUT /foods/{_id}
```
**Delete**: Para excluir um alimento pelo ID.
```http
DELETE /foods/{_id}
```
**Estrutura dos Dados**: Para cadastrar um novo alimento é necessário seguir o contrato JSON.
```JSON
{
    "name": "Banana",
    "category": "Fruta",
    "quantity": 37,
    "expirationDate": 2024-07-01T12:00:00.000+00:00
    "price": 4.5
}
```
**Estrutura dos Dados**: Para atualizar um alimento do banco é necessário passar somente o dado que será atualizado pelo JSON.
```JSON
{
    "price": 5.30
}
```
### Instalação:

1. Clone este repositório:
   ```bash
   git clone https://github.com/DiogoG-dev/API-Food_Inventory_Manager.git
   cd API-Food_Inventory_Manager
    ```

2. Instale as dependências:
   ```bash
   npm install
   ```
3. Configure a conexão com o MongoDB, com seu usuário e senha, no arquivo `app.js`:
    ```js
      mongoose.connect('mongodb+srv://<username>:<password>@clustertest.zlpkjkr.mongodb.net', {
            retryWrites: true,
            w: 'majority',
            appName: 'ClusterTest'
      });
    ```

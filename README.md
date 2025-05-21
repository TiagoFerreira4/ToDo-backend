# ToDo-backend

Backend da aplicação To-Do List, parte da stack MERN (MongoDB, Express, React, Node.js).

## 🚀 Tecnologias utilizadas

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/) + [Mongoose](https://mongoosejs.com/)
- [JWT](https://jwt.io/) para autenticação
- [bcryptjs](https://www.npmjs.com/package/bcryptjs) para hashing de senhas
- [dotenv](https://www.npmjs.com/package/dotenv)

## ⚙️ Funcionalidades

- Cadastro e login de usuário com senha criptografada
- Geração e validação de token JWT
- CRUD de tarefas (criar, listar, editar, concluir, deletar)
- Cada usuário acessa apenas suas próprias tarefas

## 📦 Como rodar o projeto

1. **Clone o repositório:**
    ```bash
    git clone https://github.com/SEU_USUARIO/ToDo-backend.git
    cd ToDo-backend
    ```

2. **Instale as dependências:**
    ```bash
    npm install
    ```

3. **Configure as variáveis de ambiente:**
    - Crie um arquivo `.env` na raiz do projeto e adicione:
      ```
      MONGO_URI=mongodb://localhost:27017/tododb
      JWT_SECRET=sua_chave_secreta
      ```

4. **Suba o MongoDB (pode ser com Docker):**
    ```bash
    docker run -d --name mongo-tododb -p 27017:27017 mongo
    ```
    Ou rode localmente, se tiver instalado.

5. **Inicie o servidor:**
    ```bash
    npx nodemon server.js
    ```
    ou
    ```bash
    node server.js
    ```

6. **O backend ficará disponível em:**  
   `http://localhost:5000`

---

## 📬 Rotas principais

- `POST /api/auth/register` — cadastro de usuário
- `POST /api/auth/login` — login de usuário
- `POST /api/tasks` — cria uma nova tarefa (autenticado)
- `GET /api/tasks` — lista as tarefas do usuário autenticado
- `PUT /api/tasks/:id` — edita uma tarefa do usuário autenticado
- `DELETE /api/tasks/:id` — remove uma tarefa do usuário autenticado

---

## 🔒 Observação

- **NUNCA suba seu arquivo `.env` para o GitHub**. Ele já está listado no `.gitignore`.
- Use variáveis de ambiente seguras em produção.

---

## 📑 Licença

Este projeto é open-source, sinta-se à vontade para usar e contribuir!

---

## 🔗 Frontend

Acesse também o [repositório do frontend](https://github.com/SEU_USUARIO/ToDo-frontend) dessa aplicação.

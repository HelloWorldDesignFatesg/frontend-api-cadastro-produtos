
# Sistema de Cadastro de Produtos – Frontend

Este repositório contém o **frontend** do Sistema de Cadastro de Produtos, desenvolvido em **Angular**.

---

## 📌 Visão Geral

Aplicação web que permite visualizar, cadastrar, editar e excluir produtos através de uma interface amigável. Toda a comunicação é feita com a API RESTful do backend Spring Boot.

---

## ⚙ Tecnologias Utilizadas

| Camada   | IDE     | Framework | Linguagem   |
|----------|---------|-----------|-------------|
| Frontend | VS Code | Angular   | TypeScript  |

---

## 🔧 Pré-requisitos

- Node.js versão 18 ou superior
- Angular CLI instalado globalmente:

```bash
npm install -g @angular/cli
```

---

## ▶ Como Instalar

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/produtos-front.git
cd produtos-front
```

2. Instale as dependências:

```bash
npm install
```

---

## ▶ Como Executar

Inicie o servidor de desenvolvimento Angular:

```bash
ng serve
```

Acesse no navegador:

```bash
http://localhost:4200
```

---

## 🌐 Configuração da API

Por padrão, o frontend espera que o backend esteja disponível em `http://localhost:8080/api`.

Caso seja necessário alterar, edite o arquivo `src/environments/environment.ts`:

```typescript
export const environment = {
  production: false,
  apiUrl: 'http://localhost:8080/api'
};
```

---

## 🧪 Testes

Para executar os testes unitários (se houver):

```bash
ng test
```

---



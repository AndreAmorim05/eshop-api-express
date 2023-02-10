# E-commerce RESTful API with Node.js (Express + Mongo)

## Requisites
- Node.js
- Mongo DB
- Git

## Getting started
Follow these steps at the command line:

### 1. Clone and Install

```
git clone https://github.com/AndreAmorim05/eshop-api-express.git
cd eshop-api-express
npm install
```

### 2. configure .env file for local run
First you need to create a .env file in your root project tree with the constants:
```
API_URL = /api/v1
SECRET = put-here-your-secret-key
CONNECTION_STRING = mongodb://127.0.0.1:27017/test
```

### 3. Run the solution

```
npm run start
```
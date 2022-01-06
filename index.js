//Express.js é um framework para Node.js que fornece recursos mínimos para construção de servidores web

// Criando o servidor
const express = require('express')
const app = express()

//Coloca para escutar a porta 3000 e retorna algo para teste
app.listen(3000, () => console.log('servidor rodando na porta 3000'))

//Cria uma roda para o / e retorna algo
// REQ = requisição que estamos recebendo.
// RES = o que estamos devolvendo, que será renderizado na tela. 
app.get('/', (req, res)=> res.send('servidor rodando tudo OK.'))

//Cria uma roda para o /atendimentos e retorna algo
app.get('/atendimentos', (req, res)=> res.send('voce está na rota de atendimentos.'))
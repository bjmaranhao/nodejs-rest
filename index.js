//Express.js é um framework para Node.js que fornece recursos mínimos para construção de servidores web
const customExpress = require('./config/customExpress')

const app = customExpress()

//Coloca para escutar a porta 3000 e retorna algo para teste
app.listen(3000, () => console.log('servidor rodando na porta 3000'))
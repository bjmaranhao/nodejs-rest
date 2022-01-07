//Express.js é um framework para Node.js que fornece recursos mínimos para construção de servidores web
const req = require('express/lib/request')
const customExpress = require('./config/customExpress')

const conexao = require('./infraestrutura/conexao')

const Tabelas = require('./infraestrutura/tabelas')


conexao.connect(erro => {
    if (erro) {
        console.log(erro)
    } else {
        console.log('conectado com sucesso.')

        Tabelas.init(conexao)

        const app = customExpress()

        //Coloca para escutar a porta 3000 e retorna algo para teste
        app.listen(3000, () => console.log('servidor rodando na porta 3000'))
    }
})


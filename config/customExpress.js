// Criando o servidor
const express = require('express')
//A biblioteca Consign é sugerida para facilitar o gerenciamento das rotas no express
const consign = require('consign')

//  body-parser é um módulo capaz de converter o body da requisição para vários formatos
const bodyParser = require('body-parser')

module.exports = () => {
    const app = express()

    // método do express. Adciona bibliotecas para serem usadas no express.  
        // prepara a requisição recebida do browser  
    app.use(bodyParser.urlencoded({extended: true}))
        // prepara a requisição recebida como JSON.
    app.use(bodyParser.json())
    //Pega tudo que esta dentro da pasta controllers e adiciona no app. 
    consign()
        .include('controllers')
        .into(app)

    return app
}

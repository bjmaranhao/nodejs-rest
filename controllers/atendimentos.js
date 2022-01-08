const Atendimento = require('../models/atendimentos')

module.exports = app => {
    //Cria uma rota para o /atendimentos responder req do tipo GET e retornar algo
    app.get('/atendimentos', (req, res)=> res.send('voce está na rota de atendimentos (consign2222).'))

    app.post('/atendimentos', (req, res)=> {
        
        const atendimento = req.body

        Atendimento.adiciona(atendimento, res)

    })
}
module.exports = app => {
    //Cria uma roda para o /atendimentos responder req do tipo GET e retornar algo
    app.get('/atendimentos', (req, res)=> res.send('voce está na rota de atendimentos (consign2222).'))

    app.post('/atendimentos', (req, res)=> {
        
        console.log(req.body)
        res.send('voce está na rota de atendimentos e está realizando um POST.')


    })
}
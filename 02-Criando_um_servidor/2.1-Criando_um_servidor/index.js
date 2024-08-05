// importando tudo do express em uma variável
import express from 'express'

// bodyParser
import bodyParser from 'body-parser'

// instanciando o express
const app = express()

app.use(bodyParser.json())

// porta onde está rodando o express
const port = 3000

let data = [
    {
        name:'thomaz',
        password:'1234567890'
    }
]

// criando as rotas

// get route
app.get('/', (req, res) => {
    res.send(JSON.stringify(data))
})

app.post('/post', (req, res) => {
    const dataUser = req.body;

    // Verifica se os dados fornecidos são válidos
    if (dataUser !== undefined) {
        data.push(dataUser);
        res.json({ mensagem: 'Dados atualizados com sucesso!'});
    } else {
        res.status(400).json({ mensagem: 'Dados inválidos. Certifique-se de fornecer um nome e uma idade.' });
    }
})

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}!`)
})

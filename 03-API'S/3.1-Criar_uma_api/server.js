import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import User  from './models/user.js'
// instanciando o express
const app = express()

// porta em que o servidor vai rodar
const port = 3000

// configurando a resposta das requisicoes em json
app.use(bodyParser.json())

// UHa1qfnNvUdtBCYu

app.get('/', async (req, res) => {
    res.send(JSON.stringify(await User.db()))
})

app.post('/users', async (req, res) => {

    const userCreate = req.body

    await User.create(userCreate)
})

mongoose.connect('mongodb+srv://thomazhilario5:UHa1qfnNvUdtBCYu@cluster.fchq9.mongodb.net/?retryWrites=true&w=majority&appName=cluster')

app.listen(port, () => console.log('rodando legal'))

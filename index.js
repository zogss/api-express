// configuração inicial
const express = require('express');
const mongoose = require('mongoose');
const app = express();

require('dotenv').config();

// forma de ler JSON / middlewares
app.use(
    express.urlencoded({
        extended: true,
    }),
);

app.use(express.json());

// rotas da API
const PersonRoutes = require('./routes/PersonRoutes')

app.use('/person', PersonRoutes)

// rota inicial / endpoint
app.get('/', (req, res)=>{

    // mostrar REQsição
    res.json({ message: 'Oi express!' })
});

// entregar uma porta ao express para ter acesso ao codigo
mongoose
    .connect(process.env.DB_LINK)
    .then(()=>{
        console.log('Conectamos ao MongoDB!')
        app.listen(3000)
    })
    .catch((err) => console.log(err))

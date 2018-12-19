const express = require('express')
const app = express()
const port = 3000

const indexRouter = require('./routes/index')
const clientsRouter = require('./routes/clients')

app.use((req, res, next) => {
    console.log('passou por aqui')
    next() //se nao utilizar o next ele trava nessa função
})
app.use('/', indexRouter)
app.use('/clients', clientsRouter)

app.listen(port, () => console.log('Listening on port: '+port))
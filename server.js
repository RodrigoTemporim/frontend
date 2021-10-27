import express, { static } from 'express'
const app = express()
const PORT = process.env.PORT || 3333
 
app.use(static('build'))
app.listen(PORT, () => console.log('Servidor Front em execução!'))

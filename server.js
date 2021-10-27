import express, { static } from 'express'
const app = express()
app.listen(process.env.PORT || 3000, () => { console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env); });
 
app.use(static('build'))
app.listen(PORT, () => console.log('Servidor Front em execução!'))

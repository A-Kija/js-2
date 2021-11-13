const express = require('express')
const app = express()
const cors = require('cors')
const port = 3003

app.use(cors())

//Route
app.get('/', (req, res) => {
    res.send('Ate')
})

app.get('/labas', (req, res) => {
    res.send('Sveikutis, Zuikutis')
})

app.get('/labas/jonai', (req, res) => {
    res.send('Sveikutis, jonai')
})

app.get('/labas/:vardas', (req, res) => {
    res.send(`Sveikutis arba Sveikutė, ${req.params.vardas}`)
})

app.get('/sum/:d1/:d2', (req, res) => {
    res.send(`Atsakymas: ${parseInt(req.params.d1) + parseInt(req.params.d2)}`)
})

app.get('/diff/:d1/:d2', (req, res) => {
    res.send(`Atsakymas: ${parseInt(req.params.d1) - parseInt(req.params.d2)}`)
})



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
const express = require('express')
const app = express()
const cors = require('cors')
const port = 3003

app.use(cors())

app.use(express.urlencoded({
    extended: true
}))
app.use(express.json());


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


app.post('/calculator', (req, res) => {
    const d1 = parseFloat(req.body.d1);
    const d2 = parseFloat(req.body.d2);
    let answer;
    let errMsg;
    switch (req.body.action) {
        case '+':
            answer = d1 + d2;
            break;
        case '-':
            answer = d1 - d2;
            break;
        case 'X':
            answer = d1 * d2;
            break;
        case '/':
            if (0 === d2) {
                errMsg = 'No way';
            } else {
                answer = d1 / d2;
            }
            break;
        default:
            errMsg = 'WTF?';
    }
    res.json({
        answer: answer,
        errMsg: errMsg
    })
})



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
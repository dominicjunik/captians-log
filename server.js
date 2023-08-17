const express = require('express')

const app = express()

const PORT = 8080

const jsxEngine = require('jsx-view-engine')

app.set('view engine', 'jsx')
app.engine('jsx', jsxEngine())

app.use(express.urlencoded({ extended: true }))
// routes

// index
app.get('/logs', (req, res) => {
    res.render('New')
})

// show
// new
// create
app.post('/logs', (req, res) => {
    req.body.shipIsBroken = (req.body.shipIsBroken === 'on') 
    res.send(req.body)
})

// edit
// update
// destroy



app.listen(PORT, console.log('Listening on port: ' + PORT, process.env.MONGO_URL))
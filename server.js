const express = require('express')

const Log = require('./models/Logs')

require('dotenv').config()

const mongoConfig = require('./config')

const app = express()

const PORT = 8080;

mongoConfig()

const jsxEngine = require('jsx-view-engine')

app.set('view engine', 'jsx')
app.engine('jsx', jsxEngine())

app.use(express.urlencoded({ extended: true }))
// routes

// index
app.get('/logs', async (req, res) => {
    try {
        let logs = await Log.find()
        res.render('Index', { logs })
    } catch(err) {
        console.log(err.message)
    }
    
})

// show
app.get('/logs/:id', async (req, res) => {
    try {
        let log = await Log.findById(req.params.id)
        res.render('Show', { log })
    } catch(err) {
        console.log(err.message)
        res.send('not found')
    }
    
})
// new
app.get('/logs/new', (req, res) => {
    res.render('New')
})
// create
app.post('/logs', async (req, res) => {
    req.body.shipIsBroken = (req.body.shipIsBroken === 'on') 
    try {
        await Log.create(req.body)
    } catch(err) {
        console.log(err.message)
    }
    res.redirect('/logs')
})

// edit
// update
// destroy



app.listen(PORT, console.log('Listening on port: ' + PORT, process.env.MONGO_URL))
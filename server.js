const express = require('express')

const Log = require('./models/Logs')

require('dotenv').config()

const mongoConfig = require('./config')

const app = express()

const PORT = 8080;

mongoConfig()

const jsxEngine = require('jsx-view-engine')

const methodOverride = require('method-override')

app.set('view engine', 'jsx')
app.engine('jsx', jsxEngine())

app.use(methodOverride('_method'))

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

// new
app.get('/logs/new', (req, res) => {
    res.render('New')
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
app.get('/logs/:id/edit', async (req, res) => { 
    try {
        let log = await Log.findById(req.params.id)
        res.render('Edit', { log })
    } catch(err) {
        console.log(err.message)
        res.send('broken edit page')
    }
    
})
// update
app.patch('/logs/:id', async (req, res) => {
    req.body.shipIsBroken = (req.body.shipIsBroken === 'on') 
    try {
        await Log.findByIdAndUpdate(req.params.id, {
            ...req.body
        })
        res.redirect(`/logs/${req.params.id}`)
    }catch(err) {
        console.log(err.message)
    }
})
// destroy
app.delete('/logs/:id', async (req, res) => {
    try {
        await Log.findByIdAndDelete(req.params.id)
    } catch(err) {
        console.log(err.message)
    }
    res.redirect('/logs')
})



app.listen(PORT, console.log('Listening on port: ' + PORT, process.env.MONGO_URL))
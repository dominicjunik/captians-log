const express = require('express')

const Log = require('./models/Logs')

require('dotenv').config()

const mongoConfig = require('./config')

const app = express()

const PORT = 8080;

mongoConfig()
const logsRoutes = require('./routes/logRoutes')
const commentRoutes = require('./routes/commentRoutes')

const jsxEngine = require('jsx-view-engine')

const methodOverride = require('method-override')

app.set('view engine', 'jsx')
app.engine('jsx', jsxEngine())

app.use(methodOverride('_method'))

app.use(express.urlencoded({ extended: true }))
// routes
app.use('/logs', logsRoutes)
app.use('/comments', commentRoutes)



app.listen(PORT, console.log('Listening on port: ' + PORT, process.env.MONGO_URL))
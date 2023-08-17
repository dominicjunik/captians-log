const express = require('express')

const app = express()

const PORT = 8080

app.get('/', (req, res) => {
    res.send('new')
})


app.listen(PORT, console.log('Listening on port: ' + PORT, process.env.MONGO_URL))
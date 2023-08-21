const Log = require('../models/Logs')

module.exports.index = async (req, res) => {
    try {
        let logs = await Log.find()
        res.render('Index', { logs })
    } catch(err) {
        console.log(err.message)
    }
    
}

// new
module.exports.new = (req, res) => {
    res.render('New')
}

// show
module.exports.show = async (req, res) => {
    try {
        let log = await Log.findById(req.params.id).populate('comments')
        res.render('Show', { log })
    } catch(err) {
        console.log(err.message)
        res.send('not found')
    }
    
}

// create
module.exports.create = async (req, res) => {
    req.body.shipIsBroken = (req.body.shipIsBroken === 'on') 
    try {
        await Log.create(req.body)
    } catch(err) {
        console.log(err.message)
    }
    res.redirect('/logs')
}

// edit
module.exports.edit = async (req, res) => { 
    try {
        let log = await Log.findById(req.params.id)
        res.render('Edit', { log })
    } catch(err) {
        console.log(err.message)
        res.send('broken edit page')
    }
    
}
// update
module.exports.update = async (req, res) => {
    req.body.shipIsBroken = (req.body.shipIsBroken === 'on') 
    try {
        await Log.findByIdAndUpdate(req.params.id, req.body)
        res.redirect(`/logs/${req.params.id}`)
    }catch(err) {
        console.log(err.message)
    }
}
// destroy
module.exports.delete = async (req, res) => {
    try {
        await Log.findByIdAndDelete(req.params.id)
    } catch(err) {
        console.log(err.message)
    }
    res.redirect('/logs')
}
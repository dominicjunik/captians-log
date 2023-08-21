const mongoose = require('mongoose')

const Schema = mongoose.Schema

const logsSchema = new Schema({
    title: {
        type: String
    },
    entry: {
        type: String
    },
    shipIsBroken: {
        type: Boolean,
        default: true
    },
    comments: [{
        type: mongoose.Types.ObjectId,
        ref: 'comments'
    }]
},  { timestamps: true })

const Log = mongoose.model('log', logsSchema)

module.exports = Log

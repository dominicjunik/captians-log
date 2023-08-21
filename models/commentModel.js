const mongoose = require('mongoose')

const Schema = mongoose.Schema

const commentSchema = new Schema({
    text: {type: String},
    user: {type:String, default: 'ANON'}
}, {timestamps: true})

const Comment = mongoose.model('comments', commentSchema)

module.exports = Comment
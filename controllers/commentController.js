const Logs = require('../models/Logs')
const Comments = require('../models/commentModel')


module.exports.create = async (req, res) => {
    // create a comment by updating the comments property in log
    try {
        // create a document in our comments collection
        const comment = await Comments.create(req.body)
        // find the log
        await Logs.findByIdAndUpdate(req.params.logId, {
            // push the new comment document's id
            $push: {
                comments: comment._id
            }
        })
    } catch(err) {
        console.log(err)
    }
    res.redirect(`/logs/${req.params.logId}`)
}

module.exports.delete = async (req, res) => {
    // delete a comment by updating the comments property in log
    try {
        // first use the comment id to delete the comment from the comments collection
        await Comments.findByIdAndDelete(req.params.commentId)
        // then use the log id to find the log
        await Logs.findByIdAndUpdate(req.params.logId, {
            // pull/remove the reference id of the comment we deleted
            $pull: {
                comments: req.params.commentId
            }
        })
    } catch(err) {
        console.log(err.message)
    }


    res.redirect(`/logs/${req.params.logId}`)
}

module.exports.index = async (req, res) => {
    // target the comments property 
    const log = await Logs.findById(req.params.logId).populate('comments')
    res.send(log.comments)
}

module.exports.show = async (req, res) => {
    // find the log and filter it's comments property array
    try {
        const comment = await Comments.findById(req.params.commentId)
        res.render('EditComments', { logId: req.params.logId, comment })
    } catch(err) {
        console.log(err.message)
        res.send(err.message)
    }
}

module.exports.update = async (req, res) => {
    // update a comment by updating an item in the comments property in log
    try {
        await Comments.findByIdAndUpdate(req.params.commentId, req.body)
    } catch(err) {
        console.log(err.message)
    }
    res.redirect(`/logs/${req.params.logId}`)
}
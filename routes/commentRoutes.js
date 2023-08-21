const express = require('express')

const router = express.Router()

const commentControl = require('../controllers/commentController')

// index
router.get('/:logId', commentControl.index)

// delete
router.delete('/:logId/:commentId', commentControl.delete)

// update
router.put('/:logId/:commentId', commentControl.update)

// create
router.post('/:logId', commentControl.create)

// show
router.get('/:logId/:commentId', commentControl.show)


module.exports = router
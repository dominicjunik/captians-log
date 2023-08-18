const express = require('express')

const router = express.Router()

const logsController = require('../controllers/logsController')


// index
router.get('/', logsController.index)

// new
router.get('/new', logsController.new)

// show
router.get('/:id', logsController.show)

// create
router.post('/', logsController.create)

// edit
router.get('/:id/edit', logsController.edit)
// update
router.put('/:id', logsController.update)
// destroy
router.delete('/:id', logsController.delete)

module.exports = router
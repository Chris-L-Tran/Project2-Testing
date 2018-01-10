const express = require('express')
// const Task = (require('../db/schema'))

const router = express.Router()

router.get('/', (req, res) => {
  res.render('tasks-list')
})

router.get('/agenda', (req, res) => {
  res.render('agenda-list')
})
module.exports = router

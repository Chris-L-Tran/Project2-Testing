const express = require('express')
const Task = (require('../db/schema'))

const router = express.Router()

router.get('/', (req, res) => {
  Task.find({})
    .then((tasks) => {
      res.render('tasks-list', {
        tasks: tasks
      })
    })
    .catch((err) => {
      console.log(err)
    })
})

router.get('/agenda', (req, res) => {
  res.render('agenda-list')
})
module.exports = router

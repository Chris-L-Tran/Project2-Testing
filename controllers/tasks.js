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

router.get('/:name', (req, res) => {
  Task.findOne({name: req.params.title})
    .then((task) => {
      res.render('task-details', {
        task: task
      })
    })
    .catch((err) => {
      console.log(err)
    })
})

router.post('/', (req, res) => {
  res.json(req.body)
})

router.put('/:name', (req, res) => {
  Task.findOneAndUpdate({ name: req.params.title }, req.body.task, { new: true })
    .then((task) => {
      res.redirect(`/tasks/${task.title}`)
    })
    .catch((err) => {
      console.log(err)
    })
})

router.get('/agenda', (req, res) => {
  res.render('agenda-list')
})

module.exports = router

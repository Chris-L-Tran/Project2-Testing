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

router.post('/', (req, res) => {
  if (req.body.task.title === '') { return }
  else {
    Task.create(req.body.task)
      .then((task) => {
        res.redirect(`/tasks`)
      })
      .catch((err) => {
        console.log(err)
      })
  }
})

router.post('/', (req, res) => {
  res.json(req.body)
})

router.get('/:name', (req, res) => {
  Task.findOne({title: req.params.name})
    .then((task) => {
      res.render('task-details', {
        task: task
      })
    })
    .catch((err) => {
      console.log(err)
    })
})

router.put('/:name', (req, res) => {
  Task.findOneAndUpdate({ title: req.params.name }, req.body.task, { new: true })
    .then((task) => {
      res.redirect(`/tasks/${task.title}`)
    })
    .catch((err) => {
      console.log(err)
    })
})

router.delete('/:name', (req, res) => {
  Task.findOneAndRemove({name: req.params.title})
    .then(() => {
      res.redirect('/tasks')
    })
})

router.get('/agenda', (req, res) => {
  res.render('agenda-list')
})

module.exports = router

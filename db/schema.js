const mongoose = require('./connection')

const TaskSchema = new mongoose.Schema({
  title: String
})

const Task = mongoose.model('Task', TaskSchema)

module.exports = Task

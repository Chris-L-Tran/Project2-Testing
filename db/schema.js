const mongoose = require('./connection')

const TaskSchema = new mongoose.Schema({
  title: String
})

// const ListSchema = new mongoose.Schema({
//   title: String,
//   items: [TaskSchema]
// })

const Task = mongoose.model('Task', TaskSchema)
// const List = mongoose.model('List', ListSchema)
module.exports = Task

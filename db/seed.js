const Task = require('./schema')
const seedData = require('./seeds.json')

Task.remove({})
  .then(() => {
    return Task.collection.insert(seedData)
  })
  .then(() => {
    process.exit()
  })

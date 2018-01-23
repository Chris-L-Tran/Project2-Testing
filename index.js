const express = require('express')
const hbs = require('express-handlebars')
const tasks = require('./controllers/tasks')
const methodOverride = require('method-override')
const parser = require('body-parser')

const app = express()

app.use(methodOverride('_method'))
app.use(parser.urlencoded({extended: true}))

app.set('view engine', 'hbs')

app.engine('.hbs', hbs({
  extname: '.hbs',
  partialsDir: 'views/',
  layoutsDir: 'views/',
  defaultLayout: 'layout'
}))

app.use('/assets', express.static('public'))

app.set('port', process.env.PORT || 9000)

app.use('/', tasks)

app.listen(app.get('port'), () => {
  console.log(`Sucessfully listening on PORT: ${app.get('port')}`)
})

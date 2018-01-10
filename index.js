const express = require('express')
const hbs = require('express-handlebars')

const app = express()
app.set('view engine', 'hbs')

app.engine('.hbs', hbs({
  extname: '.hbs',
  partialsDir: 'views/',
  layoutsDir: 'views/',
  defaultLayout: 'layout'
}))

app.use('/assets', express.static('public'))

app.set('port', process.env.PORT || 9000)

app.get('/', (req, res) => {
  res.render('home')
})

app.listen(app.get('port'), () => {
  console.log(`Sucessfully listening on PORT: ${app.get('port')}`)
})

const express = require('express')
const hbs = require('express-handlebars')

const app = express()
app.set('view engine', 'hbs')

app.engine('.hbs', hbs({
  exttname: '.hbs',
  partialsDir: 'views/',
  layoutsDir: 'views/',
  defaultLayout: 'home'
}))

app.set('port', process.env.PORT || 9000)

app.listen(app.get('port'), () => {
  console.log(`Sucessfully listening on PORT: ${app.get('port')}`)
})

const express = require('express')

const app = express()

app.set('port', process.env.PORT || 9000)

app.listen(app.get('port'), () => {
  console.log(`Sucessfully listening on PORT: ${app.get('port')}`)
})

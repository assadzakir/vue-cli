var express = require('express')

var app = express()
app.use(express.static('dist'))

var PORT = process.env.PORT || 5050
app.listen(PORT, function () {
  console.log('Express server listening on port ' + PORT)
})

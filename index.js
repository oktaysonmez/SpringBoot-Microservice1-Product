const express = require('express')
const reminderRoutes = require('./routes/Routes')
const bodyParser = require('body-parser')

const PORT = process.env.PORT || 8006

console.log(PORT)

const app = express()

app.use(bodyParser.json())
app.use('/reminder', reminderRoutes)


app.listen(PORT, () => {
  console.log(`app listening on port ${PORT}`)
})
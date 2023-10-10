const express = require('express')
const app = express()
const tasks = require('./routes/tasks')
//require('./db/connect')
const connectDB = require('./db/connect')
require('dotenv').config()
const notFound = require('./middleware/not-found')

//middleware
app.use(express.static('./public'))
app.use(express.json()) //if we dont use this, then the json request from frontend wont be there in req.body

//routes
app.use('/api/v1/tasks', tasks)

// app.use('*', (req, res) => {
//   res.status(404).send('Route not found')
// })
app.use(notFound)

const port = 3000

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}...`)
    })
  } catch (error) {
    console.log(error)
  }
}

start()

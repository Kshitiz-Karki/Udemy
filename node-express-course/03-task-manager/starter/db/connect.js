const mongoose = require('mongoose')

const connectDB = (url) => {
  return mongoose.connect(url, {
    //below are not required for mongoose v6 and above
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
}

module.exports = connectDB

// mongoose
//   .connect(connectionString, {
//     //below are not required for mongoose v6 and above
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useFindAndModify: false,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log('Connected to DB ...'))
//   .catch((err) => console.log(err))

const mongoose = require('mongoose')
const validator = require('validator')

const bycrpt = require('bcryptjs')

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide name'],
    minlength: 3,
    maxlength: 50,
  },
  email: {
    type: String,
    unique: true,
    required: [true, 'Please provide email'],
    validate: {
      validator: validator.isEmail,
      message: 'Plesae provide valid email',
    },
  },
  password: {
    type: String,
    required: [true, 'Please provide password'],
    minlength: 6,
  },
  role: {
    type: String,
    enum: ['admin', 'user'],
    default: 'user',
  },
})

UserSchema.pre('save', async function () {
  // console.log(this.modifiedPaths())
  // console.log(this.isModified('password'))
  if (!this.isModified('password')) return
  const salt = await bycrpt.genSalt(10)
  this.password = await bycrpt.hash(this.password, salt)
})

UserSchema.methods.comparePassword = async function (pwd) {
  const isMatch = await bycrpt.compare(pwd, this.password)
  return isMatch
}

module.exports = mongoose.model('User', UserSchema)

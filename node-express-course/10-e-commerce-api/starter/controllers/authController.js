const User = require('../models/User')
const { StatusCodes } = require('http-status-codes')
const CustomerError = require('../errors')
const { attachCookiesToResponse, createTokenUser } = require('../utils')

const register = async (req, res) => {
  const { email, name, password } = req.body
  const emailAlreadyExists = await User.findOne({ email })
  if (emailAlreadyExists) {
    throw new CustomerError.BadRequestError('Email already exists')
  }

  //first registered user is an admin
  const isFirstAccount = (await User.countDocuments({})) === 0
  const role = isFirstAccount ? 'admin' : 'user'

  const user = await User.create({ name, email, password, role })

  const tokenUser = createTokenUser(user)
  attachCookiesToResponse({ res, user: tokenUser })

  res.status(StatusCodes.CREATED).json({ user: tokenUser })
}

const login = async (req, res) => {
  const { email, password } = req.body

  if (!email || !password) {
    throw new CustomerError.BadRequestError(
      'Please provide email and password!!'
    )
  }

  const user = await User.findOne({ email })

  if (!user) {
    throw new CustomerError.UnauthenticatedError('Invalid credentials')
  }

  const isPasswordValid = await user.comparePassword(password)

  if (!isPasswordValid) {
    throw new CustomerError.UnauthenticatedError('Invalid credentials')
  }

  const tokenUser = createTokenUser(user)
  attachCookiesToResponse({ res, user: tokenUser })

  res.status(StatusCodes.OK).json({ user: tokenUser })
}

const logout = async (req, res) => {
  res.cookie('token', 'logout', {
    httpOnly: true,
    expires: new Date(Date.now()),
  })
  res.status(StatusCodes.OK).json({ msg: 'User logged out' })
}

module.exports = { register, login, logout }

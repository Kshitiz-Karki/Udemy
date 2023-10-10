const { StatusCodes } = require('http-status-codes')
const path = require('path')
const { captureRejections } = require('stream')
const CustomError = require('../errors')

const uploadProductImage = async (req, res) => {
  //check if the file exists
  if (!req.files) {
    throw new CustomError.BadRequestError('No file uploaded')
  }

  const productImage = req.files.image

  if (!productImage.mimetype.startsWith('image')) {
    throw new CustomError.BadRequestError('Please upload an image')
  }

  const maxSize = 1000

  if (productImage.size > maxSize) {
    throw new CustomError.BadRequestError(
      'Please upload image smaller than 1KB'
    )
  }

  const imagePath = path.join(
    __dirname,
    '../public/uploads/' + `${productImage.name}`
  )
  await productImage.mv(imagePath)

  res
    .status(StatusCodes.OK)
    .json({ image: { src: `/uploads/${productImage.name}` } })
}

module.exports = { uploadProductImage }

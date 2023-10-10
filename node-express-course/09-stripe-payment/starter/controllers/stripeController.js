const stripe = require('stripe')(process.env.STRIPE_KEY)

const stripeController = async (req, res) => {
  const { purcahse, total_amount, shipping_fee } = req.body

  const calculateOrderAmount = () => {
    return total_amount + shipping_fee
  }
  console.log(calculateOrderAmount())
  const paymentIntent = await stripe.paymentIntents.create({
    amount: calculateOrderAmount(),
    currency: 'usd',
  })
  console.log(paymentIntent)
  res.json({ clientSecret: paymentIntent.client_secret })
}
module.exports = stripeController

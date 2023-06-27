const express = require('express');
const chargeRouter = express.Router();
require('dotenv').config();
const { getOrderWithDetailsByOrderId } = require('blank'); // ask jacob 

const Stripe = require('stripe');
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// POST
// Route to process a charge for an order
chargeRouter.post('/', async (req, res, next) => {
  try {
  // Extract the required data from the request body
  const { id, orderCheckOut } = req.body;
  // Retrieve the order details by order ID
const [{ total, id: orderId, details }] = await getOrderWithDetailsByOrderId(orderCheckOut);

// Create an object to store album names and their counts
let toyNames = {};

// Process each detail in the order
details.forEach((detail) => {
  // Format the strike price to include the currency symbol and unit
  detail.strike_price = `$${detail.strike_price / 100}(ea.)`;

  // Count the occurrences of each album name and strike price combination
  toyNames[`${detail.toy_name} ${detail.strike_price}`]
    ? toyNames[`${detail.toy_name} ${detail.strike_price}`]++
    : (toyNames[`${detail.toy_name} ${detail.strike_price}`] = 1);
});

// Convert the album name count object to a string representation
const albumNameCount = Object.entries(toyNames)
  .map((toy) => {
    return toy.join(' x ');
  })
  .join(', ');

// Create a payment using Stripe API
const payment = await stripe.paymentIntents.create({
  amount: total,
  currency: 'USD',
  description: albumNameCount,
  payment_method: id,
  confirm: true,
});

// Send the response with the order ID and payment details
return res.status(200).send({ orderId, payment });
} catch (error) {
  // Pass any errors to the error handler middleware
  return next(error);
  }
  });
  
  module.exports = chargeRouter;
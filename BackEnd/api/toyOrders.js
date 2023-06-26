
const express = require('express');
const ordersRouter = express.Router();
const {
createOrder,
getAllOrders,
getOrdersWithDetailsByUserId,
getOrderWithDetailsByOrderId,
} = require('./../db/orders.js');

/**

GET all orders

Route: /api/toyOrders

Retrieves all orders.
*/
ordersRouter.get('/', async (req, res) => {
try {
const orders = await getAllOrders();

if (!orders || orders.length === 0) {
return res.status(500).send({
name: 'NoOrdersFound',
message: 'There are no orders submitted at this moment.',
});
}

res.send(orders);
} catch (error) {
console.log(error);
res.status(500).send({
name: 'ServerError',
message: 'An error occurred while retrieving the orders.',
});
}
});

/**

GET order details by orderId
Route: /api/toyOrders/details/:orderId
Retrieves the details of an order based on the orderId.
*/
ordersRouter.get('/details/:orderId', async (req, res) => {
if (Object.keys(req.params).length === 0) {
// Check if orderId is provided
return res.status(400).send({
name: 'InformationRequired',
message: 'Please provide an orderId to get the order details.',
});
}
const { orderId } = req.params;

try {
const order = await getOrderWithDetailsByOrderId(orderId);

if (!order || order.length === 0) {
  // Check if order is found
  return res.status(500).send({
    name: 'OrderNotFound',
    message: 'There are no orders under this orderId.',
  });
}

if (req.user.id !== order[0].userId) {
  // Check if the order belongs to the current user
  return res.status(403).send({
    name: 'WrongUser',
    message: 'This order belongs to someone else.',
  });
}

res.send(order);
  

/**

GET orders by userId
Route: /api/orders/user_orders/:userId
Description: Retrieves all orders associated with a specific userId.
*/
ordersRouter.get('/user_orders/:userId', async (req, res) => {
  if (Object.keys(req.params).length === 0) {
  // Check if userId is provided
  return res.status(400).send({
  name: 'InformationRequired',
  message: 'Please provide a userId to get the order details.',
  });
  }
  const { userId } = req.params;
  
  try {
  let orders = await getOrdersWithDetailsByUserId(userId);
  orders = orders.filter(order => req.user.id === order.userId);

if (!orders || orders.length === 0) {
  // Check if orders are found
  return res.status(500).send({
    name: 'OrdersNotFound',
    message: 'There are no orders under this userId.',
  });
}

res.send(orders);
} catch (error) {
  console.log(error);
  res.status(500).send({
  name: 'ServerError',
  message: 'An error occurred while retrieving the orders.',
  });
  }
  });
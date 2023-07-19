const express = require("express");
const router = express.Router();
const usersRouter = require("./users")
const cartRouter = require("./ShoppingCart");
const productsRouter = require("./Products")

router.use('/', (req, res, next) => {
    console.log('request came in to the api router');
    next();
  });

router.use("/cart", cartRouter);
router.use("/Products", productsRouter)

module.exports = router
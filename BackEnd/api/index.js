const express = require("express")
const router = express.Router()


const usersRouter = require("./Users")

const productsRouter = require("./products")

const shoppingCartRouter = require("./ShoppingCart")

router.get("*", (req, res) => {
    res.status(404).send({ message: "Error, can't find that page!"})
})
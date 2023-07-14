const express = require("express")
const router = express.Router()


const usersRouter = require("./users")

const productsRouter = require("./products")
router.use("/Products", productsRouter)

const shoppingCartRouter = require("./ShoppingCart")

router.get("*", (req, res) => {
    res.status(404).send({ message: "Error, can't find that page!" })
})


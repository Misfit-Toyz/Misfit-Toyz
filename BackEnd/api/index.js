const express = require("express")
const router = express.Router()


const usersRouter = require("./users")
const cartRouter = require("./ShoppingCart");
const productsRouter = require("./Products")


router.use("/Products", productsRouter)
router.use("/cart", cartRouter)



router.get("*", (req, res) => {
    res.status(404).send({ message: "Error, can't find that page!"})
})

module.exports = router
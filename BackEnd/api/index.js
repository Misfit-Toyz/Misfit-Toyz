const express = require("express")
const router = express.Router()
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = process.env;
const { getUserById } = require('../db/users');


const usersRouter = require("./Users")

// const productsRouter = require("./products")
// router.use("/Products", productsRouter)

const shoppingCartRouter = require("./ShoppingCart")

router.use(async (req, res, next) => {
    const prefix = 'Bearer ';
    const auth = req.header('Authorization');


    if (!auth) {
        next();
    } else if (auth.startsWith(prefix)) {
        const token = auth.slice(prefix.length);
        try {
            const { id } = jwt.verify(token, JWT_SECRET);
            if (id) {
                req.user = await getUserById(id);
                next();
            }
        } catch ({ name, message }) {
            next({ name, message });
        }
    } else {
        next({
            name: 'AuthorizationHeaderError',
            message: `Authorization token must start with ${prefix}`,
        });
    }
});

router.use('/users', usersRouter);

router.get("*", (req, res) => {
    res.status(404).send({ message: "Error, can't find that page!" })
})




module.exports = router;

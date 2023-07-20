
const router = require('express').Router();
const { models: { blank } } = require('../db'); //ask jacob
const { isUser, isAdmin } = require('./admin');

module.exports = router;

// GET all Toys
router.get('/', async (req, res, next) => {
try {
// Retrieve all styles from the database
const styles = await Toy.findAll();
res.send(styles);
} catch (error) {
next(error);
}
});

// GET Toy by ID
router.get('/:id', async (req, res, next) => {
try {
// Retrieve a Toy by its ID from the database
const style = await Toy.findByPk(req.params.id);
res.status(400).json(style);
} catch (error) {
next(error);
}
});
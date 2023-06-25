const { Client } = require("pg");

const connectionString = process.env.DATABASE_URL || "postgres://localhost:3000/misfitToys";


const client = new Client(connectionString);



module.exports = {
    client,
// ...require("./Users"),
...require("./Products"),
// ...require("./ShoppingCart"),
}
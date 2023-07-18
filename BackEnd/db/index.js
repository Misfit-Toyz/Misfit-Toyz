const { Client } = require("pg");

const connectionString = process.env.DATABASE_URL || "postgres://localhost:3000/misfittoys";


const client = new Client(
    connectionString
    // ssl:
    //     process.env.NODE_ENV === 'production'
    //         ? { rejectUnauthorized: false }
    //         : undefined,
);



module.exports = {
    client,
// ...require("./Users"),
// ...require("./Products"),
// ...require("./ShoppingCart"),
}
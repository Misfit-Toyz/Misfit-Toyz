const { create } = require("domain");
const client = require("./index");

async function dropTables() {
  console.log("dropping all tables");

  await client.query(`
    DROP TABLES IF EXISTS shoppingCart, products, users
    `);
}

async function createTables() {
  console.log("Starting to build tables");

  // products needs IMAGE
  //shoppingCart needs products

  await client.query(`
    CREATE TABLE users(
        userId SERIAL PRIMARY KEY,
        username VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        "isAdmin" BOOLEAN DEFAULT false
        ); CREATE TABLE products(
            productId SERIAL PRIMARY KEY,
            title VARCHAR(255) UNIQUE NOT NULL,
            description TEXT NOT NULL,
            
            price INTEGER, 
        ) CREATE TABLE shoppingCart(
            cartID SERIAL PRIMARY KEY REFERNCES users(userId),
            
            quantity INTEGER,
        )
    )
    `);
}

async function rebuildDB() {
  try {
    await dropTables();
    await createTables();
  } catch (error) {
    console.log("Error during rebuildDB");
  }
}

module.exports = {
  rebuildDB,
  dropTables,
  createTables,
};

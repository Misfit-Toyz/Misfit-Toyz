const { client } = require("./index");
const { addToCart, getCart, deleteItem } = require("./ShoppingCart");

async function dropTables() {
  console.log("dropping all tables");

  await client.query(`
    DROP TABLE IF EXISTS cartItems, shoppingCart, products, users CASCADE
    `);
  console.log("finished dropping tables")
}

async function createTables() {

  try{
    console.log("Starting to build tables");
    await client.query(`
      CREATE TABLE users (
        userId SERIAL PRIMARY KEY,
        username VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL
      );
        CREATE TABLE products (
          productId SERIAL PRIMARY KEY,
          title VARCHAR(255) UNIQUE NOT NULL,
          description TEXT NOT NULL,
          
          price INTEGER
      ); 
      CREATE TABLE shoppingCart(
        cartId SERIAL PRIMARY KEY,
        "ownerId" INTEGER REFERENCES users ( userId )
      );
      CREATE TABLE cartItems(
        cartItemId SERIAL PRIMARY KEY,
        "shoppingId" INTEGER REFERENCES shoppingCart ( cartId ),
        "itemId" INTEGER REFERENCES products ( productId ),
        quantity INTEGER
    );
    `);
    console.log("finished building tables")
} catch(error) {
  console.log("error building tables", error);
}}

async function rebuildDB() {
  try {
    await dropTables();
    await createTables();
    await addToCart(1);
    await getCart(1);
    await deleteItem(1);
  } catch (error) {
    console.log("Error during rebuildDB", error);
  }
}

module.exports = {
  rebuildDB,
  dropTables,
  createTables,
};

const {client} = require("./index")
const {rebuildDB} = require("./SeedData")

client.connect()
  .then(rebuildDB)
  .catch(console.error)
  .finally(() => client.end());
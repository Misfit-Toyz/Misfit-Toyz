

const client = require("./index")
const {rebuildDB} = require("./SeedData")

rebuildDB()
    .catch(console.error)
    .finally(() => client.end())
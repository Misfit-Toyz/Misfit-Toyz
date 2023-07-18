const express = require('express');
const morgan = require('morgan');
const router = require('./BackEnd/api');
const { client } = require('./BackEnd/db/index');

const app = express();
const PORT = process.env.DATABASE_URL || 3000;

// logging middleware
app.use(morgan('dev'));

// Passing any request that fuzzy-matches '/api' to the api router
app.use('/api', router);

app.listen(PORT, () => {
    // ***** connecting to the Postgres Database when we start the server!! *****
    client.connect();
    //^^^^^^^^^^^^^^^^  *****
    console.log(`Server is up and running on port ${PORT}!`)
})



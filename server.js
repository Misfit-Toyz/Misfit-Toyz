const express = require('express');
const cors = require('cors');
const app = express();
const morgan = require('morgan');
const router = require('./BackEnd/api')
const {client} = require('./BackEnd/db');

const PORT = process.env.PORT || 3000
app.use(cors());
app.use(morgan('dev'))
app.use(express.json());

app.use('/api', router)

app.listen(PORT, () => {
    client.connect();
    console.log(`Mixing it up on port ${PORT}`
)})
 
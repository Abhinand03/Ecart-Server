require('dotenv').config()
const express = require('express')
const cors = require('cors')
require('./connections/connection')
const router = require('./Routes/routes')

const ekart = express()
ekart.use(cors())
ekart.use(express.json())
ekart.use(router)

PORT = 3000 || process.env.PORT

ekart.listen(PORT, () => {
    console.log(`Ekart Server running at PORT:${PORT}`);
})

ekart.get('/', (req, res) => {
    res.send(`<h1>Ekart Server is Active!! Waiting for requests!!!</h1>`);
})
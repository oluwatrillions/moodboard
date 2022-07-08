const express = require('express')
const app = express()
const cors = require('cors')
const dotenv = require('dotenv')
const ConnectDB = require('./models/DBConnect.js')

ConnectDB()

app.use(cors())
dotenv.config({ path: './config/.env' })

app.use('/register', require('./routes/register'))


app.listen(process.env.PORT, () => {
    console.log(`server is up on port ${process.env.PORT}`);
})
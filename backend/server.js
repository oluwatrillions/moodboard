const express = require('express')
const app = express()
const cors = require('cors')
const dotenv = require('dotenv')
const ConnectDB = require('./models/DBConnect')
dotenv.config({ path: './config/.env' })


ConnectDB();


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/register', require('./routes/register'))
app.use('/users', require('./routes/users'))
app.use('/login', require('./routes/login'))


app.listen(process.env.PORT, () => {
    console.log(`server is up on port ${process.env.PORT}`);
})
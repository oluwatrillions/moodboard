const express = require('express')
const app = express()
const cookieParser = require('cookie-parser')
const cors = require('cors')
const corsOptions = require('./config/corsOptions')
const credentials = require('./middleware/credentials')
const dotenv = require('dotenv')
dotenv.config({ path: './config/.env' })
const verifyJWT = require('./middleware/verifyJWT')


const ConnectDB = require('./models/DBConnect')
ConnectDB();

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cookieParser())
app.use(credentials)
app.use(cors(corsOptions))


app.use('/register', require('./routes/register'))
app.use('/auth', require('./routes/auth'))
app.use('/posts', require('./routes/posts/posts'))
app.use('/post', require('./routes/posts/post'))

app.use(verifyJWT)
app.use('/users', require('./routes/users'))


app.listen(process.env.PORT, () => {
    console.log(`server is up on port ${process.env.PORT}`);
})
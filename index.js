require('dotenv').config()
const cors = require('cors')
const runServer = require('./src/config/server.config')
const app = require('./app')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
}))

app.use(cookieParser())
app.use(bodyParser.json(
    {
    extended: true,
    limit: '100mb'
    }
))

runServer()
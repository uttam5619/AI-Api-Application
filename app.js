const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const appRouter = require('./src/routes/app.route')

const app = express();

app.use(cors({
    origin: '*',
    methods: ['GET', 'POST'],
    credentials: true,
}))

app.use(cookieParser())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json({limit: '100mb'}))
app.use(express.urlencoded({extended: true}))


app.use('/app',appRouter);


module.exports = app
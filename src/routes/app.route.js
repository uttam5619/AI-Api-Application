const express = require('express')
const authRouter = require('./v1/auth.route')
const userRouter = require('./v1/user.route')

const appRouter = express.Router()

appRouter.use('/app/v1/auth', authRouter)
appRouter.use('/app/v1/user', userRouter)




module.exports = appRouter
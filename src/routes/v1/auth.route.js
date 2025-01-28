const {signIn, signOut, signUp, forgetPassword, resetPassword} = require('../../controller/auth.controller')
const authRouter = require('express').Router()

authRouter.post('/signUp', signUp)
authRouter.post('/signIn', signIn)
authRouter.post('/signOut', signOut)
authRouter.post('/forget-password', forgetPassword)
authRouter.post('/reset-password', resetPassword)


module.exports = authRouter
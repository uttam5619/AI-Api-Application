const {signIn, signOut, signUp, forgetPassword, resetPassword} = require('../../controller/auth.controller')
const authRouter = require('express').Router()

authRouter.post('/signup', signUp)
authRouter.post('/signin', signIn)
authRouter.post('/signout', signOut)
authRouter.post('/forget-password', forgetPassword)
authRouter.post('/reset-password', resetPassword)


module.exports = authRouter
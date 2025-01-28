const {signIn, signOut, signUp, forgetPassword, resetPassword} = require('../../controller/auth.controller')
const authRouter = require('express').Router()
const {registerValidationRules, userLoginRules} = require('../../utils/validation')


authRouter.post('/signUp', registerValidationRules, signUp)
authRouter.post('/signIn', userLoginRules, signIn)
authRouter.post('/signOut', signOut)
authRouter.post('/forget-password', forgetPassword)
authRouter.post('/reset-password', resetPassword)


module.exports = authRouter
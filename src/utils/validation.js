const { body } = require('express-validator')
const User = require('../models/user.model')

//validations using express-validators.
const registerValidationRules = [
    
    body('name')
    .notEmpty()
    .withMessage('name is required')
    .trim(),

    body('email')
    .isEmail()
    .withMessage('email is required')
    .custom(
        async (email)=> {
            const existingUser= await User.findOne({ email: email })
            if(existingUser){
                throw new Error('Email already in use')
            }
            return true;
        }
    ),

    body('password')
    .isLength({ min: 6 })
    .withMessage('password having atleast 6 characters is required')
    
]

const userLoginRules = [

    body('email')
    .notEmpty()
    .withMessage('email is required')
    .trim(),

    body('password')
    .notEmpty()
    .withMessage('password is required')
    .trim()

]

module.exports = {
    registerValidationRules,
    userLoginRules,
}
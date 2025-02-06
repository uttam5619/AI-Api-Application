const bcrypt = require('bcryptjs')
const AuthService = require('../service/auth.service')
const AuthRepository = require('../repository/auth.repository')
const UserService = require('../service/user.service')
const UserRepository = require('../repository/user.repository')
const { getMaxListeners } = require('../models/user.model')



const authService = new AuthService(new AuthRepository())
const userService = new UserService(new UserRepository())


const signUp = async (req, res) => {

    try{

        const { name, email, password } = req.body
        if(!name || !email || !password){
            return res.status(400).json(
                {
                    success:false,
                    message: 'All fields are required'
                }
            )
        }

        const doesUserExist = await userService.getTheUser(email)
        if(doesUserExist){
            return res.status(400).json(
                {
                    success:false,
                    message: 'User already exists'
                }
            )
        }
        const newUser = await authService.signupService(name, email, password)
        return res.status(200).json(
            {
                success: true,
                message: 'User created successfully',
                userDetails: newUser
            }
        )
        
        
    }catch(err){
        console.log(err)
        return res.status(400).json(
            {
                success: false,
                message: 'An error occurred while signing up'
            }
        )
    }
}


const signIn = async (req, res) => {
    try{
        const { email, password } = req.body
        if(!email || !password){
            return res.status(400).json(
                {
                    success:false,
                    message: 'All fields are required'
                }
            )
        }

        const doesUserExist = await userService.getTheUser(email,password)
        if(!doesUserExist){
            return req.status(400).json(
                {
                    success:false,
                    message: 'The user does not exist'
                }
            )
        }


    }catch(err){
        console.log(err.message)
    }
}


const signOut = async () => {
    await authService.signOutService()
}

const forgetPassword = async (req, res) => {

}

const resetPassword = async (req, res) => {

}


module.exports ={
    signUp,
    signIn,
    signOut,
    forgetPassword,
    resetPassword
}
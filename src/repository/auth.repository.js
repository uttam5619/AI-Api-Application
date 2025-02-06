const User = require('../models/user.model')


class AuthRepository {

    async signUpRepository(name, email, password){
        try{
            const newUser = await User.create({
                name,
                email,
                password
            })
            await newUser.save();
            return newUser;
        }catch(err){
            console.log(`Error in auth repository ${err.message}`);
        }
    }

    async signInRepository(email){
        try{
            const registeredUser = await User.findOne(email).select('-password')
            return registeredUser
        }catch(err){
            console.log(err.message)
        }
        
    }

    async signOutRepository(){

    }

    async forgetPasswordRepository(){

    }

    async resetPasswordRepository(){

    }
    
}

module.exports= AuthRepository;
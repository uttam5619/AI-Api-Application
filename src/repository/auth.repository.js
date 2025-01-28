const User = require('../models/user.model')


class AuthRepository {

    async signUpRepository(name, email, password){
        try{
            const newUser = new User({
                name,
                email,
                password
            })
            await newUser.save();
            return newUser;
        }catch(err){
            console.log(err.message);
        }
    }

    async signInRepository(){

    }

    async signOutRepository(){

    }

    async forgetPasswordRepository(){

    }

    async resetPasswordRepository(){

    }
    
}

module.exports= AuthRepository;
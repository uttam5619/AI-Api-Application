
const cookieOptions ={
    httpOnly: true,
    secure: true,
    maxAge: 7*24*60*60*1000
}


class AuthService{

    constructor(authRepository){
        this.authRepository = authRepository;
    }
    
    async signupService(name,email,password){
        try{
            // first sanitize the data before sending it to the repository layer
            const newUser = await this.authRepository.signUpRepository(name, email, password);
            console.log(newUser);
            const token = await newUser.generateAccessToken()
            res.cookie('token', token, cookieOptions)
            return newUser;
        }catch(err){
            console.log(err.message);
        }
    }

    async signInService(email,password){
        try{
            const user = await this.authRepository.signInRepository(email)
            if(!user){
                return req.status(400).send(
                    {
                        success: false,
                        message: 'Invalid email'
                    }
                )
            }
            user.comparePassword(password)
            const token = await user.generateAccessToken()
            request.cookie('token', token, cookieOptions)
            return user
        }catch(err){
            console.log(err.message);
        }
    }

    async signOutService(){
        res.cookie('token', null, cookieOptions)
        return res.status(200).json(
            {
                success:true,
                message:'logOut successfully'
            }
        )
    }

    async forgetPasswordService(){

    }

    async resetPasswordService(){

    }
}

module.exports = AuthService;
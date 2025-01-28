

class AuthService{

    constructor(authRepository){
        this.authRepository = authRepository;
    }
    
    async signupService(name,email,password){
        try{
            // first sanitize the data before sending it to the repository layer
            const newUser = await authRepository.signUpRepository(name, email, password);
            return newUser;
        }catch(err){
            console.log(err.message);
        }
    }

    async signInService(){

    }

    async signOutService(){

    }

    async forgetPasswordService(){

    }

    async resetPasswordService(){

    }
}

module.exports = AuthService;
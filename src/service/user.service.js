

class UserService {
    
    constructor(userRepository){
        this.userRepository = userRepository;
    }

    async getTheUser(email){
        try{
            // sanitize the email
            const user = await this.userRepository.getTheUser(email)
            return user;
        }catch(err){
            console.log(`An error occured while fetching user details at userService level ${err.message}`)
        }
    }

    async getAllTheUsers(){
        try{
            const users = await this.userRepository.getAllTheUsers();
            return users;
        }catch(err){
            console.log(`An error occured while tfetching allUser details at userService ${err.message}`)
        }
    }

    async updateTheUser(){
        try{

        }catch(err){
            console.log(`An error occured while updating user at userService ${err.message}`)
        }
    }

    async deleteTheUser(){
        try{

        }catch(err){
            console.log(`An error occured while deleting user at userService ${err.message}`)
        }
    }
}
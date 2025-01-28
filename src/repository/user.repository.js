const User = require('../models/user.model')

class UserRepository {

    async getTheUser(email){
        try{
            const user =await User.findOne(email)
            if(!user){
                return response.status(404).json(
                    {
                        success: false,
                        message: 'User not found'
                    }
                )
            }
            return user
        }catch(err){
            console.log(`An error occured while fetching user from database at repository layer ${err.message}`)
        }
    }

    async getAllTheUsers(){

        try{

           const pageNumber = require.qurey.page || 1
           const pageSize = 10
           const totalUsers = await User.countDocuments()
           const totalPages = Math.ceil(totalUsers/pageSize)

           if(pageNumber > totalPages){
                return res.status(400).json(
                    {
                        success: false,
                        message: 'Invalid page number'
                    }
                )
           }
           const users = await User.find().skip((pageNumber-1)*pageSize).limit(pageSize).exec()
           if(!users){
                return res.status(404).json(
                    {
                        success: false,
                        message: 'No users found'
                    }
                )
           }
           return res.status(200).json({
                success: true,
                users: users,
                pageNumber: pageNumber,
                usersInAPage: pageSize,
                totalPages: totalPages
           })

        }catch(err){
            console.log(`An error occured while fetching users from database at repository layer ${err.message}`)
        }
    }

    async updateTheUser(req){
        try{
            const {id} = req.params
            const user = await User.findOne(id)
            if(!user){
                return response.status(404).json(
                    {
                        success: false,
                        message: 'User not found'
                    }
                )
            }
            const updatedUser = await User.findByIdAndUpdate(
                id,
                {
                    $set: req.body
                },
                {
                    runValidators: true,
                }
            )
            return res.status(200).json(
                {
                    success: true,
                    message: 'User updated successfully',
                    user: updatedUser
                }
            )
        }catch(err){
            console.log(`An error occured while updating user at repository layer ${err.message}`)
        }
    }

    async deleteTheUser(req){
        try{
            const {id} = req.params
            const user = await User.findById(id)
            if(!user){
                return response.status(404).json(
                    {
                        success: false,
                        message: 'User not found'
                    }
                )
            }
            await User.findByIdAndDelete(id)
            return res.status(200).json(
                {
                    success: true,
                    message: 'User deleted successfully'
                }
            )
        }catch(err){
            console.log(`An error occured while deleting user at repository layer ${err.message}`)
        }
    }
}

module.exports= UserRepository;
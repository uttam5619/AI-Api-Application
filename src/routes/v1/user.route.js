const { getUser, getUsers, updateUser, deleteUser } = require('../../controller/user.controller');
const userRouter = require('express').Router();

userRouter.get('/:userId', getUser)
userRouter.get('/', getUsers)
userRouter.put('/:userId', updateUser)
userRouter.post('/:userId', deleteUser)

module.exports = userRouter
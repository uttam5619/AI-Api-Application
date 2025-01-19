const { Schema, model } = require('mongoose');


const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    },
    role:{
        enum: ['admin', 'user'],
        default: 'user'
    }
},{timestamps: true})

const User = model('User', userSchema)
module.exports = User
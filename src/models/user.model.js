const { Schema, model } = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


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
        type: String,
        enum: ['admin', 'user'],
        default: 'user'
    }
},{timestamps: true})

userSchema.pre('save', async function(next){
    if(!this.isModified('password'))
        return next()
    this.password= await bcrypt.hash(this.password, 10)
    next()
})

userSchema.methods = {

    generateAccessToken: async function(){

        const accessToken = await jwt.sign(
            {id:this._id, name: this.name, email: this.email},
            process.env.ACCESS_TOKEN,
            {expiresIn: '5m'}
        )
        return accessToken
    },

    comparePassword: async function(password){
        return await bcrypt.compare(password, this.password)
    }

}

const User = model('User', userSchema)
module.exports = User
const mongoose = require('mongoose');

const { MONGO_URI } = process.env

const connectDB = async ()=>{
    
    try{
        await mongoose.connect(MONGO_URI)
        console.log('Database connected successfully')
    }catch(err){
        console.log('Database connection failed')
        console.log(err.message)
        process.exit(1)
    }
    
}

module.exports = connectDB;
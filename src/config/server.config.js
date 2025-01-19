const server = require('../../app')
const connectDB = require('./db.config')

const port = process.env.PORT || 4256
const runServer = ()=>{
    try{
        server.listen(port, ()=>{
            connectDB()
            console.log(`Server running on port ${port}`)
        })
    }catch(err){
        console.log(err.message)
    }
}


module.exports = runServer;
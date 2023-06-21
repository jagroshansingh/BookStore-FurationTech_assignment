const mongoose=require('mongoose')

const AuthSchema=mongoose.Schema({},{strict:false})

const AuthModel=mongoose.model('auth',AuthSchema)

module.exports={AuthModel}
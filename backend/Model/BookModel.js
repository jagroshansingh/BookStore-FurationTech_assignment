const mongoose=require('mongoose')

const bookSchema=mongoose.Schema({},{strict:false})

const bookModel=mongoose.model('store',bookSchema)

module.exports={bookModel}
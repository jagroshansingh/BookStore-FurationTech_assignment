const express=require('express')
const { bookModel } = require('../Model/BookModel')

const bookRouter=express.Router()

bookRouter.get('/all',async(req,res)=>{
    try {
        let allbooks=await bookModel.find({})
        res.send(allbooks)
    } catch (error) {
        res.send(error)
    }
})

module.exports={bookRouter}
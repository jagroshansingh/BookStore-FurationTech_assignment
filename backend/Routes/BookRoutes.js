const express=require('express')
const { bookModel } = require('../Model/BookModel')

const bookRouter=express.Router()

bookRouter.get('/',async(req,res)=>{
    //console.log(req.query)
    const genre=req.query.genre;
    const edition=req.query.edition;
    const price=+req.query.price;
    const sort=req.query.sort
    try {
        let obj={}
        if(genre) obj.genre={$in:genre}
        if(edition) obj.edition={$in:edition}
        if(price) obj.cost={$lte:price}
        // console.log(obj)
        let found;
        if(sort) found=await bookModel.find(obj).sort({'cost':sort=='asc'?1:-1})
        else found=await bookModel.find(obj)
        res.send(found)
    } catch (error) {
        res.send(error)
    }
})

module.exports={bookRouter}
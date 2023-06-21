const express=require('express') 
const app=express()
require('dotenv').config()

app.listen(process.env.port,()=>{
    console.log(`Server is running at port ${process.env.port}`)
})
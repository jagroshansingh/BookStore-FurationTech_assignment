const express=require('express') 
const { connection } = require('./db')
const { bookRouter } = require('./Routes/BookRoutes')
const app=express()
require('dotenv').config()
const cors=require('cors')

app.use(cors())
app.use(express.json())
app.use('/books',bookRouter)

app.listen(process.env.port,async()=>{
    try {
        await connection
        console.log('DB connection success')
    } catch (error) {
        console.log('DB connection failed')
    }
    console.log(`Server is running at port ${process.env.port}`)
})
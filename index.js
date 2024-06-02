
require('dotenv').config()

const express=require('express')

const cors=require('cors') 

const router=require("./Routes/routes")


// creating Server instance

const ggServer=express()

require('./DB/connection')


//configuaring server into cors

ggServer.use(cors())

ggServer.use(express.json())

ggServer.use(router)

ggServer.use('/Uploads',express.static('./Uploads'))
const PORT=3002

ggServer.listen(PORT,()=>{
    console.log(`Server is running at:${PORT}`);
})

ggServer.get("/",(req,res)=>{
    res.status(200).send("<h1>request hit successfully!</h1>")
})
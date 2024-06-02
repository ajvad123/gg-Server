const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({

    fulname: {
        type: String,
        required: true
    },
     username: {
        type: String,
        required: true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    condactMail:{
        type:String
    }

})

const users=mongoose.model("users",userSchema)

module.exports=users
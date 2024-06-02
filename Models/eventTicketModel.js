const mongoose = require('mongoose')


const ticketSchema= new mongoose.Schema({

    Ename:{

        type:String,
        required:true,


    },
    Sname:{
        type:String,
        required:true,

    },
    Email:{

        type:String,
        required:true,
        

    },
    Eticket:{

        type:String,
        required:true,
        

    }


})

const tickets = mongoose.model("tickets",ticketSchema)

module.exports=tickets
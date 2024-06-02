const mongoose = require('mongoose')


const bookingSchema= new mongoose.Schema({

    Cname:{

        type:String,
        required:true,


    },
    Cdate:{
        type:String,
        required:true,

    },
    Email:{

        type:String,
        required:true,
        

    },
    Clocation:{

        type:String,
        required:true,

    }
    ,
    Ename:{

        type:String,
        required:true
    }


})


const bookings=mongoose.model("bookings",bookingSchema)

module.exports=bookings
const mongoose = require('mongoose')

const eventSchema = new mongoose.Schema({

    etitle: {
        type: String,
        required: true,
        unique:true

    },
    etype: {
        type: String,
        required: true
    },
    elocation: {
        type: String,
        required: true
    },
    etime: {
        type: String,
        required: true

    },
    eticket: {
        type: String,
        required: true
    },
    eimage: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true
    }

})

 const events=mongoose.model("events",eventSchema)

 module.exports=events
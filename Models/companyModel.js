const mongoose = require('mongoose')

const companySchema = mongoose.Schema({

    ctitle: {
        type: String,
        required: true
    },
    cdescription: {
        type: String,
        required: true
    }, clocation: {
        type: String,
        required: true
    }, ccontact: {
        type: String,
        required: true
    }, clink: {
        type: String,
        required: true
    }, cimage: {
        type: String,
        required: true
    },
    userId :{
        type: String,
        required: true

    }
})


const companies= mongoose.model("companies", companySchema)
module.exports = companies
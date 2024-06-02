const mongoose = require('mongoose')

const connectionString = process.env.DATABASE

mongoose.connect(connectionString).then(() => {
    console.log("MongoDB Atlas Connection Sucsessfully...!");
}).catch((err) => {
    console.log("mongoDB Atlas Connection Failed!! ");
    console.log(err);
})




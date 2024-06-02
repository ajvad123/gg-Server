const users = require('../Models/userModel');
const jwt = require('jsonwebtoken')

exports.userRegistration = async (req, res) => {

   console.log(req.body);
   const { username, password, email, fulname } = req.body

   console.log(username, fulname, email, password);
   console.log("Inside Registration Function");


   try {

      const existingUser = await users.findOne({ email })

      if (existingUser) {


         res.status(401).json("User Already Existing")

      } else {
         const newUser = new users({
            username, fulname, email, password ,condactMail:""
         })
         await newUser.save()
         res.status(201).json(newUser)
      }


   }

   catch (err) {

      res.status(404).json(err)

   }






}


exports.userLogin = async (req, res) => {

   const { email, password } = req.body

   const existingUser = await users.findOne({ email, password })

   if (existingUser) {

      const token = jwt.sign({ email: existingUser.email, password: existingUser.password ,userId:existingUser._id },process.env.secret_key)

      const rest={token,user:existingUser.username}

      console.log(token);

      res.status(200).json(rest)

   } else {
      res.status(404).json("invalid username and password")
   }
}
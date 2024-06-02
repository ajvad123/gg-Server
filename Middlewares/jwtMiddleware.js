
const jwt = require('jsonwebtoken')

const jwtMiddlewareFun = async (req, res, next) => {

   console.log("inside middleware");

   try{
      const token = req.headers.authorization.split(" ")[1]

      if (token) {
   
         const result = jwt.verify(token, process.env.secret_key)
         console.log(result);
         req.payload=result.userId
         next()
   
      }else{
         res.status(406).json("Please Login First")
      }
   

   }catch{
      res.status(406).json("Please Login")
   }
 
}

module.exports = jwtMiddlewareFun
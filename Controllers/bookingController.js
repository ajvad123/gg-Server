const bookings = require('../Models/companyBooking')
const {companyHtmlMail} =require('../Email/companyHtmlMail')
const { eventMail } =require('../Email/eventMail')

exports.companyBooking = async (req, res) => {

   const { Cname, Cdate, Email, Clocation,Ename } = req.body

   const userId = req.payload

   try {

      const CompanyBooking = new bookings({

         Cname, Cdate, Email, Clocation ,Ename
      })

      await CompanyBooking.save()
      eventMail(Email,"its working","",companyHtmlMail({Cname,Ename,Cdate,Clocation}))
      res.status(200).json(CompanyBooking)

   }catch(err){

      console.log(err);
   }


}
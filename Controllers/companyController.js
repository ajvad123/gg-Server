const companies = require('../Models/companyModel')
const { options } = require('../Routes/routes')


exports.addCompany = async (req, res) => {


  const userId = req.payload
  const { ctitle, cdescription, clocation, ccontact, clink } = req.body
  const cimage = req.file.filename


  try {

    const existingCompany = await companies.findOne({ ctitle })

    if (existingCompany) {
      res.status(404).json("Company Already Existing")
    } else {

      const newCompany = new companies({
        ctitle, cdescription, clocation, ccontact, clink, cimage, userId
      })
      await newCompany.save()
      res.status(200).json(newCompany)

    }


  } catch (err) {
    console.log(err);
    res.status(406).json(err)
  }



}


exports.allCompanies = async (req, res) => {

  const result = await companies.find()

  try {
    if (result) {

      res.status(200).json(result)

    }
    else {
      res.status(404).json("no companies")
    }

  } catch (err) {
    res.status(404).json(err)
  }



}
exports.dashCompany = async (req, res) => {

  try {
    const result = await companies.find().limit(3)
    console.log(result);
    if (result) {

      res.status(200).json(result)

    } else {
      res.status(404).json("No Companies Available")
    }

  } catch (err) {
    res.status(404).json(err)
  }

}

exports.dashAllCompany = async (req, res) => {

  console.log(req.query);

  const search=req.query.search

  try {

    const query = {
      ctitle:{$regex:search,$options:'i'}
    }
    const result = await companies.find(query)
    // console.log(result);
    if (result) {

      res.status(200).json(result)

    } else {
      res.status(404).json("No Companies Available")
    }

  } catch (err) {
    res.status(404).json(err)
  }

}

exports.updateCompany = async (req, res) => {

  const { ctitle, cdescription, clocation, ccontact, clink, cimage } = req.body
  const user_id = req.payload
  const image = req.file ? req.file.filename : cimage
  const { pid } = req.params


  try {
    const editCompany = await companies.findByIdAndUpdate({ _id: pid }, { ctitle, cdescription, clocation, ccontact, clink, cimage: image, user_id }, { new: true })


    await editCompany.save()

    res.status(200).json(editCompany)


  }
  catch(err){
    console.log(err);

    res.status(404).json(err)

  }
    

}

exports.removeCompany=async(req,res)=>{

  const {pid} =req.params

  try{

    const result=await companies.findByIdAndDelete({_id:pid})

    res.status(200).json(result)

  }catch(err){
    console.log(err);
    res.status(404).json(err)
  }


}

const express=require('express')
const userController=require("../Controllers/userController")
const eventController=require("../Controllers/eventController")
const router=express.Router()
const  jwtMiddleware=require('../Middlewares/jwtMiddleware')
const  multerConfig=require("../Middlewares/multerMiddleware")
const companyController=require("../Controllers/companyController")
const updateEvents=require('../Controllers/eventController')
const updateCompany=require('../Controllers/companyController')
const removeEvents=require('../Controllers/eventController')
const removeCompany=require("../Controllers/companyController")
const bookTickets=require("../Controllers/eventTicketController") 
const companyBooking=require("../Controllers/bookingController")



router.post("/register",userController.userRegistration)
router.post("/login",userController.userLogin)
router.post("/addevent",jwtMiddleware,multerConfig.single("eimage"),eventController.addEvents)
router.post("/addcompany",jwtMiddleware,multerConfig.single("cimage"),companyController.addCompany)
router.get("/allEvents",jwtMiddleware,eventController.allEvents)
router.get("/allCompanies",jwtMiddleware,companyController.allCompanies)
router.get("/dashEvents",jwtMiddleware,eventController.dashEvents)
router.get("/dashCompanies",jwtMiddleware,companyController.dashCompany)
router.get("/dashAllEvents",jwtMiddleware,eventController.dashAllEvents)
router.get("/dashAllCompanies",jwtMiddleware,companyController.dashAllCompany)
router.put("/EditEvents/:pid",jwtMiddleware,multerConfig.single("eimage"),updateEvents.updateEvents)
router.put("/EditCompanies/:pid",jwtMiddleware,multerConfig.single("cimage"),updateCompany.updateCompany)
router.delete("/removeEvents/:pid",jwtMiddleware,removeEvents.removeEvents)
router.delete("/removeCompanies/:pid",jwtMiddleware,removeCompany.removeCompany)
router.post("/eventTicket",jwtMiddleware,bookTickets.bookTicket)
router.post("/bookCompany",jwtMiddleware,companyBooking.companyBooking)
















module.exports=router



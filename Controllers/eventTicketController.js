const { eventMail } = require('../Email/eventMail');
const tickets = require('../Models/eventTicketModel')
const {eventHtmlMail}=require('../Email/eventHtmlMail')


exports.bookTicket = async (req, res) => {

    const { Ename,Sname , Email, Eticket } = req.body

    userId = req.payload;

    try {

        const ticketBooking = new tickets({

            Ename,Sname, Email, Eticket 
        })

        await ticketBooking.save()

        eventMail(Email,"","",eventHtmlMail({Ename,Sname}))
        res.status(200).json(ticketBooking)


    } catch (err) {
        console.log(err);
        res.status(404).json(err)
    }




}

exports.companyHtmlMail = ({Cname,Ename,Cdate,Clocation}) => {

    return (

        ` <div class="container">
        <div class="content">
            <h1>Booking Confirmation</h1>
            <p>Dear ${Cname},</p>
            <p>Thank you for booking with us. We are thrilled to have you at our upcoming event. Here are the details of your booking:</p>
            <div class="details">
                <p><strong>Event Name:</strong> ${Ename}</p>
                <p><strong>Date:</strong> ${Cdate}</p>
                <p><strong>Location:</strong> ${Clocation}</p>
            </div>
            <p>If you have any questions or need further assistance, please do not hesitate to contact us at ph:7510527810.</p>
            <p>We look forward to seeing you at the event!</p>
            <p>Best regards</p>
        </div>
        <div class="footer">
            <p>&copy; 2024. All rights reserved.</p>
        </div>
    </div>`



    )
}
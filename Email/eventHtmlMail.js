exports.eventHtmlMail = ({Ename,Sname}) => {
    return (
        `
     <div class="container">
        <div class="header">
            <h1>Ticket Confirmation</h1>
        </div>
        <div class="content">
            <p>Dear ${Ename},</p>
            <p>Thank you for your purchase! Your ticket for ${Sname} has been confirmed.</p>
            <p>Please click the button below to download your ticket:</p>
            <p style="text-align: center;">
                <a href="https://i.pinimg.com/originals/0c/25/b5/0c25b5145fcf9384f5cfea516b355153.png" class="button">Download Ticket</a>
            </p>
        </div>
        <div class="footer">
            <p>If you have any questions, feel free to <a href="mailto:support@example.com">contact us</a>.</p>
            <p>&copy; 2024 . All rights reserved.</p>
        </div>
    </div> `
    )
}
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    
    service:"gmail",
    host: "smpt.gmail.com",
    port:465,
    secure:true,
    auth: {
        user: "mohammadajvad5@gmail.com",
        pass: "krfrumcjnsyzqqos",
    },
});

// async..await is not allowed in global scope, must use a wrapper
async function eventMail(to, subject, text, html) {
    // send mail with defined transport object
    const info = await transporter.sendMail({
        from: 'mohammadajvad5@gmail.com', // sender address
        to,
        subject,
        text,
        html
    });

}

module.exports = { eventMail }
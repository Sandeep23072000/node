const nodemailer = require('nodemailer');
const transport = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: '587',
    secure: false,
    requireTLS: true,
    auth: {
        user: 'sainiviv9672@gmail.com',
        pass: 'vivek@2002'
    }
});
const mailOptions = {
    from: 'sainiviv9672@gmail.com',
    to: 'ssanini70@gmail.com',
    subject: 'hello',
    text: 'hiiiiiiiii'
}

transport.sendMail(mailOptions, function (error, info) {
    if (!error) {
        console.log('email sent', info.response);
       
    }
    else {
        console.error('email not sent');
    }
});
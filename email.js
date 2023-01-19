// const nodemailer = require('nodemailer');
// const transport = nodemailer.createTransport({
//     host: 'smtp.gmail.com',
//     port: '2525',
//     secure: false,
//     requireTLS: true,
//     auth: {
//         user: 'sainiviv9672@gmail.com',
//         pass: 'vivek@2002'
//     }
// });
//  mailOptions = {
//     from: 'sainiviv9672@gmail.com',
//     to: 'ssanini70@gmail.com',
//     subject: 'hello',
//     text: 'hiiiiiiii'
// }

// transport.sendMail(mailOptions, function (error, info) {
//     if (error) {
//         console.error('email not sent');
//     }
//     else {
//         console.log('email sent', info.response);
//     }
// });


const nodemailer = require('nodemailer');

const sendMail = async (email, subject, text) => {

    let transporter = nodemailer.createTransport({
        host: process.env.HOST,
        service: process.env.SERVICE,
        port: 587,
        secure: false,
        auth: {
            user: 'sainiviv9672@gmail.com',
            pass: 'vivek@2002'
        }
    })
}
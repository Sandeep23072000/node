
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const env = require('process');
const passModel = require('../models/forgotpass');
const userModel = require('../models/user');
const sendEmail = require('../email');
const secretkey = 'secretkey';



const LiveController = {};
LiveController.forgotpass = async (req, res) => {
   try {
      const { email } = req.body;
      console.log(req.body);

      const existingUser = await userModel.findOne({ email: req.body.email });
      console.log(existingUser)
      if (!existingUser) {
         return res.status(404).json({ message: 'User not found' });
      }
      if(existingUser.token){
         await token.deleteOne();
      };

      const secret = secretkey + existingUser.password;
      const payload = ({
         email: existingUser.email,
         id: existingUser.id
      });
      const newtoken = jwt.sign(payload, secretkey, { expiresIn: '15m' });
      const link = `https://localhost:5000/forgot-password/${existingUser._id}/${newtoken}`
      console.log(link);

      const transporter = nodemailer.createTransport({
         host: 'smtp.gmail.com',
         port: 587,
         auth: {
            user: 'pythondevforsure@gmail.com',
            pass: 'idbbbcuygqhwqedx'
         }
      });
      const mailOptions = {
         to: req.body.email,
         subject: 'password reset link',
         text: `Click here to reset Password :` + link,
      };

      transporter.sendMail(mailOptions, function (error, info) {
         if (error) {
            console.error('email not sent', error);
         }
         else {
            console.log('email sent', info.response);
         }
      });
      return res.status(200).json({
         message: 'password reset link sent successfully',
         email: req.body.email
      });

   } catch (error) {
      console.log(error);
      res.status(500).json({
         message: 'Somthing went wrong',
         email: 'req.body.email'
      });
   }
};

module.exports = LiveController;
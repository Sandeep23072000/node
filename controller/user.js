const mongoose  = require('mongoose');

 const bcrypt = require('bcrypt');
 const jwt = require('jsonwebtoken');
 const nodemailer = require('nodemailer');
 const env = require('process');
 const userModel = require('../models/user');
 const secretkey = "API";

 const LiveController = {};

  LiveController.signup = async (req, res)=>{

    const {name,email, password} = req.body;
    console.log(req.body);
    try{
        const existingUser = await userModel.findOne({ email: email});
        console.log(existingUser)
        if(existingUser){
            return res.status(400).json({message: 'User already exists'});
    }

    const hashedpassword = await bcrypt.hash(password, 10);
 
    const result = await userModel.create({ 
        name: name, 
        email: email,
        password: hashedpassword,
    });
    const token = jwt.sign({email: result.email, id: result._id}, secretkey);
    res.status(201).json({user: result, token: token });

    } catch(error){
        console.log(error);
        res.status(500).json({message: 'Somthing went wrong'});
    }
};    

 LiveController.login = async (req, res)=>{
    try{
        console.log('llllllllllllllllllllllllll', req.body);
        const existingUser = await userModel.findOne({ email: req.body.email});
        console.log(existingUser)
        if(!existingUser){
            return res.status(404).json({message: 'User not found'});
    }

    const matchPassword = await bcrypt.compare(req.body.password, existingUser.password)
    if(!matchPassword){
        return res.status(400).json({message: 'Invalid User'});
    }

    const token = jwt.sign({email: existingUser.email, id: existingUser._id}, secretkey);
    res.status(201).json({user: existingUser, token: token });
 
    } catch(error){
        console.log(error);
        res.status(500).json({message: 'Somthing went wrong'});
    }

 }; 

 LiveController.forgotpass = async (req, res) => {
    try {
        const { email } = req.body;
        console.log(req.body);
  
        const existingUser = await userModel.findOne({ email: req.body.email });
        console.log(existingUser)
        if (!existingUser) {
           return res.status(404).json({ message: 'User not found' });
        }
  
        const secret = secretkey + existingUser.password;
        const payload = ({
           email: existingUser.email,
           id: existingUser.id
        });
        const newtoken = jwt.sign(payload, secretkey, { expiresIn: '15m' });
        const link = `http://localhost:4200/forgot-password/`
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
           name: existingUser.name,
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




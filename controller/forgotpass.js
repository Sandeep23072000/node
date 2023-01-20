
 const mongoose = require('mongoose');
const passModel = require('../models/forgotpass');
const userModel = require('../models/user');



 const LiveController = {};
 LiveController.forgotpass = async(req, res) => {
   try {
      const { email } = req.body;
      console.log(req.body);
  
      const existingUser = await userModel.findOne({ email: req.body.email});
      console.log(existingUser)
      if(!existingUser){
          return res.status(404).json({message: 'User not found'});
      }
      
   } catch (error) {
      console.log(error);
      res.status(500).json({message: 'Somthing went wrong'});
   }



 };

 module.exports = LiveController;
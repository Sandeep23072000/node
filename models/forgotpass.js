 const mongoose = require('mongoose');
 const passwordSchema = new mongoose.Schema({
    email:{
        type: 'string',
        // required: true
    }
 });

 module.exports = mongoose.model('password', passwordSchema);
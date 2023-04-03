
const mongoose = require('mongoose');
// const user = mongoose.model('User', userSchema);
const fileSchema = new mongoose.Schema({
    image:{
        type: String,
        // required: true
    },
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        // required: true
    },
});

 module.exports = mongoose.model('upload', fileSchema);
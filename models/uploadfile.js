
const mongoose = require('mongoose');

const fileSchema = new mongoose.Schema({
    image:{
        type: String,
        // required: true
    },
});

 module.exports = mongoose.model('upload', fileSchema);
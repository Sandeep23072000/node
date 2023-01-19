const { model } = require('mongoose');
const mongoose = require('mongoose');

const fileSchema = new mongoose.Schema({
    filename:{
        type: 'string',
        required: true
    }
});

 module.exports = mongoose.model('upload', fileSchema);

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: '',
    email: '',
    password: '',
    phone: '',
    address: '',
    dateofbirth: '',
    gender: '',

});

module.exports = mongoose.model('users', userSchema);
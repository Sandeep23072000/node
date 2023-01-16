const mongoose = require('mongoose');

const userSchema = new mongooes.Schema({
    name: '',
    email: '',
    password: '',
    phone: '',
    address: '',
    dateofbirth: '',
    gender: '',

});

module.exports = mongoose.model('user', userSchema);
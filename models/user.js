const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
    },
    // phone:{
    //     type: String,
    //     required: true,
    // },
    // address:{
    //     type: String,
    //     required: true,
    // },
    // dateofbirth:{
    //     type: String,
    //     required: true,
    // },
    // gender:{
    //     type: String,
    //     required: true,
    // },

});

    // userSchema.pre('save', async function(next) {
    //     try{
    //         const salt = await bcrypt.genSalt(10)
    //         const hashedpassword = await bcrypt.hash(this.password, salt)
    //         this.password = hashedpassword
    //         next();
    //     }
    //     catch(error) {
    //         next(error);
    //     }
    //  });

module.exports = mongoose.model('user', userSchema);
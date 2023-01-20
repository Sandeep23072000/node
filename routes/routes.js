const User = require("./user");
const Upload = require("./uploadfile");
const Forgotpass = require("./forgotpass");


module.exports = function(app){
    app.use('/api/' , User);
    app.use('/api/', User);
    app.use('/api/', Upload);
    app.use('/api/', Forgotpass);
}
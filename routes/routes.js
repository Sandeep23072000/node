const User = require("./user");
const Upload = require("./uploadfile");


module.exports = function(app){
    app.use('/api/' , User);
    app.use('/api/', User);
    app.use('/api/', Upload);
}
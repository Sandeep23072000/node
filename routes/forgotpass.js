 const express = require('express');
 const router = express.Router();
 const api = require('../controller/forgotpass');

 router.post('/forgot-pass', api.forgotpass);


 module.exports = router;
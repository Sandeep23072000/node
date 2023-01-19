const express = require('express');
const router = express.Router();
const api = require('../controller/user');


  router.post('/signup', api.signup );
  router.post('/login', api.login );

module.exports = router;
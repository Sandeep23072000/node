const express = require('express');
const router = express.Router();
const api = require('../controller/user');


  router.post('/signup', api.signup );
  router.post('/login', api.login );
  router.post('/forgot-pass', api.forgotpass );
  router.post('/reset-pass', api.resetpass );
  router.post('/update-pass', api.updatepass );

module.exports = router;
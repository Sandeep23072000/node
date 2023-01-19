const express = require('express');
const router = express.Router();
const api = require('../controller/uploadfile');

  router.post('/uploadfile',api.fileupload );

  module.exports = router;
const express = require('express');
const router = express.Router();
const app = express();
const path = require('path');
const multer = require('multer');
const api = require('../controller/uploadfile');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
      cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
      cb(null, file.fieldname + Date.now() + path.extname(file.originalname)); //Appending .jpg
  },
});  
const upload = multer({storage:storage})

  router.post('/uploadfile', upload.fields([{name:"image", maxCount:1}]),api.fileupload );

  module.exports = router;
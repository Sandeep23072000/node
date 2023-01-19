 const { default: mongoose } = require('mongoose');
 const fileModel = require('../models/uploadfile');
 const multer = require('multer');

  const LiveController = {};
  LiveController.fileupload = async (req, res) => {
    const storage = multer.diskStorage({
        destination: (req, file, cb)=>{
            cb(null, 'uploads')
        },
        filename: (req, file, cb)=>{
            console.log(file.originalname);
            cb(null, file.originalname);
            console.log(filename)
        },
    });
    const fileupload  = multer({
        storage: storage,
    }).single('file');
    res.send('uploaded')
 }

 module.exports = LiveController;
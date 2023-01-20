const mongoose = require('mongoose');
const fileModel = require('../models/uploadfile');

const LiveController = {};
LiveController.fileupload = async (req, res) => {
    try {
        console.log(req.files, "dsfdfsdfaaaaaaaaaaaaaaaaaaaaa")
        if (req.files.image) {
            req.body.image = req.files.image[0].path
           return res.status(201).json({ message: 'uploaded successfully', data: req.body})
        }
            const posts = new fileModel(req.body);
            await posts.save();
            return res.status(200).send({
                success: true,
                data: posts
            })
        
    } catch (error) {
        console.log(error);
       return res.status(500).json({ message: 'Somthing went wrong' });
    }
}

module.exports = LiveController;
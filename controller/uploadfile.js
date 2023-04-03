const mongoose = require('mongoose');
const { callbackPromise } = require('nodemailer/lib/shared');
const fileModel = require('../models/uploadfile');
const user = require('../models/user');
const userModel = require('../models/user');

const LiveController = {};
LiveController.fileupload = async (req, res) => {
    try {
        console.log(req.files, "dsfdfsdfaaaaaaaaaaaaaaaaaaaaa")
        if (req.files.image) {
            req.body.image = req.files.image[0].path;

            const posts = new fileModel(req.body);
            await posts.save();

            const user = await posts.populate("userId")
                .then(p => console.log(p))
                .catch(error => console.log(error));

            return res.status(200).send({
                message: 'uploaded successfully',
                success: true,
                data: posts,
                user: user
            });
        }



    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Somthing went wrong' });
    }
}

module.exports = LiveController;

const express = require('express');
require('./db/config');
const jwt = require('jsonwebtoken');
const app = express();
const User = require('./db/User');
const secretKey = "secretkey";

app.use(express.json());

app.post('/signup', async (req, resp) => {
    let user = new User(req.body);
    const result = await user.save();
    // result = result.toObject();
    // delete result.password;
    resp.send(result);
});

app.post('/login', async (req, resp) => {
    const user = await User.findOne(req.body);
    if (user) {
        // resp.send(user);
        jwt.sign({ user }, secretKey, { expiresIn: '200s' }, (err, token) => {
            resp.json({
                token,
                user
            })
        });
    }
    else {
        resp.send({ result: 'user not found' });
    }
});

app.listen(5000);
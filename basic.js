const express = require('express');
const cors = require('cors');
const dbconnect = require('./mongodb');
const mongodb = require('mongodb');
const { response } = require('express');

require( './config')

const app = express();
const user = require('./connect');

app.use(express.json());
app.use(cors());

app.post('/login', async (req, res) => {
    const user = await User.findOne(req.body)
    response.send(user);
});


// app.post('/', async (req, resp) => {
//     const data = await dbconnect();
//     const result = await data.insert({
//         name: 'John',
//         email: '123@example.com',
//         password: '12345',
//         gender: 'male'
//     })
//     resp.send(result);
// });

// app.post('/',async (req, resp) => {
//     const data = dbconnect({
//         name: 'John',
//         email: '123@example.com',
//         password: '12345',
//         gender: 'male'
//     });
//     const result = await data.save()
//     console.log(result);
//     resp.send(result);
// });


// app.get('/', async (req, resp) => {
//     const data = await dbconnect();
//     const result = await data.find().toArray();
//     console.log(result);
//     resp.send({ result });
// });


app.listen(5000)
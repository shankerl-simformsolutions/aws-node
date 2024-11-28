const express = require('express');

const app = express();

app.get('/api/get', (req,res) => {
    res.send({message : 'Nodejs AWS Deployment'});
})

app.get('/api/get/users', (req,res) => {
    res.send({name : 'Dev', email: 'dev@gmail.com', 'role': 'Developer'});
})

app.get('/api/get/bhawani', (req,res) => {
    res.send({name : 'bhawani', email: 'bhawani@gmail.com', 'role': 'Senior Developer'});
})

app.listen(9000, (req,res) => {
    console.log('server running on port 9000')
})

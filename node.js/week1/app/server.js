const express = require('express');
const meal = require('./meals')

const port = 3000;

const app = express();

app.get('/', (req, res) =>
    res.send('hello')
);

app.get('/hi', (req, res) =>
    res.send('hello world')
)

app.get('/meal', (req, res) =>
    res.send(meal())
)

app.listen(port, () => console.log('listening port:'+port));
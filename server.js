// import express module
const express = require('express');

// create an express application
const app = express();

app.get('/', (req, res) => {
    res.json ({ message: 'Hello from the server!'});
})

// listen for incoming requests ( start teh server)

app.listen(3001, 'localhost', () => {
    console.log('server is running on http://localhost:3001');
})

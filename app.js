// import express module
const express = require('express');

// create an express application
const app = express();

app.get('/recipes', (req, res) => {
    res.json ({ message: 'Get all the Recipes!'});
});

module.exports = app;
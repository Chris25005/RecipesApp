const express = require('express');
const recipesRouter = express.Router();

recipesRouter.get('/recipes', (req, res) => {
    res.json ({ message: 'hello express!'});
});

module.exports = recipesRouter;
const express = require('express');
const { getallrecipes } = require('./controllers/recipesController');
const recipesRouter = express.Router();

recipesRouter.get('/recipes', getallrecipes );

module.exports = recipesRouter;
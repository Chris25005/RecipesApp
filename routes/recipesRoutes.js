const express = require('express');
const { getallrecipes, createRecipes } = require('../controllers/recipesController');
const recipesRouter = express.Router();

recipesRouter.post('/', createRecipes);
recipesRouter.get('/', getallrecipes);

module.exports = recipesRouter;
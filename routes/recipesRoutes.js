const express = require('express');
const {
    createRecipes,
    getallrecipes,
    getRecipeById,
    updateRecipeById,
    deleteRecipeById
} = require('../controllers/recipesController');

const recipesRouter = express.Router();

// CRUD Routes
recipesRouter.post('/', createRecipes);
recipesRouter.get('/', getallrecipes);
recipesRouter.get('/:id', getRecipeById);
recipesRouter.put('/:id', updateRecipeById);
recipesRouter.delete('/:id', deleteRecipeById); 

module.exports = recipesRouter;

const express = require('express');
const {
    createRecipes,
    getallrecipes,
    getRecipeById,
    updateRecipeById,
    deleteRecipeById
} = require('../controllers/recipesController');
const { isAuthenticated } = require('../middlewares/auth');

const recipesRouter = express.Router();

// CRUD Routes
recipesRouter.post('/', createRecipes);
recipesRouter.get('/', isAuthenticated, getallrecipes);
recipesRouter.get('/:id', getRecipeById);
recipesRouter.put('/:id', updateRecipeById);
recipesRouter.delete('/:id', deleteRecipeById); 

module.exports = recipesRouter;

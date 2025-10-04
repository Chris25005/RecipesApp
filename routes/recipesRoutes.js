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

// Public
recipesRouter.get('/', getallrecipes);
recipesRouter.get('/:id', getRecipeById);

// Protected
recipesRouter.post('/', isAuthenticated, createRecipes);
recipesRouter.put('/:id', isAuthenticated, updateRecipeById);
recipesRouter.delete('/:id', isAuthenticated, deleteRecipeById);

module.exports = recipesRouter;

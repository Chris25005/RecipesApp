const Recipes = require('../models/Recipes');

const createRecipes = async (req, res) => {
    try{
        const newRecipes = new Recipes(req.body);
        const savedRecipe = await newRecipes.save();
        res.status(201).json({ message: 'Recipe created successfully', recipe: savedRecipe });
    } catch (error){
        res.status(500).json({ message: 'Creating Recipe failed...', error: error.message });
    }
}

const getallrecipes = (req, res) => {
    res.json ({ message: 'hello express!'});
}

module.exports = {
    getallrecipes,
    createRecipes
}
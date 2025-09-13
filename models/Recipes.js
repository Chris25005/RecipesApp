const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        trim: true
    },
    ingredients: [{
        name: { type: String, required: true },
        quantity: { type: String } // e.g., "2 cups", "1 tbsp"
    }],
    instructions: {
        type: String,
        required: true
    },
    cookingTime: {
        type: Number, // in minutes
    },
    servings: {
        type: Number,
        default: 1
    },
    cuisine: {
        type: String,
        enum: ['Indian', 'Italian', 'Chinese', 'Mexican', 'American', 'Other']
    },
    difficulty: {
        type: String,
        enum: ['Easy', 'Medium', 'Hard'],
        default: 'Easy'
    },
    calories: Number,
    protein: Number,
    carbs: Number,
    fat: Number
}, { timestamps: true });

module.exports = mongoose.model('Recipe', recipeSchema, 'recipes');

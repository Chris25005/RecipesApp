const express = require('express');
const recipesRouter = require('./routes/recipesRoutes');
const authRouter = require('./routes/authRoutes');

const app = express();
app.use(express.json());

app.use('/auth', authRouter);
app.use('/recipes', recipesRouter);

app.get("/", (req, res) => {
    res.json({ message: "Welcome to Recipes API with JWT Auth" });
});

module.exports = app;

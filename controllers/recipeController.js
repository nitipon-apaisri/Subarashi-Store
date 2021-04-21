const recipeModel = require("../models/recipeModel");

const createRecipe = async (req, res) => {
   const { name, ingredients } = req.body;
   await recipeModel.createRecipe(name, ingredients).then((row) => {
      res.json({ message: `Created ${name} recipe`, data: row });
   });
};

module.exports = {
   createRecipe,
};

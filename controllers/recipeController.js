const recipeModel = require("../models/recipeModel");

const createRecipe = async (req, res) => {
   const { name, ingredients } = req.body;
   await recipeModel.createRecipe(name).then((row) => {
      res.json({ message: `Created ${name} recipe`, data: row });
   });
   for (x of ingredients) {
      await recipeModel.addIngredientsToRecipe(x.recipeId, x.name, x.quantity, x.unit);
      console.log(x);
   }
};

module.exports = {
   createRecipe,
};

const ingredientsModel = require("../models/ingredientModel");
const ingredients = require("../assets/ingredients.json");

const addIngredients = async (req, res) => {
   for (ingredient of ingredients.ingredients) {
      await ingredientsModel
         .addIngredients(ingredient.name, ingredient.type)
         .catch((err) => {
            console.log(err);
         });
   }
};

module.exports = {
   addIngredients,
};

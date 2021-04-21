const ingredientsModel = require("../models/ingredientModel");
const ingredients = require("../assets/ingredients.json");
const recipeModel = require("../models/recipeModel");
const addIngredients = async (req, res) => {
   for (ingredient of ingredients.ingredients) {
      await ingredientsModel
         .addIngredients(ingredient.name, ingredient.type)
         .catch((err) => {
            console.log(err);
         });
   }
};

const getAllIngredient = async (req, res) => {
   await ingredientsModel.getAllIngredient().then((rows) => {
      res.json({ message: "Success", data: rows });
   });
};

const getIngredientsByType = async (req, res) => {
   const { type } = req.params;
   await ingredientsModel.getIngredientsByType(type).then((rows) => {
      console.log(type);
      res.json({ data: rows });
   });
};

module.exports = {
   addIngredients,
   getAllIngredient,
   getIngredientsByType,
};

const ingredientsModel = require("../models/ingredientModel");
const ingredients = require("../database/ingredients.json");

const addIngredients = async (req, res) => {
   for (ingredient of ingredients.ingredients) {
      await ingredientsModel.addIngredients(ingredient).catch((err) => {
         res.status(404).json({ message: "Invalid" });
      });
   }
};

const getAllIngredient = async (req, res) => {
   await ingredientsModel.getAllIngredient().then((rows) => {
      res.json({ message: "Success", data: rows });
   });
};

const getAllIngredientByPage = async (req, res) => {
   const { page } = req.params;
   await ingredientsModel.getAllIngredientByPage(page).then((rows) => {
      res.json({ message: "Success", data: rows });
   });
};
module.exports = {
   addIngredients,
   getAllIngredient,
   getAllIngredientByPage,
};

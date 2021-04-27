const ingredientsModel = require("../models/ingredientModel");
const ingredients = require("../database/ingredients.json");

const addIngredients = async (req, res) => {
   for (ingredient of ingredients.ingredients) {
      ingredientsModel.addIngredients(ingredient).catch((err) => {
         res.status(404).json({ message: "Invalid" });
      });
   }
};

const getAllIngredient = async (req, res) => {
   const page = req.query.page;
   if (page === undefined) {
      ingredientsModel.getAllIngredient().then((rows) => {
         res.json({ message: "Success", data: rows });
      });
   } else {
      ingredientsModel.getAllIngredientByPage(page).then((rows) => {
         res.json({ message: "Success", data: rows });
      });
   }
};

module.exports = {
   addIngredients,
   getAllIngredient,
};

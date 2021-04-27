const { json } = require("express");
const recipeModel = require("../models/recipeModel");

const createRecipe = async (req, res, next) => {
   const { name, ingredients, category } = req.body;
   if (!name || !ingredients || !category) {
      res.status(400).json({ message: "Invalid Body" });
   }
   recipeModel.createRecipe(name, category).then((row) => {
      res.json({ message: `Created ${name} recipe`, data: row });
   });
   for (ingredient of ingredients) {
      await recipeModel.addIngredientsToRecipe(
         ingredient.recipeId,
         ingredient.title,
         ingredient.quantity,
         ingredient.unit,
         ingredient.art
      );
   }
};

const listAllRecipes = async (req, res) => {
   recipeModel.listAllRecipes().then((rows) => {
      res.json({ data: rows });
   });
};
const listAllRecipesByCategory = async (req, res) => {
   const { category } = req.params;
   recipeModel.listAllRecipes(category).then((rows) => {
      if (rows.length === 0) {
         res.status(404).json({ message: `Not found any recipe for ${category}` });
      } else {
         res.json({ data: rows });
      }
   });
};

const listRecipeById = async (req, res) => {
   let obj = { ingredients: [] };
   const { id } = req.params;
   recipeModel
      .listRecipeIngredients(id)
      .then((rows) => {
         for (x in rows) {
            let ingredientsObj = { title: "", quantity: 0, unit: "", art: "" };
            obj.ingredients.push(ingredientsObj);
            obj.ingredients[x].title = rows[x].title;
            obj.ingredients[x].quantity = rows[x].quantity;
            obj.ingredients[x].unit = rows[x].unit;
            obj.ingredients[x].art = rows[x].art;
         }
      })
      .catch((err) => {
         console.log(err);
      });
   recipeModel
      .listRecipeById(id)
      .then((row) => {
         Object.assign(row, obj);
         res.json({ data: row });
      })
      .catch(() => {
         res.status(404).json({ message: "Recipe not found" });
      });
};

const updateRecipe = async (req, res) => {
   const { id } = req.params;
   const { name, category } = req.body;
   recipeModel.updateRecipe(id, name, category).then((row) => {
      res.json({ message: "Update success", latest: row });
   });
};

const updateRecipeIngredients = async (req, res) => {
   let { id } = req.params;
   let { title, quantity, unit, art } = req.body;
   recipeModel
      .updateRecipeIngredients(id, title, quantity, unit, art)
      .then(() => {
         res.json({ message: "Updated" });
      })
      .catch(() => {
         json.status(400).json({ message: "Invalid" });
      });
};

const deleteRecipe = async (req, res) => {
   const { id } = req.params;
   recipeModel
      .deleteRecipe(id)
      .then(() => {
         res.json({ message: `Recipe id ${id} has been delete` });
      })
      .catch(() => {
         res.status(404).json({ message: `Recipe id ${id} not found` });
      });
};

module.exports = {
   createRecipe,
   listAllRecipes,
   listAllRecipesByCategory,
   listRecipeById,
   updateRecipe,
   updateRecipeIngredients,
   deleteRecipe,
};

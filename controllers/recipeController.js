const { json } = require("express");
const recipeModel = require("../models/recipeModel");

const createRecipe = async (req, res) => {
   const { name, ingredients, category } = req.body;
   await recipeModel
      .createRecipe(name, category)
      .then((row) => {
         // console.log(req.user);
         res.json({ message: `Created ${name} recipe`, data: row });
      })
      .catch(() => {
         console.log("Nah");
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
   await recipeModel.listAllRecipes().then((rows) => {
      res.json({ data: rows });
   });
};
const listAllRecipesByCategory = async (req, res) => {
   const { category } = req.params;
   await recipeModel.listAllRecipes(category).then((rows) => {
      res.json({ data: rows });
   });
};

const listRecipeById = async (req, res) => {
   let obj = { ingredients: [] };
   const { id } = req.params;
   await recipeModel
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
   await recipeModel
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
   const { name } = req.body;
   await recipeModel.updateRecipe(id, name).then((row) => {
      res.json({ message: "Update success", latest: row });
   });
};

const updateRecipeIngredients = async (req, res) => {
   let { id } = req.params;
   let { title, quantity, unit, art } = req.body;
   await recipeModel
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
   await recipeModel
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

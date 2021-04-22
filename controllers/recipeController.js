const recipeModel = require("../models/recipeModel");

const createRecipe = async (req, res) => {
   const { name, ingredients } = req.body;
   await recipeModel
      .createRecipe(name)
      .then((row) => {
         // console.log(req.user);
         res.json({ message: `Created ${name} recipe`, data: row });
      })
      .catch(() => {
         console.log("Nah");
      });
   for (x of ingredients) {
      await recipeModel.addIngredientsToRecipe(x.recipeId, x.title, x.quantity, x.unit);
   }
};

const listAllRecipes = async (req, res) => {
   // let obj = { ingredients: [] };
   // await recipeModel
   //    .listRecipeIngredients()
   //    .then((rows) => {
   //       for (x in rows) {
   //          let ingredientsObj = { title: "", quantity: 0, unit: "" };
   //          obj.ingredients.push(ingredientsObj);
   //          obj.ingredients[x].title = rows[x].title;
   //          obj.ingredients[x].quantity = rows[x].quantity;
   //          obj.ingredients[x].unit = rows[x].unit;
   //       }
   //    })
   // .catch((err) => {
   //    console.log(err);
   // });
   await recipeModel.listAllRecipes().then((rows) => {
      res.json({ data: rows });
   });
};

// const listRecipeById = async (req,res) => {

// }
module.exports = {
   createRecipe,
   listAllRecipes,
};

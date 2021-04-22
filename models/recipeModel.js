const db = require("./connection");

function createRecipe(name) {
   return new Promise((resolve, reject) => {
      db.run(`INSERT INTO recipes(name) VALUES(?)`, [name], function (err) {
         if (err) {
            reject();
         } else {
            db.get(
               `SELECT * FROM recipes WHERE id = ?`,
               [this.lastID],
               function (err, row) {
                  if (err) {
                     reject();
                  } else {
                     resolve(row);
                  }
               }
            );
         }
      });
   });
}

function addIngredientsToRecipe(recipeId, title, quantity, unit) {
   return new Promise((resolve, reject) => {
      db.run(
         `INSERT INTO recipe_ingredients(recipeId, title, quantity, unit) VALUES(?,?,?,?)`,
         [recipeId, title, quantity, unit],
         function (err) {
            if (err) {
               reject();
            } else {
               resolve();
            }
         }
      );
   });
}

function listAllRecipes() {
   return new Promise((resolve, reject) => {
      db.all(`SELECT * FROM recipes`, function (err, rows) {
         if (err) {
            reject();
         } else {
            resolve(rows);
         }
      });
   });
}
function listRecipeIngredients() {
   return new Promise((resolve, reject) => {
      db.all(
         `SELECT * FROM recipe_ingredients WHERE recipeId = recipeId`,
         function (err, rows) {
            if (err) {
               reject();
            } else {
               resolve(rows);
            }
         }
      );
   });
}
module.exports = {
   createRecipe,
   addIngredientsToRecipe,
   listAllRecipes,
   listRecipeIngredients,
};

const db = require("./connection");

function createRecipe(name, category) {
   return new Promise((resolve, reject) => {
      db.run(
         `INSERT INTO recipes(name,category) VALUES(?,?)`,
         [name, category],
         function (err) {
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
         }
      );
   });
}

function addIngredientsToRecipe(recipeId, title, quantity, unit, art) {
   return new Promise((resolve, reject) => {
      db.run(
         `INSERT INTO recipe_ingredients(recipeId, title, quantity, unit,art) VALUES(?,?,?,?,?)`,
         [recipeId, title, quantity, unit, art],
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

function listRecipeById(id) {
   return new Promise((resolve, reject) => {
      db.get(`SELECT * FROM recipes WHERE id = ?`, [id], function (err, row) {
         if (err) {
            reject();
         } else {
            resolve(row);
         }
      });
   });
}

function listAllRecipesByCategory(category) {
   return new Promise((resolve, reject) => {
      db.get(
         `SELECT * FROM recipes WHERE category = ?`,
         [category],
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

function listRecipeIngredients(id) {
   return new Promise((resolve, reject) => {
      db.all(
         `SELECT * FROM recipe_ingredients WHERE recipeId = ?`,
         [id],
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

function updateRecipe(id, name) {
   return new Promise((resolve, reject) => {
      db.run(`UPDATE recipes SET name = ? WHERE id = ?`, [name, id], function (err) {
         if (err) {
            reject();
         } else {
            db.get(`SELECT * FROM recipes WHERE id = ?`, [id], function (err, row) {
               if (err) {
                  reject();
               } else {
                  resolve(row);
               }
            });
         }
      });
   });
}

function updateRecipeIngredients(recipeId, title, quantity, unit, art) {
   return new Promise((resolve, reject) => {
      db.run(
         `UPDATE recipe_ingredients SET title = ?, quantity = ?, unit = ? WHERE recipeId = ? AND art = ?`,
         [title, quantity, unit, recipeId, art],
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

function deleteRecipe(id) {
   return new Promise((resolve, reject) => {
      db.run(`DELETE FROM recipes WHERE id = ?`, [id], function (err) {
         if (err) {
            reject();
         } else {
            db.run(
               `DELETE FROM recipe_ingredients WHERE recipeId = ?`,
               [id],
               function (err) {
                  if (err) {
                     reject();
                  } else {
                     resolve();
                  }
               }
            );
         }
      });
   });
}

module.exports = {
   createRecipe,
   addIngredientsToRecipe,
   listAllRecipes,
   listRecipeIngredients,
   listRecipeById,
   listAllRecipesByCategory,
   updateRecipe,
   updateRecipeIngredients,
   deleteRecipe,
};

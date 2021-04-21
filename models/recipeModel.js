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
function addIngredientsToRecipe(recipeId, name, quantity, unit) {
   return new Promise((resolve, reject) => {
      db.run(
         `INSERT INTO recipe_ingredients(recipeId, name, quantity, unit) VALUES(?,?,?,?)`,
         [recipeId, name, quantity, unit],
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

module.exports = {
   createRecipe,
   addIngredientsToRecipe,
};

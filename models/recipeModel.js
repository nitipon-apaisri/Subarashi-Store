const db = require("./connection");

function createRecipe(name, ingredients) {
   return new Promise((resolve, reject) => {
      db.run(
         `INSERT INTO recipes(name,ingredients) VALUES(?,?)`,
         [name, ingredients],
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

module.exports = {
   createRecipe,
};

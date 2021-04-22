const db = require("./connection");

function addIngredients(name) {
   return new Promise((resolve, reject) => {
      db.run(`INSERT INTO ingredients(name) VALUES(?)`, [name], (err) => {
         if (err) {
            reject();
         } else {
            resolve();
         }
      });
   });
}

function getAllIngredient() {
   return new Promise((resolve, reject) => {
      db.all(`SELECT * FROM ingredients`, (err, rows) => {
         if (err) {
            reject();
         } else {
            resolve(rows);
         }
      });
   });
}

module.exports = {
   addIngredients,
   getAllIngredient,
};

const db = require("./connection");

function addIngredients(name, type) {
   return new Promise((resolve, reject) => {
      db.run(`INSERT INTO ingredients(name,type) VALUES(?,?)`, [name, type], (err) => {
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

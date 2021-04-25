const db = require("./connection");
const { pagination } = require("../middleware/pagination");
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

function getAllIngredientByPage(page) {
   return new Promise((resolve, reject) => {
      let end = page * 10;
      let from;
      if (page >= 2) {
         from = end - 10;
      } else {
         from = 0;
      }
      db.all(`SELECT * FROM ingredients LIMIT ?,?`, [from, 10], (err, rows) => {
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
   getAllIngredientByPage,
};

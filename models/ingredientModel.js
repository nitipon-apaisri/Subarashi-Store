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

module.exports = {
   addIngredients,
};

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

module.exports = {
   addIngredients,
};

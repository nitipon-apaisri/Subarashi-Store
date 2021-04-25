const db = require("./connection");

function register(username, password) {
   return new Promise((resolve, reject) => {
      db.run(
         "INSERT INTO users(username,password) VALUES(?,?)",
         [username, password],
         function (err) {
            if (err) {
               reject();
            } else {
               db.get(
                  "SELECT * FROM users WHERE id = ?",
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

function auth(username, token) {
   return new Promise((resolve, reject) => {
      db.get(
         `UPDATE users SET token = ? WHERE username LIKE ?`,
         [token, username],
         function (err) {
            if (err) {
               reject();
            } else {
               db.get(
                  `SELECT * FROM users WHERE username LIKE ?`,
                  [username],
                  (err, row) => {
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
   register,
   auth,
};

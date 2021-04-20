const sqlite = require("sqlite3");
const db = new sqlite.Database("recipe.db");

module.exports = db;

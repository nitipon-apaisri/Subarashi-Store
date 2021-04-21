require("dotenv").config();
const db = require("./models/connection");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const logger = require("./middleware/logger");
const router = require("./routes/index");
const ingredientController = require("./controllers/ingredientController");
app.use(express.json());
app.use(logger);

app.use(router);
app.listen(PORT, () => {
   ingredientController.addIngredients();
   console.log(`This app is running on port: ${PORT}`);
});

db.serialize(() => {
   db.run("DROP TABLE IF EXISTS users");
   db.run(`CREATE TABLE "users" (
        "id"	INTEGER,
        "username"	TEXT NOT NULL UNIQUE,
        "password"	TEXT NOT NULL,
        "token" TEXT,
        PRIMARY KEY("id" AUTOINCREMENT)
    )`);
   db.run("DROP TABLE IF EXISTS recipes");
   db.run(`CREATE TABLE "recipes" (
        "id"	INTEGER,
        "name"	TEXT NOT NULL UNIQUE,
        "ingredients"	TEXT NOT NULL,
        PRIMARY KEY("id" AUTOINCREMENT)
    )`);
   db.run("DROP TABLE IF EXISTS ingredients");
   db.run(`CREATE TABLE "ingredients" (
        "id"	INTEGER,
        "name"	TEXT NOT NULL UNIQUE,
        "type" NUMBER NOT NULL,
        PRIMARY KEY("id" AUTOINCREMENT)
    )`);
});

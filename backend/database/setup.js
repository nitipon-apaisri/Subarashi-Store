const db = require("../models/connection");
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
         "category" TEXT NOT NULL,
         PRIMARY KEY("id" AUTOINCREMENT)
     )`);
   db.run("DROP TABLE IF EXISTS ingredients");
   db.run(`CREATE TABLE "ingredients" (
         "id"	INTEGER,
         "name"	TEXT NOT NULL UNIQUE,
         
         PRIMARY KEY("id" AUTOINCREMENT)
         )`);
   db.run("DROP TABLE IF EXISTS recipe_ingredients");
   db.run(`CREATE TABLE "recipe_ingredients" (
         "recipeId"	INTEGER,
         "title"	TEXT,
         "quantity" NUMBER,
         "unit" TEXT,
         "art" TEXT,
         FOREIGN KEY("recipeId") REFERENCES "recipes"("id")
     )`);
});

module.exports = db;

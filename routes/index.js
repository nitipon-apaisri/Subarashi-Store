const express = require("express");
const router = express.Router();
const ingredientsController = require("../controllers/ingredientController");
const userController = require("../controllers/userController");
const authUser = require("../middleware/auth");
const recipeController = require("../controllers/recipeController");
//Register
router.post("/register", userController.register);
//Authentication
router.post("/auth", userController.auth);
//Endpoint ingredients
router.get("/ingredients", ingredientsController.getAllIngredient);

//Endpoint recipes
router.post("/recipes", recipeController.createRecipe);
// router.post("/recipes", authUser.userAuth, recipeController.createRecipe);
router.get("/recipes", recipeController.listAllRecipes);
router.get("/recipes/:id", recipeController.listRecipeById);
router.patch("/recipes/:id", recipeController.updateRecipe);
module.exports = router;

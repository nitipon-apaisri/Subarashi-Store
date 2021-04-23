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
router.get("/ingredients/page/:page", ingredientsController.getAllIngredientByPage);
//Endpoint recipes
router.get("/recipes", recipeController.listAllRecipes);
router.get("/recipes/:category", recipeController.listAllRecipesByCategory);
// router.post("/recipes", authUser.userAuth, recipeController.createRecipe);
// router.get("/recipes/:id", authUser.userAuth, recipeController.listRecipeById);
// router.patch("/recipes/:id", authUser.userAuth, recipeController.updateRecipe);
// router.delete("/recipes/:id", authUser.userAuth, recipeController.deleteRecipe);
router.post("/recipes", recipeController.createRecipe);
router.get("/recipes/:id", recipeController.listRecipeById);
router.patch("/recipes/:id", recipeController.updateRecipe);
router.delete("/recipes/:id", recipeController.deleteRecipe);
module.exports = router;

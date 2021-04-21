const express = require("express");
const router = express.Router();
const ingredientsController = require("../controllers/ingredientController");
const userController = require("../controllers/userController");
router.post("/register", userController.register);
router.post("/auth", userController.auth);
router.get("/ingredients", ingredientsController.getAllIngredient);
router.get("/ingredients/type/:type", ingredientsController.getIngredientsByType);
module.exports = router;

require("dotenv").config();
const db = require("./database/setup");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const logger = require("./middleware/logger");
const router = require("./routes/index");
const cors = require("cors");
const ingredientController = require("./controllers/ingredientController");
app.use(express.json());
app.use(logger);
app.use(cors());
app.use(router);
app.listen(PORT, () => {
   db, ingredientController.addIngredients();
   console.log(`This app is running on port: ${PORT}`);
});

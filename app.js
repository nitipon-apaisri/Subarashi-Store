require("dotenv").config();
const { json } = require("express");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const logger = require("./middleware/logger");
const router = require("./routes/index");
app.use(express.json());
app.use(logger);
app.use(router);
app.listen(PORT, () => {
   console.log(`This app is running on port: ${PORT}`);
});

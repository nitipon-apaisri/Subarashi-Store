const userModel = require("../models/userModel");
const bcrypt = require("bcryptjs");
const register = async (req, res, next) => {
   const { username, password } = req.body;
   const hashing = bcrypt.hashSync(password, 10);
   await userModel
      .register(username, hashing)
      .then((row) => {
         res.json({ data: row });
         next();
      })
      .catch(() => {
         res.status(403).json({ message: "Invalid Body" });
      });
};

module.exports = {
   register,
};

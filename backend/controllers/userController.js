const userModel = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const register = async (req, res, next) => {
   const { username, password } = req.body;
   const hashing = bcrypt.hashSync(password, 10);
   userModel
      .register(username, hashing)
      .then((row) => {
         res.json({ data: row });
         next();
      })
      .catch(() => {
         res.status(403).json({ message: "Invalid Body" });
      });
};

const auth = async (req, res) => {
   const { username, password } = req.body;
   const payload = { username: username };
   const token = jwt.sign(payload, "secret");
   userModel.auth(username, token).then((row) => {
      bcrypt.compare(password, row.password, function (err, response) {
         if (response === true) {
            res.json({ data: row });
         } else {
            res.json({ message: "Invalid Body" });
         }
      });
   });
};

module.exports = {
   register,
   auth,
};

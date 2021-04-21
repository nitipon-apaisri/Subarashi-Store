const jwt = require("jsonwebtoken");
const userAuth = (req, res, next) => {
   try {
      const token = req.headers.authorization.replace("Bearer ", "");
      const data = jwt.verify(token, "secret");
      req.user = data;
      next();
   } catch (err) {
      res.status(400).json({ message: "Invalid Token" });
   }
};

module.exports = {
   userAuth,
};

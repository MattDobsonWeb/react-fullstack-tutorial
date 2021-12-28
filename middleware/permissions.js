const User = require("../models/User");
const jwt = require("jsonwebtoken");

const requiresAuth = async (req, res, next) => {
  const token = req.cookies["access-token"];
  let isAuthed = false;

  if (token) {
    // do logic here
    try {
      const { userId } = jwt.verify(token, process.env.JWT_SECRET);

      try {
        const user = await User.findById(userId);

        if (user) {
          const userToReturn = { ...user._doc };
          delete userToReturn.password;
          req.user = userToReturn;
          isAuthed = true;
        }
      } catch {
        isAuthed = false;
      }
    } catch {
      isAuthed = false;
    }
  }

  if (isAuthed) {
    return next();
  } else {
    return res.status(401).send("Unauthorized");
  }
};

module.exports = requiresAuth;

const jwt = require("jsonwebtoken");

const generateToken = (id) => {
  return jwt.sign({ id }, "gourav", {
    expiresIn: "1d",
  });
};

module.exports = generateToken;

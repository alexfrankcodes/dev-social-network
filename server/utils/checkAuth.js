const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

const { AuthenticationError } = require("apollo-server");

dotenv.config();

module.exports = (context) => {
  const authHeader = context.req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split("Bearer ")[1];
    if (token) {
      try {
        const user = jwt.verify(token, process.env.SECRET_KEY);
        return user;
      } catch (error) {
        throw new AuthenticationError("Token is invalid or expired");
      }
    }
    throw new Error(
      "Authentication token must be in the format of 'Bearer [token]' "
    );
  }
  throw new Error("Authorization header must be provided' ");
};

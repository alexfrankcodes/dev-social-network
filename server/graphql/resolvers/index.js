const postsResolvers = require("./posts");
const usersResolvers = require("./users.js");

module.exports = {
  Query: {
    ...postsResolvers.Query,
  },
  Mutation: {
    ...usersResolvers.Mutation,
  },
};

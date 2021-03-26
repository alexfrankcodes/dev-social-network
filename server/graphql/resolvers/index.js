const postsResolvers = require("./posts");
const usersResolvers = require("./users");
const interactionResolvers = require("./interactions");

module.exports = {
  Query: {
    ...postsResolvers.Query,
  },
  Mutation: {
    ...usersResolvers.Mutation,
    ...postsResolvers.Mutation,
    ...interactionResolvers.Mutation,
  },
};

const postsResolvers = require("./posts");
const usersResolvers = require("./users");
const interactionResolvers = require("./interactions");

module.exports = {
  Post: {
    likeCount: ({ likes }) => likes.length,
    commentCount: ({ comments }) => comments.length,
  },
  Query: {
    ...postsResolvers.Query,
  },
  Mutation: {
    ...usersResolvers.Mutation,
    ...postsResolvers.Mutation,
    ...interactionResolvers.Mutation,
  },
  Subscription: {
    ...postsResolvers.Subscription,
  },
};

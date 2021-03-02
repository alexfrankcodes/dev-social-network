const { gql } = require("apollo-server");

const typeDefs = gql`
  type Post {
    id: ID!
    username: String!
    body: String!
    createdAt: String!
  }
  type Query {
    getPosts: [Post]
  }
`;

module.exports = typeDefs;

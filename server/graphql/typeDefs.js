const { gql } = require("apollo-server");

const typeDefs = gql`
  type Post {
    id: ID!
    username: String!
    body: String!
    createdAt: String!
  }
  type User {
    id: ID!
    username: String!
    email: String!
    token: String!
    createdAt: String!
  }
  input RegisterInput {
    username: String!
    password: String!
    confirmPassword: String!
    email: String!
  }
  # input LoginInput {
  #   username: String!
  #   password: String!
  # }
  type Query {
    getPosts: [Post]
  }
  type Mutation {
    register(registerInput: RegisterInput): User!
    login(username: String!, password: String!): User!
    # login(loginInput: LoginInput): User!
  }
`;

module.exports = typeDefs;

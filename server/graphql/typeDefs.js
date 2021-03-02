import { gql } from "apollo-server";

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

export default typeDefs;

import { ApolloServer } from "apollo-server";
import gql from "graphql-tag";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const typeDefs = gql`
  type Query {
    greeting: String!
  }
`;

const resolvers = {
  Query: {
    greeting: () => "Hello GraphQL!",
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true })
  .then(() => {
    console.log("MongoDB Connected");
    return server.listen({ port: 5000 });
  })
  .then((res) => {
    console.log(`Server running at ${res.url}`);
  });

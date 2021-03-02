import { ApolloServer } from "apollo-server";
import gql from "graphql-tag";

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

server.listen({ port: 5000 }).then((res) => {
  console.log(`Server running at ${res.url}`);
});

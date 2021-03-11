const { ApolloServer } = require("apollo-server");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const typeDefs = require("./graphql/typeDefs");
const resolvers = require("./graphql/resolvers");

dotenv.config();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => ({ req }),
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

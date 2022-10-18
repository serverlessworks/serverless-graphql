import { ApolloServer, gql } from "apollo-server-lambda";

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: () => "Hello world!",
  },
};

async function bootstrapContext() {
  const context = await Promise.resolve(41);
  return context;
}

const context = bootstrapContext();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: context,
  introspection: false,
});

export const handler = server.createHandler();

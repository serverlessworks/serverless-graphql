import { ApolloServer, BaseContext } from "@apollo/server";

// The GraphQL schema
const typeDefs = `#graphql
  type Query {
    hello: String
  }
`;

// A map of functions which return data for the schema.
const resolvers = {
    Query: {
        hello: () => 'world',
    },
};

const server = new ApolloServer({
    typeDefs,
    resolvers,
    introspection: process.env.NODE_ENV !== 'prod'
});

async function bootstrapContext(): Promise<BaseContext> {
    return {
        number: await Promise.resolve(41)
    };
}

const options = await bootstrapContext();

export { server, options }

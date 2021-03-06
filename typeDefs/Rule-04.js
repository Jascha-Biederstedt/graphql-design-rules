// Rule #4: It's easier to add fields than to remove them.

const { ApolloServer, gql } = require('apollo-server');

exports.typeDefs = gql`
  type Query {
    hello: String!
    car(id: ID!): Car!
  }

  type Car {
    id: ID!
    color: String!
    make: String!
  }

  type Group {
    id: ID!
    features: [GroupFeatures]
    applyFeaturesSeparately: Boolean!
    cars: [Car!]!
    name: String!
    imageId: ID!
    bodyHtml: String!
  }

  type GroupFeatures {
    feature: String!
  }
`;

// Rule #12: For a relationship mutation, always consider
// whether it would be useful to operate on multiple elements
// at once.

const { ApolloServer, gql } = require('apollo-server');

exports.typeDefs = gql`
  type Query {
    hello: String!
    car(id: ID!): Car!
  }

  type Mutation {
    create
    delete
    update
    publish
    unpublish
    addCars
    removeCars

    # unnecessary: addCar and removeCar
  }

  type Car {
    id: ID!
    color: String!
    make: String!
  }

  type Group {
    id: ID!
    featureSet: GroupFeatureSet!
    hasCar(id: ID!): Boolean!
    cars(skip: Int!, take: Int!): [Car!]!
    name: String!
    image: Image!
    description: String!
  }

  type Image {
    id: ID!
    url: String!
  }

  type GroupFeatureSet {
    features: [GroupFeatures!]!
    applyFeaturesSeparately: Boolean!
  }

  type GroupFeatures {
    feature: GroupFeatureFields!
  }

  enum GroupFeatureFields {
    INCLINE_ENGINE
    FOUR_CYLINDER_ENGINE
    TWIN_CYLUNDER_ENGINE
    RED_PAINT
    BLACK_PAINT
  }
`;

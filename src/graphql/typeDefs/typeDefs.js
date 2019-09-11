import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type Query {
    findUserById(userId: String!): User!
    findUserByEmail(email: String!): User!
    users: [User!]!
  }
  type Mutation {
    createUser(email: String!, password: String!): User
  }
  type User {
    id: ID!
    email: String!
    password: String
  }
`;

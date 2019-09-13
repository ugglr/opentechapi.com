import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type Query {
    findUserById(userId: String!): User!
    findUserByEmail(email: String!): User!
    users: [User!]!
    cpus: [CPU!]!
  }
  type Mutation {
    createUser(email: String!, password: String!): User
    createCPU(company: String!, model: String!, socket: String!): CPU
  }
  type User {
    id: ID!
    email: String!
    password: String
  }
  type CPU {
    id: ID!
    company: String!
    model: String!
    socket: String!
  }
`;

import { findUserById, findUserByEmail, users, createUser } from './users';

export const resolvers = {
  Query: { findUserById, findUserByEmail, users },
  Mutation: { createUser }
};

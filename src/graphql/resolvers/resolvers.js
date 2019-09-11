import { findUserById, findUserByEmail, users, createUser } from './users';
import { createCPU, cpus } from './cpus';

export const resolvers = {
  Query: { findUserById, findUserByEmail, users, cpus },
  Mutation: { createUser, createCPU }
};

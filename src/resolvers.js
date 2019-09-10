import { User } from './models/user';

export const resolvers = {
  Query: {
    users: () => User.find()
  },
  Mutation: {
    createUser: async (_, { email, password }) => {
      const user = new User({ email, password });
      await user.save();
      return user;
    }
  }
};

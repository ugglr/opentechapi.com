import { User } from './models/user';
import bcrypt from 'bcrypt';

export const resolvers = {
  Query: {
    users: () => User.find()
  },
  Mutation: {
    createUser: async (_, { email, password }) => {
      try {
        const hasUser = await User.findOne({ email });
        if (hasUser) {
          throw new Error('User already exists');
        }

        const hashedPassword = await bcrypt.hash(password, 12);

        const newUser = new User({
          email: email,
          password: hashedPassword
        });

        await newUser.save();
        return newUser;
      } catch (err) {
        throw err;
      }
    }
  }
};

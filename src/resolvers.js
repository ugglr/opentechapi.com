import { User } from './models/user';
import bcrypt from 'bcrypt';

export const resolvers = {
  Query: {
    users: () => User.find()
  },
  Mutation: {
    createUser: async (_, { email, password }) => {
      try {
        // Search for existing users
        const hasUser = await User.findOne({ email });
        if (hasUser) {
          throw new Error('User already exists');
        }
        // Hash the password with bcrypt
        const hashedPassword = await bcrypt.hash(password, 12);
        // Create the new user object
        const newUser = new User({
          email: email,
          password: hashedPassword
        });
        // Saving the user to DB and storing the result from the save
        const saveResult = await newUser.save();
        // Do not return the hashed password
        saveResult.password = null;
        return saveResult;
      } catch (err) {
        throw err;
      }
    }
  }
};

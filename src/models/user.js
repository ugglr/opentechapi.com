import mongoose from 'mongoose';

const userSchema = {
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
};

export const User = mongoose.model('User', userSchema);

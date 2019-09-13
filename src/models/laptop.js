import mongoose, { Schema } from 'mongoose';

const laptopSchema = {
  manufacturer: {
    type: Schema.Types.ObjectID,
    ref: 'Company'
  },
  model: {
    type: String,
    required: true
  },
  cpu: {
    type: Schema.Types.ObjectId,
    ref: 'CPU'
  }
};

export const Laptop = mongoose.model('Laptop', laptopSchema);

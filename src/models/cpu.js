import mongoose, { Schema } from 'mongoose';

const cpuSchema = {
  manufacturer: {
    type: Schema.Types.ObjectId,
    ref: 'Company'
  },
  model: {
    type: String,
    required: true
  },
  socket: {
    type: String,
    required: true
  }
};

export const CPU = mongoose.model('CPU', cpuSchema);

import mongoose from 'mongoose';

const cpuSchema = {
  company: {
    type: String,
    required: true
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

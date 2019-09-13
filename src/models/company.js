import mongoose from 'mongoose';

const companySchema = {
  name: {
    type: String,
    required: true
  }
};

export const Company = mongoose.model('Company', companySchema);

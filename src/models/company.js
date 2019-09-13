import mongoose from 'mongoose';

const companySchema = {
  company: {
    type: String,
    required: true
  }
};

export const Company = mongoose.model('Company', companySchema);

import { CPU } from '../../models/cpu';

export const cpus = async () => CPU.find();

export const createCPU = async (_, { company, model, socket }) => {
  try {
    const hasCPU = await CPU.findOne({ model });
    if (hasCPU) {
      throw new Error('This cpu already exists');
    }
    const newCPU = new CPU({
      manufacturer: company,
      model: model,
      socket: socket
    });

    const saveResult = await newCPU.save();
    return saveResult;
  } catch (err) {
    throw err;
  }
};

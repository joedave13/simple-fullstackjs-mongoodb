import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    enum: ['Male', 'Female'],
    default: 'Male',
  },
  role: {
    type: String,
    enum: ['Admin', 'Employee', 'User'],
    default: 'User',
  },
});

export default mongoose.model('User', userSchema);

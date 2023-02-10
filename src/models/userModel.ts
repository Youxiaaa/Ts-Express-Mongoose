import mongoose from '../config/dbConfig';

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  deletedAt: {
    type: Date,
    default: null
  }
}, { timestamps: true });

const userModel = mongoose.model('Users', userSchema);
export default userModel;

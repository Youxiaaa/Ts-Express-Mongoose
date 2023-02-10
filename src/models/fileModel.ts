import mongoose from '../config/dbConfig';

const fileSchema = new mongoose.Schema({
  filename: {
    type: String,
    required: true
  },
  filetype: {
    type: String,
    required: true
  },
  path: {
    type: String,
    required: true
  }
}, { timestamps: true });

const fileModel = mongoose.model('File', fileSchema);

export default fileModel;

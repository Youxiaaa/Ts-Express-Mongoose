import mongoose from '../config/dbConfig';

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true
  },
  isCompleted: {
    type: Boolean,
    require: true
  },
  deletedAt: {
    type: Date,
    default: null
  }
}, { timestamps: true });

const todoModel = mongoose.model('Todos', todoSchema);

export default todoModel;
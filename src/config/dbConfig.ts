import mongoose from 'mongoose'
mongoose.set('strictQuery', false)
mongoose.connect('mongodb://127.0.0.1:27017/demoDB')
  .then(() => console.log('Connect to MongoDB'))
  .catch((err: String) => console.log('Failed to connect MongoDB', err))

export default mongoose
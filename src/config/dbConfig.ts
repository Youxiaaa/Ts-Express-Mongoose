import mongoose from 'mongoose'
mongoose.connect('mongodb://localhost:27017/demoDB')
  .then(() => console.log('Connect to MongoDB'))
  .catch((err: String) => console.log('Faild to connect MongoDB', err))

export default mongoose
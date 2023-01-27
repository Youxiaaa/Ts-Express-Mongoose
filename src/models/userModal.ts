import mongoose from '../config/dbConfig'

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
})

const userModel = mongoose.model('Users', userSchema)
export default userModel

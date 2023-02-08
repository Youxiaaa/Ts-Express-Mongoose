import mongoose from 'mongoose';

const uri: any = 'mongodb://127.0.0.1:27017/demoDB';
const connectOptions: any = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};

mongoose.set('strictQuery', false);
mongoose.connect(uri, connectOptions, () => console.log('Mongoose is connected.'));

export default mongoose;

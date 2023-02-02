import mongoose from '../config/dbConfig';
declare const userModel: mongoose.Model<{
    username: string;
    password: string;
}, {}, {}, {}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    username: string;
    password: string;
}>>;
export default userModel;

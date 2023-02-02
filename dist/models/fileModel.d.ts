import mongoose from '../config/dbConfig';
declare const fileModel: mongoose.Model<{
    filename: string;
    path: string;
    filetype: string;
}, {}, {}, {}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    filename: string;
    path: string;
    filetype: string;
}>>;
export default fileModel;

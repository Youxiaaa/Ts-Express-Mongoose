import mongoose from '../config/dbConfig';
declare const todoModel: mongoose.Model<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    deletedAt: Date;
    title?: string | undefined;
    isCompleted?: boolean | undefined;
}, {}, {}, {}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, mongoose.ResolveSchemaOptions<{
    timestamps: true;
}>, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    deletedAt: Date;
    title?: string | undefined;
    isCompleted?: boolean | undefined;
}>>;
export default todoModel;

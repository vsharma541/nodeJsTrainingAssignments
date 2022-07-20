import mongoose, {Document, Schema} from 'mongoose';

export interface Author extends Document{
    name: string,
    age?: number
}

interface AuthorDoc extends Author, Document {};

const AuthorSchema: Schema = new Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number
    }
})

const AuthorModel = mongoose.model<AuthorDoc>('Author', AuthorSchema);
export default AuthorModel;
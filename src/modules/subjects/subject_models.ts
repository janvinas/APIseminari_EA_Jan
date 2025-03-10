import mongoose from 'mongoose';
import User, { IUser } from '../users/user_models.js';

export interface ISubject {
    name: string,
    teacher: string,
    students: mongoose.ObjectId[] | IUser[],
    _id?: mongoose.ObjectId,
}

const subjectSchema = new mongoose.Schema<ISubject>({
    name: {
        type: String,
        required: true,
    },
    teacher: {
        type: String,
        required: true,
    },
    students: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: User,
    }]
})

const Subject = mongoose.model('Subject', subjectSchema);
export default Subject
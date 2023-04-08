import { Document, Model, Schema, model } from 'mongoose';
import { Buffer } from 'buffer';

interface IPost extends Document {
    img: Buffer;
    title: string;
    date: Date;
    body: string;
}

const postsSchema: Schema = new Schema({
    img: {
        type: Buffer,
        unique: true
    },
    title: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    body: {
        type: String,
        required: true
    }
});

const Post: Model<IPost> = model('Post', postsSchema);

export { IPost, Post };
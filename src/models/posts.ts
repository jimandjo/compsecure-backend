import { Document, Model, Schema, model } from 'mongoose';
import { Buffer } from 'buffer';

interface IPost extends Document {
    title: string;
    date: Date;
    body: string;
}

const postSchema: Schema = new Schema({

    title: {
        type: String,
        required: true,
        unique: true
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

const Post: Model<IPost> = model('Post', postSchema);

export { IPost, Post };
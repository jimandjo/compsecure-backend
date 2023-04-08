"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Post = void 0;
const mongoose_1 = require("mongoose");
const buffer_1 = require("buffer");
const postsSchema = new mongoose_1.Schema({
    img: {
        type: buffer_1.Buffer,
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
const Post = (0, mongoose_1.model)('Post', postsSchema);
exports.Post = Post;

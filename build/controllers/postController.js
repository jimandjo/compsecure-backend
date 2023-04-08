"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePost = exports.editPost = exports.addPost = exports.getOnePost = exports.getAllPosts = void 0;
const posts_1 = require("../models/posts");
const getAllPosts = async (req, res, next) => {
    let postList = await posts_1.Post.find();
    res.status(200).json(postList);
};
exports.getAllPosts = getAllPosts;
const getOnePost = async (req, res, next) => {
    let itemId = req.params.id;
    let post = await posts_1.Post.findById(itemId);
    res.status(200).json(post);
};
exports.getOnePost = getOnePost;
const addPost = async (req, res, next) => {
    const newPost = new posts_1.Post({
        img: req.params.img,
        title: req.body.title,
        date: req.body.date,
        body: req.body.body
    });
    try {
        await newPost.save();
        res.status(201).json(newPost);
    }
    catch (err) {
        res.status(500).send(err);
    }
};
exports.addPost = addPost;
const editPost = async (req, res, next) => {
    let itemId = req.params.id;
    const updatedPost = new posts_1.Post({
        _id: itemId,
        img: req.params.img,
        title: req.body.title,
        date: req.body.date,
        body: req.body.body
    });
    let result = await posts_1.Post.findByIdAndUpdate(itemId, { $set: updatedPost });
    res.status(200).json(result);
};
exports.editPost = editPost;
const deletePost = async (req, res, next) => {
    let itemId = req.params.id;
    let result = await posts_1.Post.findByIdAndDelete(itemId);
    res.status(200).json(result);
};
exports.deletePost = deletePost;

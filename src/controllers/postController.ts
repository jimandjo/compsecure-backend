import { RequestHandler } from "express";
import { Post, IPost } from "../models/posts";


export const getAllPosts: RequestHandler = async (req, res, next) => {
    let postList = await Post.find();
    res.status(200).json(postList);
}

export const getOnePost: RequestHandler = async (req, res, next) => {
    let itemId = req.params.id;
    let post = await Post.findById(itemId);
    res.status(200).json(post);
}

export const addPost: RequestHandler = async (req, res, next) => {
    const newPost: IPost = new Post({
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
}


export const editPost: RequestHandler = async (req, res, next) => {
    let itemId = req.params.id;
    const updatedPost: IPost = new Post({
        _id: itemId,
        title: req.body.title,
        date: req.body.date,
        body: req.body.body
    });

    let result = await Post.findByIdAndUpdate(itemId, { $set: updatedPost })

    res.status(200).json(result);
}

export const deletePost: RequestHandler = async (req, res, next) => {
    let itemId = req.params.id;
    let result = await Post.findByIdAndDelete(itemId);
    res.status(200).json(result);
}
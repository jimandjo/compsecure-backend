import { RequestHandler } from "express";
import { Coffee, ICoffee } from "../models/coffee";


export const getAllCoffee: RequestHandler = async (req, res, next) => {
    let coffeeList = await Coffee.find();
    res.status(200).json(coffeeList);
}

export const getOneCoffee: RequestHandler = async (req, res, next) => {
    let itemId = req.params.id;
    let coffee = await Coffee.findById(itemId);
    res.status(200).json(coffee);
}

export const addCoffee: RequestHandler = async (req, res, next) => {
    const newCoffee: ICoffee = new Coffee({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price
    });

    try {
        await newCoffee.save();
        res.status(201).json(newCoffee);
    }
    catch (err) {
        res.status(500).send(err);
    }
}


export const editCoffee: RequestHandler = async (req, res, next) => {
    let itemId = req.params.id;
    const updatedCoffee: ICoffee = new Coffee({
        _id: itemId,
        name: req.body.name,
        description: req.body.description,
        price: req.body.price
    });

    let result = await Coffee.findByIdAndUpdate(itemId, { $set: updatedCoffee })

    res.status(200).json(result);
}

export const deleteCoffee: RequestHandler = async (req, res, next) => {
    let itemId = req.params.id;
    let result = await Coffee.findByIdAndDelete(itemId);
    res.status(200).json(result);
}
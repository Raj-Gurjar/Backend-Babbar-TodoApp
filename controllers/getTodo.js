// const { response } = require('express');
const Todo = require("../models/todo.js");

exports.getTodo = async (req, res) => {
    try {

        const todos = await Todo.find({});

        res.status(200).json({
            success: true,
            data: todos,
            message: "Entry Todo data is fetched (GET) Successfully"
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            data: "internal server error(GET)",
            message: err.message,
        });
    }
};

exports.getTodoById = async (req, res) => {
    try {
        const id = req.params.id;
        const todo = await Todo.findById({ _id: id })


        if (!todo) {
            return res.status(404).json({
                success: false,
                message: "No Data Found with Given ld",
            })
        }

        //data for given id FOUND
        res.status(200).json({
            success: true,
            data: todo,
            message: `Todo ${id} data successfully fetched`,
        })

    }

    catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            data: "internal server error(GETby ID)",
            message: err.message,
        });

    }
}
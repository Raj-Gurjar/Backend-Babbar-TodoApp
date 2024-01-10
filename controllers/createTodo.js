const { response } = require('express');
const Todo = require("../models/todo.js");

exports.createTodo = async (req, res) => {
    try {
        const { title, description } = req.body;

        console.log('Request Body:', req.body);

        const createdTodo = await Todo.create({ title, description });

        console.log('Created Todo:', createdTodo);

        res.status(200).json({
            success: true,
            data: createdTodo,
            message: "Entry Created Successfully"
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            data: "internal server error",
            message: err.message,
        });
    }
};

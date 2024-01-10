const { response } = require('express');
const Todo = require("../models/todo.js");

exports.updateTodo = async (req, res) => {
    try {

        const { id } = req.params;
        const { title, description } = req.body;

        const updatedTodo = await Todo.findByIdAndUpdate(
            { _id: id },
            { title, description, updatedAt: Date.now() }
        );


        res.status(200).json({
            success: true,
            data: updatedTodo,
            message: `Entry updated of id : ${id} Successfully(updateTodo)`
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            data: "internal server error (updateTodo)",
            message: err.message,
        });
    }
};

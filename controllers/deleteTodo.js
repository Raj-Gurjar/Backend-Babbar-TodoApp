const { response } = require('express');
const Todo = require("../models/todo.js");

exports.deleteTodo = async (req, res) => {
    try {

        const { id } = req.params;


        await Todo.findByIdAndDelete(id);

        res.status(200).json({
            success: true,
            // data: deleteTodo,
            message: `Entry deleted of id : ${id} Successfully(deleteTodo)`
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            data: "internal server error (deleteTodo)",
            message: err.message,
        });
    }
};

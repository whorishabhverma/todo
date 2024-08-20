//path ko map controller ke sath
//import
const express = require('express')
const router = express.Router();

//import controller
const {createTodo} = require("../controller/createTodo");
const {getTodo,getTodoById} = require("../controller/getTodo");
const {updateTodo} = require("../controller/updateTodo");
const {deleteTodo} = require("../controller/deleteTodo");

//define api routes
router.post("/createTodo",createTodo);
router.get("/getTodos",getTodo);
router.get("/getTodos/:id",getTodoById);
router.delete("/deleteTodo/:id",deleteTodo);

module.exports = router;

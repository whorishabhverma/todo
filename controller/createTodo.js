const Todo = require("../models/Todo");


//define rout handlers, async: database me kuch krna ho tb nhi chaahenge ki main thread block ho
exports.createTodo= async(req,res)=>{
    try{
        //extract title and description from request body
        const {title,description} = req.body;
        //create a new Todo object and insert in db
        const response = await Todo.create({title,description});
        //send a json response with a success flag
        res.status(200).json(
            {
                success:true,
                data:response,
                message:'Entry Created succesfully'
            }
        );
    }
    catch(err){
        console.error(err);
        console.log(err);
        res.status(500).json({
            success:false,
            data:"internal server error",
            message:err.message,
        })
    }
}
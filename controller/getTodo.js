const Todo = require("../models/Todo");


//define rout handlers, async: database me kuch krna ho tb nhi chaahenge ki main thread block ho
exports.getTodo= async(req,res)=>{
    try{
        //fetch all todo from db
        const todos = await Todo.find({});
        //response 
        console.log(todos)
        res.status(200)
        .json({
            success:true,
            data:todos,
            message:"entrire todo data is fetched",
        })
    }
    catch(err){
        console.log(err);
        res.status(500)
        .json({
            success:true,
            error:err.message,
            message:"kuch gdbd h ",
        })
    }
}



exports.getTodoById = async(req,res)=>{
    try{
        //extarct todo bases on id

        const  id = req.params.id;
        const todo =  await Todo.findById({_id:id});//in db it is as _id
        //mile na mile id exist kre ya na kre
        if(!todo){
            return res.status(400).json({
                success:false,
                message:"no data found with given id"
            })     
        }
        //data for found
        res.status(200).json({
            success:true,
            data:todo,
            message: `todo ${id} data succesfully fetched `,
        })
    }
    catch(err){
        console.log(err);
        res.status(500)
        .json({
            success:true,
            error:err.message,
            message:"kuch gdbd h ",
        })
    }
}
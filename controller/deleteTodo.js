const Todo = require("../models/Todo");
//define rout handlers, async: database me kuch krna ho tb nhi chaahenge ki main thread block ho
exports.deleteTodo= async(req,res)=>{
    try{
        //extarct todo bases on id
        // const  id = req.params.id;
        const {id} = req.params;
        const todo =  await Todo.findOneAndDelete({_id:id});
        // in db it is as _id
        // mile na mile id exist kre ya na kre
        if(!todo){
            return res.status(400).json({
                success:false,
                message:"this id is not exist in our database"
            })     
        }
        // data for found
        res.status(200).json({
            success:true,
            data:todo,
            message: `todo ${id} data succesfully deleted `,
        })
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
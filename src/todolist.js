const TodoListModel = require("./TodoListModel")


  async function CreateTodo (req, res){
    const body = req.body;

    
    if(!body.label) throw Error("label is required in request body")

    

    const newTodo =await TodoListModel.insertMany({title:body.label, })
    

    return res.json({success:true, message :"Created succesFully", result:newTodo})

}


 async function listTodo (req, res) {

       const  listTodo = await TodoListModel.find({})
    
return res.json({success:true, message :"Request successfull",result:listTodo})
}

async function UpdateTodo(req, res){
    const {todoId} = req.params
    const title= req.body.label
    const createdBy= req.body.createdBy
    console.log(createdBy)

    const updatedTodo = await TodoListModel.findByIdAndUpdate(todoId, {title,createdBy}, {new:true}).catch(err=>console.log(err.message))

   return res.json({success:true, message:"Todo updated sucesfully ", result:updatedTodo})

}

async function deleteTodo(req, res){
    const id = req.params.id

    await TodoListModel.findByIdAndDelete(id)
        res.json({success:true, message:"Deleted successfully"})
}
module.exports={CreateTodo, listTodo,UpdateTodo,deleteTodo }
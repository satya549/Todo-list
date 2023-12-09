const mongoose = require("mongoose");
const express = require("express");
const {CreateTodo,listTodo, UpdateTodo, deleteTodo} = require("./src/todolist")

const app = express();
const PORT = 5000


const mongodbUrl ="mongodb+srv://satyaAdmin:dTI3dZjVg1YW5zfV@cluster0.sua69lm.mongodb.net/Blog?retryWrites=true&w=majority"
// mongoose
//   .connect(mongodbUrl)
//   .then(() => {
//     console.log("Database connected successfully");
    
//     // Start the Express server after the database connection is established
//     app.listen(8080, () => {
//       console.log("Todolist server listening at port 8080");
//     });
//   })
//   .catch((err) => console.log(err.message));
    app.use(express.json())

    // app.use(cors())
async function main(){

    console.log("connection started ")
   await  mongoose.connect(mongodbUrl, {dbName:"TodoList"}).then(()=>console.log("connection success"))

    app.get("/todoList", (req, res)=>{
        res.send("Server is responding")
        console.log("Hello world")
    })

    app.post("/create",CreateTodo )
    app.get("/list", listTodo)
    app.patch("/:todoId", UpdateTodo)
    app.delete("/:id", deleteTodo)

    app.listen(PORT, ()=>console.log(`todoList was listening at port :${PORT}`))
}
main().catch("SomeThing went wrong")
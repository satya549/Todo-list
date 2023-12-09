const mongoose = require('mongoose');

const TodoListSchema = new mongoose.Schema({
    title: {type :String, required:true},
    createdOn:{type :String, default:Date()},
    createdBy: {type:String ,default:"Satyadev Maurya"},
  
})

const TodoListModel =  mongoose.model("todo-list", TodoListSchema)

module.exports = TodoListModel
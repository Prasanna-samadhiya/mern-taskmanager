const express=require("express");
const router=express.Router();
const todom=require("../modals/UserModals")

router.get("/getTodoList", (req, res) => { 
    todom.find({}) 
        .then((todoList) => res.json(todoList)) 
        .catch((err) => res.json(err)) 
}); 
  
// Add new task to the database 
router.post("/addTodoList", (req, res) => { 
    todom.create({ 
        task: req.body.task, 
        status: req.body.status, 
        deadline: req.body.deadline,  
    }) 
        .then((todo) => res.json(todo)) 
        .catch((err) => res.json(err)); 
}); 
  
// Update task fields (including deadline) 
router.post("/updateTodoList/:id", (req, res) => { 
    const id = req.params.id; 
    const updateData = { 
        task: req.body.task, 
        status: req.body.status, 
        deadline: req.body.deadline,  
    }; 
    todom.findByIdAndUpdate(id, updateData) 
        .then((todo) => res.json(todo)) 
        .catch((err) => res.json(err)); 
}); 
  
// Delete task from the database 
router.delete("/deleteTodoList/:id", (req, res) => { 
    const id = req.params.id; 
    todom.findByIdAndDelete({ _id: id }) 
        .then((todo) => res.json(todo)) 
        .catch((err) => res.json(err)); 
}); 
module.exports=router;

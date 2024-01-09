const express=require("express");
const app=express();
const mongoose =require("mongoose");
const Useroute=require("./routes/Todo");
const cors=require("cors");
app.use(express.json())
const dotenv = require("dotenv");
app.use("/todo",Useroute);
dotenv.config();
app.use(cors());

//connecting to mongodb
mongoose.connect(process.env.URI+"/mern-todo").then(()=>{
    console.log("Connected to DB");
}).catch((error)=>{
    console.log(error);
})
//listening to the server
app.listen(process.env.PORT,()=>{
    console.log("listening at 5000");
})
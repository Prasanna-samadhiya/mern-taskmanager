const express=require("express");
const app=express();

app.post("/",(req,res)=>{
    const {name,no}=req.body;
    console.log(name,no);
})

app.listen(3000,()=>{
    console.log("connected");
})
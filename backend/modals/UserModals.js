const express=require("express");
const app=express();
const mongoose =require("mongoose");

const UserSchema = new mongoose.Schema({
    task:{
        type:String,
        required:true
    },
    status:{
        type:Boolean,
        required:true,
        default:false
    },
    deadline:{
        type:Date,
        required:true
    }
},{timestamps:true});

module.exports=mongoose.model("todo",UserSchema)
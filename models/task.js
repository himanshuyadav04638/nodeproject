import express from "express";
import mongoose from "mongoose";
import 'dotenv/config'
const app =express();
app.use(express.json())



const schema = new mongoose.Schema({
    title:{
        type:String,
        unique:true,
        require:true
    },
    description:{
        type:String,
        unique:true,
        require:true
    },
    isCompleted:{
        type:Boolean,
        unique:false,
        select:false,
        default:false
    },
    user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User"
    },
    userName:{
        type:mongoose.Schema.Types.String,  
        ref:"User"
    },
    createdAt:{
        type:Date,
        default:Date.now
    }

})

export const Task=mongoose.model("Task",schema)

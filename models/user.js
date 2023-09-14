import express from "express";
import mongoose from "mongoose";
import 'dotenv/config'
const app =express();
app.use(express.json())



const schema = new mongoose.Schema({
    name:String,
    email:{
        type:String,
        unique:true,
        require:true
    },
    password:{
        type:String,
        unique:false,
        select:false,
        require:true
    },
    createdAt:{
        type:Date,
        default:Date.now
    }

})

export const Users=mongoose.model("User",schema)

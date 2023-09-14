import { Task } from "../models/task.js";


export const addTask =async(req,res)=>{
   try {
    const {title,description} =req.body;
    await Task.create({title,description,user:req.user})
    res.status(200).json({
        success:true,
        message:"sucessfull add task"
    })
    
   } catch (error) {
    res.status(401).json({
        success:false,
        error:error.keyValue
    })
   }
  
}


export const getAllTask =async(req,res)=>{
    try {
     
     const task = await Task.find({})
     res.status(200).json({
         success:true,
         task
     })
     
    } catch (error) {
     res.status(401).json({
         success:false,
         error:error.keyValue
     })
    }
   
 }
 export const getTaskByID =async(req,res)=>{
    try {
     let  user=req.params.id
     const task = await Task.find({user})
     res.status(200).json({
         success:true,
         task
     })
     
    } catch (error) {
     res.status(401).json({
         success:false,
         error:error.keyValue
     })
    }
   
 }

 export const taskdelete =async(req,res)=>{
    try {
     let  {user}=req.body
     const task = await Task.deleteOne({user})
     res.status(200).json({
         success:true,
         message:"successfully delete items"
     })
     
    } catch (error) {
     res.status(401).json({
         success:false,
         error:error.keyValue
     })
    }
   
 }
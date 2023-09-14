import { Users } from "../models/user.js"
import bcrypt from "bcrypt"
import { sendCokkie } from "../utils/features.js"
import  Jwt  from "jsonwebtoken"
import ErrorHandle from "../middlewares/error.js"

export const loginUser =async(req,res,next)=>{
    try {
        console.log(req.body,"Check")
        const {email,password} =req.body;
        const user = await Users.findOne({email}).select("+password");
        console.log(user,"data")
        if(!user) return next(new ErrorHandle("invalid id ",401))
     
        const ismatch = await bcrypt.compare(password,user.password)
        if(!ismatch){
            return res.status(404).json({
                success:false,
                message:"password not match"
            })
        }
        sendCokkie(user,res,"login successfully",201)
        
    } catch (error) {
        next(error)
    }
  
}

export const register = async(req,res,next)=>{
   try {
    const {name,email,password} =req.body;
    let user = await Users.findOne({email});
    if(user) 
    return res.status(401).json({
        success:true,
        message:"User Already Exist"
    })
    const hashedpassword = await bcrypt.hash(password,10)
    user =await Users.create({name,email,password:hashedpassword});
    sendCokkie(user,res,"register successfully",201)
    
   } catch (error) {
      next(error)
   }

}

export const getMyProfile =async(req,res,next)=>{
   
  try {
    res.status(200).json({
        success:true,
        user:req.user
    })
    
  } catch (error) {
    next(error)
  }
  
}

export const getLogout =async(req,res)=>{
   
    res.status(200).cookie("token","",{expires:new Date(Date.now())}).json({
        success:true,
        message:"succesfully logout"
    })
  

}
export const getAllUsers =async(req,res,next)=>{
    try {
        console.log(req.query)
        const users = await Users.find({})
         res.json({
             success:true,
             users
         })
    } catch (error) {
        next(error)
    }
   
 
 }

export const creatUser =async(req,res)=>{
    console.log(req.body,"Check")
    const {name,email,password} =req.body;
    await Users.create({
        name:name,
        email:email,
        password:password,

    })
     res.status(201).cookie("tempi","lol").json({
         success:true,
         message:"suceesfully added"
     })
 
}

export const userById =async(req,res)=>{
    const {id} =req.query
    console.log(req.query)
    const users = await Users.findById(id)
     res.json({
         success:true,
         users
     })
 
 }
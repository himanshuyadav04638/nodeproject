import  Jwt  from "jsonwebtoken"
import { Users } from "../models/user.js";
export const isAuthenticated =async(req,res,next)=>{
    const {token} =req.cookies;
    if(!token){
        return res.status(404).json({
            sucess:false,
            message:"please login first"
        })
    }
    const decoded =Jwt.verify(token,process.env.JWT_SECRET);
    req.user =await Users.findById(decoded._id)
    next()
   
}
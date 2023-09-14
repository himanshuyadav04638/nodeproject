import  Jwt  from "jsonwebtoken"
export const sendCokkie =(user,res,message,statusCode=200)=>{
    const token =Jwt.sign({_id:user._id},process.env.JWT_SECRET)

    res.status(statusCode).cookie("token",token,{
        httpOnly:true,
        maxAge:15*60*1000,
       
    }).json({
        success:true,
        message,
        token
        
    })
}


import mongoose from "mongoose"


export const connectDB =()=>{
    try {
        mongoose.connect(process.env.MONGODB_URL,{dbName:'backendApi'}).then(()=>console.log("connected...")).catch((e)=>console.log(e))
        console.log("mongodb connected")
          
      } catch (error) {
          console.log("db error errror")
      }
      
}
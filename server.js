import {app} from "./App.js"
import { connectDB } from "./db/database.js"

connectDB()


app.listen(process.env.PORT,()=>{
  console.log("server is working")
})
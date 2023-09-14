import {app} from "./App.js"
import { connectDB } from "./db/database.js"

connectDB()


app.listen(3000,()=>{
  console.log("server is working")
})
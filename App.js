import express from "express";
import userRouter from "./routes/user.js"
import taskRouter from "./routes/task.js"
import 'dotenv/config'
import cookieParser from "cookie-parser";
import { ErrorMiddleWare } from "./middlewares/error.js";
import cors from "cors"
export const app =express();
app.use(cors({
    methods:["GET","POST","DELETE"],
    credentials:true,
}))

app.use(express.json());
app.use(cookieParser());
app.use(userRouter);
app.use(taskRouter);
app.use(ErrorMiddleWare);


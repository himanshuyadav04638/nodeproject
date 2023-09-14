import  express  from "express";
import { isAuthenticated } from "../middlewares/auth.js";
import { addTask, getAllTask, getTaskByID, taskdelete } from "../controllers/task.js";

const router = express.Router()


router.post("/addtask",isAuthenticated,addTask)
router.get("/alltask",isAuthenticated,getAllTask)
router.get("/gettask/:id",isAuthenticated,getTaskByID)
router.post("/taskdel",isAuthenticated,taskdelete)

export default router;
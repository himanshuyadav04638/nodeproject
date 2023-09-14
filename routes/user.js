import  express  from "express";
import { Users } from "../models/user.js";
import { creatUser, getAllUsers, getLogout, getMyProfile, loginUser, register, userById } from "../controllers/user.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router()


router.post("/login",loginUser)
router.post("/register",register)
router.get("/logout",getLogout)
router.get("/profile",isAuthenticated,getMyProfile)
router.get("/user/all",isAuthenticated,getAllUsers)



export default router;

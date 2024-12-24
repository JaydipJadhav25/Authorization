import { Router  } from "express";
import { userlogin, usersignup, verifyuser } from "../controllers/user.controllers.js";


const userRouter = Router();




userRouter.get("/" , (req , res)=>{
    return res.send("this is user routes");

})


userRouter.post("/signup" , usersignup);
userRouter.post("/verifyotp" , verifyuser);
userRouter.post("/login" , userlogin);




export { userRouter}
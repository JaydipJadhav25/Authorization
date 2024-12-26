import { Router  } from "express";
import { userlogin, userlogout, usersignup, verifyuser } from "../controllers/user.controllers.js";


const userRouter = Router();




userRouter.get("/" , (req , res)=>{
    return res.send("this is user routes");

})


userRouter.post("/signup" , usersignup);
userRouter.post("/verifyotp" , verifyuser);
userRouter.post("/login" , userlogin);
userRouter.get("/logout" , userlogout);




export { userRouter}
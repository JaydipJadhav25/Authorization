import { Router } from "express";
import jwt from "jsonwebtoken"


const router = Router();


router.get("/" , (req , res) =>{
    const token  = req.cookies.token;
    
    //decoded token 
    const user = jwt.verify(token ,"supaerman@123" );
    console.log("token in dashbord: " , user);


    return res.render("dashbord"  , {email : user.email });
})


export  default router;
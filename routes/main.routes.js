import { Router } from "express";


const router = Router();


router.get("/" , ( req , res ) =>{

    return res.render("main");
})

export default router
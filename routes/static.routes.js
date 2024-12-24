import  express  from "express";

const staticrouter = express.Router();



//page routes

staticrouter.get("/signup" , (req , res)=>{
    return res.render("signup");
})

staticrouter.get("/login" , (req , res)=>{
    return res.render("login");
})

staticrouter.get("/otp" , (req , res)=>{
    return res.render("otp");
})




export { staticrouter}
import  express  from "express";

const staticrouter = express.Router();



//page routes

staticrouter.get("/signup" , (req , res)=>{
    return res.render("signup");
})







export { staticrouter}
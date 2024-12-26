import jwt from "jsonwebtoken"
import { User } from "../model/user.model.js";

async function authcheck(req ,res ,next){
    const token = req.cookies.token
    console.log("token" , token)

    if(!token) return res.redirect("login");

    //decoded token 
    const user = jwt.verify(token , "supaerman@123");
      
    if(!user) return res.redirect("login");

    req.user = user;


    next();


}




async function admincheck (req , res, next ){

    const token = req.cookies.token;

    //decoded token 
    const decodedtoken = jwt.verify(token , "supaerman@123");

    //find user

    const user = await User.findOne({email : decodedtoken.email});

    if(!user) return res.render("login");

    //check role
    if(user.role !== "ADMIN") {
        return res.json({
            message: "ONly Admin Access"
        })
    }

    // return res.render("admin");

    next();


}


function restricto(roles) { // arrays of roles
    return function(req, res, next){

        if(!req.user) return res.render("login");


        //check role is 

        // [1, 2, 3,4,5,6].includes(2);true
        // [1, 2, 3,4,5,6].includes(9);false


        if(!roles.includes(req.user.role)) return res.end("UnAuthorizaed");


        next();

    }
}

export { authcheck , admincheck , restricto}
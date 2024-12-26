// import { use } from "express/lib/application.js";
import { User } from "../model/user.model.js";
import jwt from "jsonwebtoken";


const key = "supaerman@123";

const usersignup = async(req , res) =>{

    const { username , email , password} = req.body;


    //create user but check unique email 

    const exitsemail = await User.findOne({email : email});

  if(exitsemail){

    return res.json({
        message : "email is already used.........."
    })

   }

   //genrat otp and 
   function generateOTP() {
    return Math.floor(100000 + Math.random() * 900000); // Generates a number between 100000 and 999999
}


const userotp = generateOTP();


//create user

const user  = await User.create({
    username ,
    email,
    password,
    otp : userotp
});

console.log("new usseer : " , user);


//send otp and redirect on otp page 

return res.json({
    message : "user create acoount successfully........",
    user ,
    verify_your_accout :  "http://localhost:3000/otp" , 
});

  

}



async function verifyuser (req ,res) {
    // const   { name } = req.body;

    // console.log("name " , name);

    // console.log("user otp"  , otp);


    const otpArray = req.body["otp"]; // 'otp[]' matches the name attribute in the form
    // console.log('Received OTP:', otpArray);

    console.log("otp " , otpArray);


    // // Combine OTP digits into a single string
    const userotp = Array.isArray(otpArray) ? otpArray.join('') : otpArray;

    console.log('Received OTP:', userotp);


    //check otp
    const user = await User.findOne({
        otp : `${userotp}`|| " "
    });

    console.log("find user : ", user);


    if(!user){
        return res.json("Invalide User OTP");
    }

    //update filed
    user.verify = true
    await user.save();

    //redirect on home 

    return res.render('login');
}


const userlogin = async(req, res) =>{

    const { email , password} = req.body;



    // console.log("data" , email , password);


    //check codination

    const user = await User.findOne({email});

    console.log("user : " , user);

    if(!user){
        return res.json({
            message : "email is not exits  , create your account " 
        })
    }


    //now check vrification 
    if(!user.verify) return res.json({message : "verify your account first them login" , link : "http://localhost:3000/otp"});


    
    //check password 

    if(user.password !== password){
        // return res.json({
        //     message : "password is wrong "
        // })
        return res.render("login" , { result : "password is wrong "});
        
    }

    //token 
    const token = jwt.sign({
        _id : user._id,
        username : user.username,
        email : user.email,
        role : user.role 
    } , key);


    return res
    .cookie("token" , token)
    .render("home");



}


const userlogout = async(req, res) =>{

    return res.clearCookie("token").render("home");


}

export { usersignup , verifyuser , userlogin  , userlogout}
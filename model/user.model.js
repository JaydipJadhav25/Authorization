import mongoose from "mongoose";

const usershema = mongoose.Schema({

    name :{
        type :String,

    },
    email:{
        type :String,
        required :true,
    },
     password :{
        type :String,
        required :true,
    },
    role : {
        type : String,
        default : "USER",
    },
    otp :{
        type : String,
    },
    verify : {
        type : Boolean,
        default : false
    }

},
{
    timestamps :true
})

export const User = mongoose.model("User" , usershema)
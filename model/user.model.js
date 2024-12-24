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
    }

},
{
    timestamps :true
})

export const User = mongoose.model("User" , usershema)
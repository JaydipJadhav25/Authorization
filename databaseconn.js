import mongoose from "mongoose";


const DBConnection = async() =>{

    try {
        

        const connectiondb =  await  mongoose.connect("mongodb://localhost:27017/Authorization")
        console.log("Datebase Connected Successfully...")




    } catch (error) {
        console.log("database connection error");
        process.exit(0);
        
    }

}


export default DBConnection;
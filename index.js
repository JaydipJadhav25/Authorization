import express from "express";
import DBConnection from "./databaseconn.js";
import path from "path"
import { staticrouter } from "./routes/static.routes.js";


const app  = express();

app.set("view engine" , "ejs");
app.set("views" , path.resolve("./views"));
app.use(express.json({limit : "100kb"}))
app.use(express.urlencoded({
  extended : true,
  limit :"50kb"
}))




//database connection call
DBConnection();



app.get("/" , (req , res)=>{
    return res.render("home");
})


//static page routing......
app.use(staticrouter);





// app.get("/" , (req , res)=>{
//     return res.render("./views/home.html")
// })

// app.get("/" , (req , res)=>{
//     // return res.sendFile(__dirname , 'index.html');
//     res.sendFile(path.join(__dirname, 'home.html')); 
// })

app.listen(3000 , () =>{
    console.log("server starting on port 3000");
})
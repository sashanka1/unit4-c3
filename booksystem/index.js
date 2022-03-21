const express =require("express");
const app =express();

 
app.use(express.json());

const usercontroller =require("./controllers/user.controllers")

const connect  =require("./config/db");







app.listen(5300,async()=>{
   try {
       await connect()
   } catch (error) {
       console.log(error);
   }
   console.log("listining at 5300")
})
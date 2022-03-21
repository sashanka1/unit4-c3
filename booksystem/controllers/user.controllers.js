const express =require("express");

const{body,validationResult}=require("express-validator");

const User =require("../models/user.models");


const app =express();

// firstNmae:{type:String,require:true},
// lastName:{type:String,require:true},
// age:{type:Number,require:true},
// email:{type:String,require:true,unique:true},
// profileImage:{type:String},
// bookid:{type:mongoose.Schema.Types.ObjectId,ref:"book"},


app.post("/",

body("firstName").trim().not().isEmpty()
.withMessage("Not empty")
.isLength({min:3,max:30}),

body("firstName").trim()
.isLength({min:3,max:30}),


body("age")
.custom((val)=>{
    if(val<1|| val>150){
        throw new Error("betown 1 -150")
    }
}),

body("email")
.isEmail()
.custom(async(value)=>{
    const user =await User.find({email:value});
    if(user){
        throw new Error("email exist")
    }
    return true
}),


);
module.exports=app;
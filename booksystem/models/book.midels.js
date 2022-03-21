const mongoose=require("mongoose")

const bookSchema = mongoose.Schema(
    {
       like:{type:Number,default:0},
       coverimage:{type:String},
        content:{type:String,require:true},
        publisher:{type:mongoose.Schema.Types.ObjectId,ref:"publisher"}
    
      
    }
    ,{
        varsionKey:false,
        timestamps:true,
    },
);

module.exports=mongoose.model("book",bookSchema);
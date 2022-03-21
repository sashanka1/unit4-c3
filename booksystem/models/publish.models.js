const mongoose=require("mongoose")

const publishSchema = mongoose.Schema(
    {
       body:{type:string,require:true},
      
    
      
    }
    ,{
        varsionKey:false,
        timestamps:true,
    },
);

module.exports=mongoose.model("publisher",publishSchema);
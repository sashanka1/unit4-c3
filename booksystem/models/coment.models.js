const mongoose=require("mongoose")

const comentSchema = mongoose.Schema(
    {
       body:{type:string,require:true},
       userid:{type:mongoose.Schema.Types.ObjectId,ref:"user"},
       bookid:{type:mongoose.Schema.Types.ObjectId,ref:"book"}
      
    }
    ,{
        varsionKey:false,
        timestamps:true,
    },
);

module.exports=mongoose.model("coment",comentSchema);
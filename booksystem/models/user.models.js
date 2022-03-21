const mongoose=require("mongoose")

const userSchema = mongoose.Schema(
    {
        firstNmae:{type:String,require:true},
        lastName:{type:String,require:true},
        age:{type:Number,require:true},
        email:{type:String,require:true,unique:true},
        profileImage:{type:String},
        bookid:{type:mongoose.Schema.Types.ObjectId,ref:"book"},

    }
    ,{
        varsionKey:false,
        timestamps:true,
    },
);

module.exports=mongoose.model("user",userSchema);
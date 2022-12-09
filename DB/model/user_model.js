import {Schema,model  } from "mongoose";
const userSchema= new Schema({
    userName:{type:String,required:true,},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true,},
    profileImg:{type:String},
    coverPic:{type:Array,},
    confirmEmail:{type:Boolean,default:false,},
    role:{type:String,default:"user",enum:["user","admin"]},
    phone:{type:String},
    age:{type:Number}
    
},{
    timestamps:true
}) 
const userModel = model("user",userSchema)
export default userModel
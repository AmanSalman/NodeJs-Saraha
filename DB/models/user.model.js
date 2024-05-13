import mongoose, { Schema, model } from "mongoose";


const userSchema = new Schema({
    name:{
        type:String,
        required :true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    cPassword:{
        type:Boolean,
    },
    gender:{
        type:String,
        enum:['female','male'],
        default:'female'
    },
    confirmEmail:{
        type:Boolean,
        required:true,
        default:false
    }

}, {
    timestamps:true
});


const userModel = model('user', userSchema);

export default userModel;
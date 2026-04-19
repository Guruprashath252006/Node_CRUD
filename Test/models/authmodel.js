import mongoose from "mongoose";


const createSchema = new mongoose.Schema({


    name:{
        type:String,
        required:true,
        unique:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    age:{
        type:Number,
        required:true,
    }
},{timestamps:true})


const authmodel = mongoose.model("creatingschema",createSchema)

export default authmodel
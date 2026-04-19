import mongoose from "mongoose";


const userSchema = new mongoose.Schema({


userId:{
    type:String,
    required: true,
    unique:true,
},
username:{
     type:String,   
     required: true,
     trim:true

},

},
{timestamps:true})



const userModel = mongoose.model("usersData",userSchema)


export default userModel
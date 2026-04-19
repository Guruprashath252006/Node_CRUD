import mongoose from "mongoose";


const userShceme = new mongoose.Schema({


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
mobilenumber:{
    type:Number,  
    required:true,
    trim:true
},
createdby:{
    type:String,
    default:"Admin"
},
updatedby:{
    type:String,
    default:"Admin"
}

},{timestamps:true})



const userModel = mongoose.model("usersData",userShceme)


export default userModel
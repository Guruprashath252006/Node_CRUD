



import User from '../models/userModel.js';

export const createData = async(req,res)=>{
    
  try {

const {userId,username} = req.body



const _create = await User.create({
    userId,
    username,
})


res.status(201).json({msg:"Successfully Added"})

    
  } catch (error) {

    console.log('Error',error);
    
    
  }


    
}



import userModel from "../models/userModel.js";

export const createData = async(req,res)=>{
    
  

  try {

const {userId,username,mobilenumber} = req.body

// if(!userId || !username || !mobilenumber ){

//     res.status(404).json({msg:"Please Filed the Data"})
//     return

// }

const create = await userModel.create({userId,username,mobilenumber})


res.status(201).json({msg:"Successfully Added"})

    
  } catch (error) {

    console.log('Error',error);
    
    
  }


    
}


export const getData = async(req,res)=>{

    try {

        const fetchData = await userModel.find()

        res.status(200).json({fetchData})
        
    } catch (error) {

        console.log('Something error',error);
        
        
    }

}


export const getDatayId = async(req,res)=>{

    try {

        const {userid}  = req.params

        const fetchData = await userModel.findById(userid)
        console.log(fetchData);

       if(!fetchData){

        res.status(500).json({msg:"No Data Found"})
       return
       }
        
        res.status(200).json({fetchData})
        
    } catch (error) {

        console.log('Something error',error);
        res.status(500).json({msg:"No Data Found"})
        
    }

}


export const updatedDatayId = async(req,res)=>{


    try {
   const {userid}  = req.params
   const updateData = await userModel.findByIdAndUpdate(userid,req.body)
   res.status(200).json({msg:"Successfully Updated"})
        
    } catch (error) {
console.log('Something error',error);
        res.status(500).json({msg:"No Data Found"})

        
    }

}

export const deleteDatayId = async (req,res)=>{
const {userid}  = req.params
    const dete = await userModel.findByIdAndDelete(userid)
    res.status(200).json({msg:"Are Sure To delete"})

}
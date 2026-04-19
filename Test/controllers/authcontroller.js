import authmodel from '../models/authmodel.js'

export const creating = async(req,res)=>{

    try {
        const {name,email,age}=req.body
        const data = await authmodel.create({name,email,age})
        res.status(200).json({msg:"data entered successfully"})
        
    } catch (error) {
        console.log(`Something error occured`,error);
        res.status(500).json({msg:"Internal server error"})
        
    }
}

export const getdata = async(req,res)=>{

    try {
        const data1= await authmodel.find()
        res.status(200).json({data1})
    } catch (error) {
        console.log(`Something error occured`,error);
        res.status(500).json({msg:"Internal server error"})
    }
}


export const getbyId = async(req,res)=>{

    try {
        const {id}=req.params
        const data2 = await authmodel.findById(id)
        res.status(200).json({data2})
    } catch (error) {
         console.log(`Something error occured`,error);
        res.status(500).json({msg:"Internal server error"})
    }
}

export const dataupdate = async(req,res)=>{

    try {
        const {id}=req.params
        const data3 = await authmodel.findByIdAndUpdate(id,req.body,{new:true})
        res.status(200).json({msg:"Data updated successfully", updatedData:data3})


    } catch (error) {
        console.log(`Something error occured`,error);
        res.status(500).json({msg:"Internal server error"})
    }
}


export const deleting = async(req,res)=>{
    try {
        const {id}=req.params
        const data3= await authmodel.findByIdAndDelete(id)
        res.status(200).json({msg:"Data deleted successfully", deletedData:data3})

        
    } catch (error) {
        console.log(`Something error occured`,error);
        res.status(500).json({msg:"Internal server error"})
    }
}
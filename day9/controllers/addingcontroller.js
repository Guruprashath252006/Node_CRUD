import addingmodel from '../models/addingmodel.js'

export const addingdata = async(req,res)=>{

    try {
        const {name,age,college} = req.body;
        const data = await addingmodel.create({name,age,college})
        res.status(201).json({msg:"data entered successfully"})
    } catch (error) {
        console.log(`Error occurred`,error);
        res.status(500).json({msg:"Internal server error"})
        
    }
}

export const gettingdata = async(req,res)=>{
    try {
        const data = await addingmodel.find()
        res.status(200).json(data)
    } catch (error) {
        console.log(`Error occurred`,error);
        res.status(500).json({msg:"Internal server error"})
    }
}

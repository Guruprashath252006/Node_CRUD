export const authData = (req,res)=>{
    console.log(req);

    const {name,subject,datas}=req.body


    if(name === "React"){
        res.status(200).json({msg:"Data Found"})
    }
    else{
         res.status(400).json({msg:"Data not foundFound"})
    }
}

export const adding_data = async(req,res)=>{



    try {
        console.log(req.body);
        res.status(200).json({ message: 'Data added successfully' });
        
    } catch (error) {
        console.log(`Error occured `,error);
        res.status(500).json({ error: 'An error occurred' });
        
    }

}   
import express from 'express'
import dotenv from "dotenv"
import cors from "cors"


dotenv.config()


const app = express()
const POST = process.env.PORT || 5000


app.use(cors())
app.use(express.json())

app.use("/app/user/:userid",(req,res)=>{
    console.log(req);
    res.status(200).json({msg:"Run"})
})




app.listen(POST,()=>{
    console.log(`Server Running on http://localhost:${POST}`)

})
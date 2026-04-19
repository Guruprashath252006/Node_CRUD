import dotenv from 'dotenv'
import cors from 'cors'
import express from 'express'
import authRoute from './Routes/authRoute.js'
import { connectDB } from './config/db.js'

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())

const PORT = process.env.PORT || 3000


connectDB()

app.use("/api/auth",authRoute)

app.listen(PORT, ()=>{

    console.log(`Sucessfully Connected on http://localhost:${PORT}`);
})


//http://localhost:5000/api/auth



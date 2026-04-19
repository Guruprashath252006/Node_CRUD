import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import addingroute from './routes/addingroute.js'
import connectDB from './config/db.js'

dotenv.config();

const app= express()

connectDB()
app.use(cors())
app.use(express.json())

app.use("/api/auth",addingroute)

const PORT = process.env.PORT || 3000

app.listen(PORT,()=>{
    console.log(`Successfully connected on http://localhost:${PORT}`);
})


//http://localhost:5000/api/auth
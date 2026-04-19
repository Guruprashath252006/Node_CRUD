import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import authRoute from "./routes/authRoutes.js"


dotenv.config();

const app = express();


app.use(cors());
app.use(express.json())

const PORT = process.env.PORT || 5000;
app.use("/api/auth",authRoute)



app.listen(PORT,()=>{
    console.log(`Successfully connected server on http://localhost:${PORT}`)
})



//http://localhost:5000/api/auth/user

import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import authroute from "./routes/authRoute.js";


dotenv.config();

connectDB()
const app = express();


app.use(cors());
app.use(express.json());


app.use("/api/users",authroute)
// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 3000;

app.listen(PORT,()=>{
    console.log(`Server connected on http://localhost:${PORT}`);
})



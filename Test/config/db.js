import mongoose from "mongoose";

export const connectDB = async()=>{

    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`Database connected on ${conn.connection.host}`);
        
    } catch (error) {
        console.log(`Error ocuured in db`,error);
        process.exit(0); // Exit on DB connection error
        
    }
}
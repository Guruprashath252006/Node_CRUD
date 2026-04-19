import mongoose from "mongoose";

const connectDB = async ()=>{

    

    try {
        // eslint-disable-next-line no-undef
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`Database Connected Successfully ${conn.connection.host}`);

    } catch (error) {
        console.log("Error Occured",error);
        // eslint-disable-next-line no-undef
        process.exit(0)
    }

}


export default connectDB
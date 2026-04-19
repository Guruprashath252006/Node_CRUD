import mongoose from "mongoose";

const addingschema = new mongoose.Schema({
    name: String,
    age: Number,
    college: String,
    createdBy: { type: String, default: "Admin" },
    updatedBy: { type: String, default: "Admin" }
}, { timestamps: true })

const usermodel = mongoose.model("mydata", addingschema)

export default usermodel;
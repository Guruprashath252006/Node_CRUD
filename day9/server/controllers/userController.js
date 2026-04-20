import User from '../models/userModel.js';

export const createUser = async (req, res) => {
    try {
        const { name, email, age } = req.body;

        // Validation for required fields
        if (!name || !email) {
            return res.status(400).json({ success: false, message: "Name and email are required fields" });
        }

        // Handle duplicate email check before insertion
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ success: false, message: "Email already exists" });
        }

        const newUser = await User.create({ name, email, age });

        res.status(201).json({ 
            success: true, 
            message: "User inserted successfully",
            data: newUser
        });
    } catch (error) {
        console.error(`Error occurred while creating user:`, error);
        
        // Handle Mongoose duplicate key error (if the manual check above is bypassed somehow)
        if (error.code === 11000) {
            return res.status(400).json({ success: false, message: "Email already exists" });
        }

        res.status(500).json({ success: false, message: "Internal server error" });
    }
}

export const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        
        // Handle empty database
        if (users.length === 0) {
            return res.status(200).json({ 
                success: true,
                count: 0,
                message: "No users found in the database",
                data: []
            });
        }

        res.status(200).json({
            success: true,
            message: "Users fetched successfully",
            count: users.length,
            data: users
        });
    } catch (error) {
        console.error(`Error occurred while fetching users:`, error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
}

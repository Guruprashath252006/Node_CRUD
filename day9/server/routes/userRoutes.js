import express from 'express';
import { createUser, getAllUsers } from '../controllers/userController.js';

const router = express.Router();

// POST API to insert user data
router.post('/add', createUser);

// GET API to fetch all users
router.get("/getting", getAllUsers);

export default router;

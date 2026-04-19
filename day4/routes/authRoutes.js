import express from 'express';
import { authData } from '../controller/authController.js';

const route = express.Router()


route.post("/user",authData)


export default route



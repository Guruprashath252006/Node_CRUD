import express from 'express'
import { createData } from '../controllers/authController.js'


const route = express.Router()


route.post("/create",createData)

export default route


// http://localhost:5000/api/users/create
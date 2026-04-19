import express from 'express'
import { adding_data } from '../controllers/authController.js'



const routes = express.Router()



routes.post("/add",adding_data)



// http://localhost:5000/api/auth/add

export default routes
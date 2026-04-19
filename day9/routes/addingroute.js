import express from 'express';
import { addingdata, gettingdata } from '../controllers/addingcontroller.js';

const routes = express.Router();

routes.post('/add',addingdata)
routes.get("/getting",gettingdata)

export default routes;

//http://localhost:5000/api/auth/add
//http://localhost:5000/api/auth/getting
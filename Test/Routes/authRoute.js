import express from 'express'
import {creating, dataupdate, deleting, getbyId, getdata} from '../controllers/authcontroller.js'

const routes = express.Router()

routes.post('/add',creating)
routes.get('/get',getdata)
routes.get('/get/:id',getbyId)
routes.put('/put/:id',dataupdate)
routes.delete('/delete/:id',deleting)

export default routes


//http://localhost:5000/api/auth/add
//http://localhost:5000/api/auth/get
//http://localhost:5000/api/auth/get/:id
//http://localhost:5000/api/auth/put/id
//http://localhost:5000/api/auth/delete/id


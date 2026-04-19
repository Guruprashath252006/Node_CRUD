import express from 'express'
import { movieCreate, movieFilter, moviegetbyParams, movieToken } from '../controllers/movieController.js'


// // http://localhost:5000/api/movie/create
// // http://localhost:5000/api/movie/getbyparams/1001
// // http://localhost:5000/api/movie/moviefilter
// // http://localhost:5000/api/movie/additional

const route = express.Router()

route.post('/create',movieCreate)
route.get('/getbyparams/:movieid',moviegetbyParams)
route.get('/moviefilter',movieFilter)
route.get('/additional',movieToken)
export default route
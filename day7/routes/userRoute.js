import express from 'express'
import { createData,getData,getDatayId,updatedDatayId,deleteDatayId } from '../controllers/userController.js'


const route = express.Router()


route.post("/create",createData)
route.get("/get",getData)
route.get("/getid/:userid",getDatayId)
route.put("/getupdateid/:userid",updatedDatayId)
route.delete("/getdeleteid/:userid",deleteDatayId)
export default route
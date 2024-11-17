import express from 'express'
import { loginController, registerController } from '../controllers/authController.js'

const routers = express.Router()

//routes
//Register || POST
routers.post('/register', registerController)


// LOGIN || POST
routers.post('/login', loginController)

export default routers;
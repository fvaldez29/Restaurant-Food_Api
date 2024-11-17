import express from 'express'

import authMiddleware from '../middlewares/authMiddleware.js'
import { addNewFoodController, getAllFoodController } from '../controllers/foodController.js'

const foodRoutes = express.Router()

//? ADD NEW FOODS | POST
foodRoutes.post('/addFood', authMiddleware, addNewFoodController)

//? GET ALL FOODS | GET
foodRoutes.get('/getAll', getAllFoodController)


export default foodRoutes
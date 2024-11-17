import express from 'express'
import authMiddleware from '../middlewares/authMiddleware.js'
import { addNewFoodController, deleteFoodController, getAllFoodController, getFoodByIdController, getFoodByRestaurant, updateFoodController } from '../controllers/foodController.js'

const foodRoutes = express.Router()

//? ADD NEW FOODS | POST
foodRoutes.post('/addFood', authMiddleware, addNewFoodController)

//? GET ALL FOODS | GET
foodRoutes.get('/getAll', getAllFoodController)


//? GET FOODS BY ID | GET
foodRoutes.get('/get/:id', getFoodByIdController)

//? GET FOODS BY RESTAURANT
foodRoutes.get('/getByRestaurant/:id', getFoodByRestaurant)

//? UPDATE FOOD | PUT
foodRoutes.put('/update/:id', authMiddleware, updateFoodController)

//? DELETE FOOD
foodRoutes.delete('/delete/:id', authMiddleware, deleteFoodController)

export default foodRoutes
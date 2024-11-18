import express from 'express'
import authMiddleware from '../middlewares/authMiddleware.js'
import { addNewFoodController, deleteFoodController, getAllFoodController, getFoodByIdController, getFoodByRestaurant, orderStatusController, placeOrderController, updateFoodController } from '../controllers/foodController.js'
import adminMiddleware from '../middlewares/adminMiddleware.js'

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

// ORDER FOOD
foodRoutes.post('/order', authMiddleware, placeOrderController)

// ORDER STATUS
foodRoutes.post('/orderStatus/:id', authMiddleware, adminMiddleware, orderStatusController);

export default foodRoutes
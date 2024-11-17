import express from 'express'
import authMiddleware from '../middlewares/authMiddleware.js'
import { createRestaurantController, deteleRestaurant, getRestaurantById, getRestaurantDataController } from '../controllers/restaurantController.js'


const restaurantRoute = express.Router()


//? CREATE RESTAURANT || ROUTES
restaurantRoute.post('/create', authMiddleware, createRestaurantController)

//? GET ALL DATA RESTAURANT || GET

restaurantRoute.get('/getAll', getRestaurantDataController)

//? GET RESTAURANT BY ID
restaurantRoute.get('/get/:id', getRestaurantById)

//? DELETE RESTAURANT || DELETE
restaurantRoute.delete('/delete/:id', authMiddleware, deteleRestaurant)

export default restaurantRoute
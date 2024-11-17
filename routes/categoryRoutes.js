import express from 'express'

import authMiddleware from '../middlewares/authMiddleware.js'
import { createCategoryController, deleteCategoryController, getAllCategory, updateCategoryController } from '../controllers/categoryController.js'

const categories = express.Router()




//CREATE CATEGORY
categories.post('/create', authMiddleware, createCategoryController)

//GET ALL CATEGORY
categories.get('/getAll', authMiddleware, getAllCategory)

//UPDATE CATEGORY
categories.put('/update/:id', authMiddleware, updateCategoryController)

//DELETE CATEGORY
categories.delete('/delete/:id', authMiddleware, deleteCategoryController)


export default categories
import { category } from "../models/categoryRestaurant.js"
import categories from "../routes/categoryRoutes.js"

// CREATE CATEGORY
export const createCategoryController = async (req, res) => {
    try {

        const { title, imageUrl } = req.body
        //Validation
        if (!title || !imageUrl) {
            return res.status(500).send({
                success: false,
                message: 'please provide category title or image'
            })
        }

        const newCategory = new category({
            title, imageUrl
        })
        await newCategory.save()
        res.status(201).send({
            success: true,
            message: "New Category created",
            newCategory
        })

    } catch (error) {
        console.error(error)
        res.status(500).send({
            success: false,
            messagge: 'Add new category error',
            error
        })
    }
}

export const getAllCategory = async (req, res) => {
    try {


        const getCategory = await category.find({})
        if (!getCategory) {
            return res.status(404).send({
                success: false,
                message: 'No Categories Found'
            })
        }

        res.status(200).send({
            success: true,
            "Category total": getCategory.length,
            getCategory
        })

    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: 'Error in get all category API',
            error
        })
    }
}


//? UPDATE CATEGORY
export const updateCategoryController = async (req, res) => {
    try {
        const { id } = req.params
        const { title, imageUrl } = req.body
        const updatedCategory = await category.findByIdAndUpdate(id, { title, imageUrl }, { new: true })
        if (!updatedCategory) {
            return res.status(500).send({
                success: false,
                message: 'Not category Found'
            })
        }

        res.status(200).send({
            success: true,
            message: 'Category updated',
            updatedCategory
        })

    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: 'Error in update Category',
            error
        })
    }
}

export const deleteCategoryController = async (req, res) => {
    try {
        const { id } = req.params
        if(!id){
            return res.status(500).send({
                success: false,
                message: 'Please Provide an Id'
            })
        }

        const categoryId = await category.findById(id)
        if(!categoryId){
            return res.status(404).send({
                success: false,
                message: 'No Category Found with an id'
            })
        }

        await category.findByIdAndDelete(id)
        res.status(200).send({
            success: true,
            message: 'Category deleted successfully'
        })
        
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: 'Error in Delete Category API'
        })
    }
}
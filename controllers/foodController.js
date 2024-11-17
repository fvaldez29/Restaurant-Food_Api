import { food } from "../models/foodModel.js"


export const addNewFoodController = async (req, res) => {
    try {
        const {
            title,
            description,
            price,
            imageUrl,
            foodTags,
            category,
            code,
            isAvailable,
            restaurant,
            rating,
            ratingCount,
         } = req.body

         //Validation
         if(!title || !description || !price || !restaurant){
            return res.status(500).send({
                success: false,
                message: 'Please provide all fields'
            })
         }

         const newFood = new food(
            {
                title,
                description,
                price,
                imageUrl,
                foodTags,
                category,
                code,
                isAvailable,
                restaurant,
                rating,
                ratingCount,
             }
         )

         await newFood.save()

         res.status(201).send({
            success: true,
            message: 'Food Created'
         })


    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: 'Error in Add new Foods'
        })
    }
}

export const getAllFoodController = async (req, res) => {
    
    try {
        const foodData = await food.find({})
    if(!foodData){
        return res.status(404).send({
            success: false,
            message: 'Error in Find food'
        })

        
    }
    res.status(200).send({
        success: true,
        foodAmount: foodData.length,
        foodData 
    })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: 'Error in All Food Api'
        })
    }

}
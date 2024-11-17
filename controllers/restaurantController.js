import { restaurant } from "../models/restauranModel.js"

export const createRestaurantController = async (req, res) => {
    try {

        const { title, imageUrl, foods, time, pickup, delivery, isOpen, logoUrl, rating, ratingCount, code, coords } = req.body

        if (!title || !coords) {
            return res.status(500).send({
                success: false,
                message: 'please provide a title and address'
            })
        }

        const newRestaurant = new restaurant({
            title,
            imageUrl,
            foods,
            time,
            pickup,
            delivery,
            isOpen,
            logoUrl,
            rating,
            ratingCount,
            code,
            coords
        })

        await newRestaurant.save()

        res.status(201).send({
            success: true,
            message: 'New Restaurant DB Created'
        })

    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: 'Error in create restaurant api',
            error
        })
    }
}

//GET ALL RESTAURANT

export const getRestaurantDataController = async (req, res) => {
    try {

        const restaurantData = await restaurant.find({})



        if (!restaurantData) throw new Error({ success: false, message: 'No restaurant found' })

        res.status(200).send({
            success: true,
            totalCount: restaurantData.length,
            restaurantData
        })


    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: 'Error getting restaurant datas',
            error
        })
    }
}

export const getRestaurantById = async (req, res) => {
    try {
        // Obtener el ID de los parámetros de la URL
        const restaurantID = req.params.id;

        // Validar si el ID fue proporcionado
        if (!restaurantID) {
            return res.status(400).send({
                success: false,
                message: 'Restaurant ID is required',
            });
        }

        // Buscar el restaurante por ID
        const restaurantData = await restaurant.findById(restaurantID);

        // Verificar si el restaurante fue encontrado
        if (!restaurantData) {
            return res.status(404).send({
                success: false,
                message: 'Restaurant not found',
            });
        }

        // Responder con los datos del restaurante
        res.status(200).send({
            success: true,
            message: 'Restaurant fetched successfully',
            restaurant: restaurantData,
        });
    } catch (error) {
        console.error(error);
        res.status(500).send({
            success: false,
            message: 'Error in fetching restaurant by ID',
            error: error.message,
        });
    }
};


export const deteleRestaurant = async (req, res) => {
    try {
        const restaurantDelete = await restaurant.findByIdAndDelete(req.params.id)
        if(!restaurantDelete){
            return res.status(404).send({
                success: true,
                message: 'Restaurant could not be delete'
            })
        }


        res.status(200).send({
            success: true,
            message: "Restaurant deleted"
        })


    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: "Restaurant Delete Error"
        })
    }
}
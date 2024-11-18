import { food } from "../models/foodModel.js"
import { Order } from "../models/orderModel.js"


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
        if (!title || !description || !price || !restaurant) {
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
        if (!foodData) {
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

export const getFoodByIdController = async (req, res) => {

    try {
        //Find by id 
        const foodData = await food.findById(req.params.id)

        if (!foodData) {
            return res.status(404).send({
                success: false,
                message: 'Error in Finding Food By Id'
            })
        }
        res.status(200).send({
            success: true,
            message: 'Food found in APi',
            foodData
        })
    } catch (error) {
        console.error(error)
        res.status(500).send({
            success: false,
            error
        })
    }
}

export const getFoodByRestaurant = async (req, res) => {
    try {
        // Obtener el ID del restaurante desde los parámetros
        const restaurantId = req.params.id;

        // Buscar alimentos por el campo "restaurant"
        const foodByRestaurant = await food.find({ restaurant: restaurantId });

        if (!foodByRestaurant || foodByRestaurant.length === 0) {
            return res.status(404).send({
                success: false,
                message: 'No food items found for this restaurant'
            });
        }

        res.status(200).send({
            success: true,
            message: 'Food based on Restaurant',
            foodByRestaurant
        });
    } catch (error) {
        console.error(error);
        res.status(500).send({
            success: false,
            message: 'Error fetching food by restaurant',
            error
        });
    }
};

export const updateFoodController = async (req, res) => {
    try {
        const foodId = req.params.id
        if (!foodId) {
            return res.status(404).send({
                success: false,
                message: 'No Food Id was Found'
            })

        }

        const updates = req.body

        const foodUpdate = await food.findByIdAndUpdate(foodId, updates, { new: true })
        if (!foodUpdate) {
            return res.status(500).send({
                success: false,
                message: 'Error in updated food'
            })
        }

        res.status(200).send({
            success: true,
            message: 'Food updated successfuly',
            foodUpdate
        })

    } catch (error) {
        console.log(error)
        res.status(500).send({
            message: 'Error in updated'
        })
    }
}

export const deleteFoodController = async (req, res) => {
    try {
        const id = req.params.id
        if (!id) {
            return res.status(500).send({
                success: false,
                message: 'Id Not Found'
            })
        }

        const deleteFood = await food.findByIdAndDelete(id)

        if (!deleteFood) {
            return res.status(500).send({
                success: false,
                message: 'Error in deleted Food API'
            })
        }
        res.status(200).send({
            success: true,
            message: "Food deleted by ID"
        })


    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: 'Error In Delete Food'
        })
    }
}
// PLACE ORDER
export const placeOrderController = async (req, res) => {
    try {
      const { cart } = req.body;
      if (!cart) {
        return res.status(500).send({
          success: false,
          message: "please food cart or payemnt method",
        });
      }
      let total = 0;
      //cal
      cart.map((i) => {
        total += i.price;
      });
  
      const newOrder = new Order({
        foods: cart,
        payment: total,
        buyer: req.body.id,
      });
      await newOrder.save();
      res.status(201).send({
        success: true,
        message: "Order Placed successfully",
        newOrder,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "Erorr In Place Order API",
        error,
      });
    }
  };


  export const orderStatusController = async (req, res) => {
    try {
        const orderId = req.params.id
        if(!orderId){
            return res.status(404).send({
                success: true,
                message: 'Order Id not'
            })
        }
        const { status } = req.body
        const order = await Order.findByIdAndUpdate(orderId, {status}, {new: true})
        res.status(200).send({
            success: true,
            message: 'Order Status Updated'
        })
    } catch (error) {
        console.log(error)

    }
  }
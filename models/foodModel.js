import mongoose from 'mongoose'

//Schema 
const foodSchema = new mongoose.Schema({

    title: {
        type: String,
        required: [true, 'Food title is require']
    },
    description: {
        type: String,
        required: [true, 'Food description is require']
    },
    price: {
        type: Number,
        required: [true, 'Food price is require']
    },
    imageUrl: {
        type: String,
        url: 'https://cdn-icons-png.flaticon.com/512/2927/2927347.png'
    },
    foodTags: {
        type: String
    },
    category: {
        type: String,
    },
    code: {
        type: String,
    },
    isAvailable: {
        type: Boolean,
        default: true
    },
    restaurant: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Restaurant'
    },
    rating: {
        type: Number,
        default: 5,
        min: 1,
        max: 5
    },
    ratingCount: {
        type: String,
    }



}, { timestamps: true })

export const food = mongoose.model('Foods', foodSchema);

import mongoose from 'mongoose'

//Schema 
const categorySchema = new mongoose.Schema({

    title: {
        type: String,
        required: [true, 'Category title is required']
    },
    imageUrl: {
        type: String,
        default: "https://cdn-icons-png.flaticon.com/512/2927/2927347.png"
    }

}, { timestamps: true })

export const category = mongoose.model('Category', categorySchema);

import mongoose from 'mongoose';

// Schema
const ordersSchema = new mongoose.Schema(
    {
        foods: [
            { 
                type: mongoose.Schema.Types.ObjectId, 
                ref: "Foods" 
            }
        ],
        payment: {},
        buyer: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
        status: {
            type: String,
            enum: ["preparing", "prepare", "on the way", "delivered"],
            default: "preparing",
        },
    },
    { timestamps: true });

export const Order = mongoose.model('Orders', ordersSchema);

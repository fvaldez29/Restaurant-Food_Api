import mongoose from "mongoose";

//schema
const userSchame = new mongoose.Schema({
    userName:{
        type: String,
        required: [true, 'Username is required']
    }, 
    email: {
        type: String,
        required: [true, 'Email is required']
    },
    password: {
        type: String,
        required: [true, 'Password is required']
    },
    address: {
        type: Array,
    },
    phone: {
        type: String,
        required: [true, 'Phone number is require']
    },
    userType:{
        type: String,
        required: [true, 'user type is required'],
        default: 'client',
        enum: ['client', 'admin', 'vendor', 'driver']
    },
    profile:{
        type:String,
        default: 'https://img.freepik.com/premium-vector/avatar-icon0002_750950-43.jpg?semt=ais_hybrid'
    },
    answer: {
        type: String,
        required: [true, 'Answer required']
    }
}, {timestamps: true})

export const User = mongoose.model('User', userSchame);

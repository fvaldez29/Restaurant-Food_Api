import dotenv from "dotenv";
import mongoose from "mongoose";


dotenv.config()


export const connectDB = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log(`Connected to database ${mongoose.connection.host}`)
    } catch (error) {
        console.error('Error connection ', error)
    }
}
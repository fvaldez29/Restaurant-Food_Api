import { User } from "../models/userModel.js";
import bcrypt from 'bcrypt'
import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'

dotenv.config()

export const registerController = async (req, res) => {
    try {
        const { userName, email, password, phone, address, answer } = req.body;
        // Validación
        if (!userName || !email || !password || !address || !phone || !answer) {
            return res.status(500).send({
                success: false,
                message: 'Please Provide all fields'
            });
        }
        // Verificar usuario existente
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(500).send({
                success: false,
                message: 'Email Already Registered, please login.'
            });
        }
        const hashedPassword = await bcrypt.hash(password, 10)
        // Crear nuevo usuario
        const user = await User.create(
            { 
                userName, 
                email, 
                password: hashedPassword, 
                address, 
                phone,
                answer
            });
        res.status(201).send({
            success: true,
            message: 'Successfully Registered',
            user,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Error in register API',
            error,
        });
    }
};

//LOGIN
export const loginController = async(req, res) => {
    try {
        const {email, password} = req.body
        //Validation
        if(!email || !password){
            return res.status(500).send({
                success: false,
                message: 'Please Provide a Email and Password'
            })
        }
        //Check User 
        const user = await User.findOne({ email })
        if(!user){
            return res.status(404).send({
                success: false,
                message: 'User Not Found'
            })
        }
        //check user password 
        const isValid = await bcrypt.compare(password, user.password)
        if(!isValid) throw new Error({
            success: false,
            message: 'Invalid Credentials'
        })

        //Token
        const token = jwt.sign({
            id: user._id,
        }, process.env.JWT_SECRET, {
            expiresIn: '50d'
        })

        res.status(200).send({
            success: true,
            message: 'Login Successfully',
            token,
            user,    
        })

    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: 'Error In Login API',
            error
        })
    }
}

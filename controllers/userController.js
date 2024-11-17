import { User } from "../models/userModel.js"
import bcrypt from 'bcrypt'
import dotenv from 'dotenv'

dotenv.config()

// GET USER INFO
export const getUserController = async(req, res) => {
    try {
        // * find user
        const user = await User.findById(req.body.id)
        // Validation
        if(!user){
            return res.status(404).send({
                success: false,
                message: 'User not found'
            })
        }

        // * Hide user password
        user.password = undefined
        // Resp
        res.status(200).send({
            sucess: true,
            message:'User get Successfully',
            user,
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: 'Error in Getting User Api',
            error
        })
    }
}

// ? UPDATE USER
export const updateUserController = async (req, res) => {
  try {
    // Buscar el usuario
    const user = await User.findById(req.body.id); // Corrección del uso de findById

    // Verificar si el usuario existe
    if (!user) {
      return res.status(404).send({
        success: false,
        message: 'User Not Found'
      });
    }

    // Actualizar datos
    const { userName, address, phone, answer } = req.body;
    if (userName) user.userName = userName;
    if (address) user.address = address;
    if (phone) user.phone = phone;
    if(answer) user.answer = answer;
    // Guardar los cambios
    await user.save();

    // Enviar respuesta exitosa
    res.status(200).send({
      success: true,
      message: 'User updated successfully'
    });

  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: 'Updating user API Error'
    });
  }
};


// RESET PASSWORD
export const resetPasswordController = async(req, res) => {
  try {
    const { email, newPassword, answer } = req.body
    if(!email || !newPassword || !answer){
      res.status(500).send({
        success: false,
        message: 'Please provide all fields!'
      })
    }
    
    const user = await User.findOne({email, answer})

    if(!user) throw new Error({ success: false, message: 'User Not Found'})

    const hashedPassword = await bcrypt.hash(newPassword, 10)

    user.password = hashedPassword

    await user.save()

    res.status(200).send({
      sucess: true,
      message: 'Password Reset Successfully'
    })

  } catch (error) {
    console.log(error)
    res.status(500).send({
      success: false,
      message: 'Password Reset Error!!'
    })
  }
}


//? DELETE USER ACCOUNT
export const deleteUserController = async(req, res) => {
  try {

    await User.findByIdAndDelete(req.params.id)
    console.log(req.params.id)
    return res.status(200).send({
        success: true,
        message: 'Your account has been deleted'
    })
  } catch (error) {
    console.log(error)
    res.status(500).send({
      success: false,
      message: 'User Delete Error'
    })
  }
}
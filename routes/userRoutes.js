import express from 'express'
import { deleteUserController, getUserController, resetPasswordController, updateUserController } from '../controllers/userController.js';
import authMiddleware from '../middlewares/authMiddleware.js';

const userRouter = express.Router()

//Routes
// ? GET USER || GET
userRouter.get('/getUser', authMiddleware, getUserController)


// ? UPDATE USER
userRouter.post('/updateUser', authMiddleware, updateUserController)


// ? RESET PASSWORD
userRouter.post('/resetPassword', authMiddleware, resetPasswordController)


//? DELETE USER
userRouter.delete('/deleteAccount/:id', authMiddleware, deleteUserController)

export default userRouter;

// ! PUT: El método PUT generalmente se usa para reemplazar todo el recurso con el nuevo contenido que se envía en la solicitud.
// TODO --PATCH: actualiza un campos en especifico
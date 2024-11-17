import express from 'express'
import { testUserController } from '../controllers/testController.js'


//router object
const router = express.Router()


//Routes GET | POST | UPDATE | DELETE
router.get('/test-user', testUserController);

export default router
import express from 'express'
import dotenv from 'dotenv'
import cors  from 'cors'
import morgan from 'morgan'
import router from './routes/testRoutes.js'
import { connectDB } from './config/db.js'
import   routers   from './routes/authRoutes.js'
import userRouter from './routes/userRoutes.js'
import restaurantRoute from './routes/restaurantRoutes.js'
import categories from './routes/categoryRoutes.js'
import foodRoutes from './routes/foodRoutes.js'

//rest object 
const app = express()

//DB connection
connectDB()

//dot en configuration
dotenv.config()

//middlewares
app.use(express.json())
app.use(cors())
app.use(morgan('dev'))
app.disable('x-powered-by')

//route
app.use('/api/v1/test', router)
app.use('/api/v1/auth', routers)
app.use('/api/v1/user', userRouter)
app.use('/api/v1/restaurant', restaurantRoute)
app.use('/api/v1/category', categories)
app.use('/api/v1/food', foodRoutes)

app.get('/', (req, res) => {
    res.send('<h1>Welcome to Restaurant Sever API</h1>')
})

const PORT = process.env.PORT ?? 1234

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})

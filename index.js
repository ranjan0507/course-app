import './config.js'
import express from "express" ;
import cors from 'cors' ;
import userRouter from './routes/UserRoutes.js'
import courseRouter from './routes/CourseRoutes.js'
import orderRouter from './routes/OrderRoutes.js'
import purchaseRouter from './routes/PurchaseRoutes.js'
import { connectDB } from "./utils/db.js";

const app = express() ;

app.use(express.json()) ;
app.use(cors()) ;

app.use('/api/users',userRouter) ;
app.use('/api/courses',courseRouter) ;
app.use('/api/orders',orderRouter)
app.use('/api/purchases',purchaseRouter)

const PORT = process.env.PORT || 3000 ;

connectDB().then(() => {
	app.listen(PORT , () => {
		console.log("server running on "+PORT)
	})
})
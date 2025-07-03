import './src/config.js'
import express from "express" ;
import cors from 'cors' ;
import userRouter from './src/routes/userRoutes.js'
import courseRouter from './src/routes/courseRoutes.js'
import orderRouter from './src/routes/orderRoutes.js'
import purchaseRouter from './src/routes/purchaseRoutes.js'
import { connectDB } from "./src/utils/db.js";

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
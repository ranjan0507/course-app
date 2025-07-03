import './config.js'
import express from "express" ;
import cors from 'cors' ;
import userRouter from './routes/UserRoutes.js'
import courseRouter from './routes/CourseRoutes.js'
import { connectDB } from "./utils/db.js";

const app = express() ;

app.use(express.json()) ;
app.use(cors()) ;

app.use('/api/users',userRouter) ;
app.use('/api/courses',courseRouter) ;

const PORT = process.env.PORT || 3000 ;

connectDB().then(() => {
	app.listen(PORT , () => {
		console.log("server running on "+PORT)
	})
})
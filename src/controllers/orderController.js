import { OrderModel } from "../models/OrderModel.js";
import { CourseModel } from "../models/CourseModel.js";

export const createOrder = async (req , res , next) => {
	try {
		const userId = req.user.sub ;
		const {courseId} = req.body ;

		const course = await CourseModel.findById(courseId) ;
		if(!course){
			return res.status(404).json({
				message : 'course not found'
			})
		}

		const already = await OrderModel.findOne({
			user : userId ,
			course : courseId
		})
		if(already){
			return res.status(400).json({
				message : 'already purchased'
			})
		}

		const order = await OrderModel.create({
			user : userId ,
			course : courseId ,
			amount : course.price
		})
		res.status(201).json(order)
	} catch (error) {
		next(err) ;
	}
}
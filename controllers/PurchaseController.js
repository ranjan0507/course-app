import { OrderModel } from "../models/OrderModel"

export const listPurchases = async (req , res , next) => {
	try {
		const orders = OrderModel.find({
			user : req.user.sub 
		}).populate('course','title description price')
		  .sort({
			createdAt : -1
		  })
	} catch (error) {
		
	}
}

export const getPurchase = async (req,res,next) => {
	try {
		const order = OrderModel.findOne({
			_id : req.params.id ,
			user : req.user.sub
		}).populate('course')
		if(!order){
			res.status(404).json({
				message : 'Course not found'
			})
		}
		res.json(order)
	} catch (error) {
		
	}
}
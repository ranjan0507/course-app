import mongoose from "mongoose";

const Order = new mongoose.Schema({
	user : {
		type : mongoose.Schema.Types.ObjectId ,
		ref : 'users'
	} ,
	course : {
		type : mongoose.Schema.Types.ObjectId ,
		ref : 'courses'
	} ,
	amount : {
		type : Number ,
		required : true ,
		min : 0 
	}
})

Order.index({
	user : 1 
})

export const OrderModel = mongoose.model('orders',schema)
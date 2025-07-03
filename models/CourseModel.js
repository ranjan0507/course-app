import mongoose from "mongoose";
import { Schema } from "mongoose";

const Course = new Schema({
	title : {
		type : String ,
		required : true
	} ,
	description : {
		type : String ,
		required : true
	} ,
	price : {
		type : Number ,
		required : true ,
		min : 0
	} ,
	instructor : {
		type : Schema.Types.ObjectId ,
		ref : 'users' ,
		required : true 
	} ,
	tags : [String]
},{
	timestamps : true
})

export const CourseModel = mongoose.model('courses',Course)
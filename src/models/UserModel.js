import mongoose from "mongoose";

const Schema = mongoose.Schema ;

const User = new Schema({
	name : {
		type : String ,
		required : true 
	} ,
	email : {
		type : String ,
		required : true ,
		lowercase : true ,
		unique : true
	} ,
	password : {
		type : String ,
		required : true
	} ,
	role : {
		type : String ,
		required : true ,
		enum : ['student' , 'instructor' ] ,
		default : 'student'
	}
},{
	timestamps : true
})

export const UserModel = mongoose.model('users',User)

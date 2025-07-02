import jwt from 'jsonwebtoken' ;
import bcrypt from 'bcrypt' ;
import { UserModel } from '../models/UserModel.js';

export const register = async (req, res, next) => {
	try {
		const {name , email , password , role} = req.body ;
		
		const existing = await UserModel.findOne({
			email : email
		})
		if(existing){
			res.status(409).json({
				message : 'User already exists'
			}) ;
			return ;
		}

		const passwordHash = await bcrypt.hash(password,10) ;

		const user = await UserModel.create({
			name : name ,
			email : email ,
			password : passwordHash ,
			role : role
		})
		res.status(201).json({
			id:user._id ,
			email : user.email ,
			role : user.role ,
			message : 'user registered successfully'
		})
	} catch (error) {
		res.status(500).json({
			message : "internal server error"
		})
	}
}

export const login = async (req, res, next) => {
	try {
		const {email , password} = req.body ;

		const user = await UserModel.findOne({
			email : email
		})
		if(!user){
			res.status(401).json({
				message : 'Invalid credentials'
			})
			return ;
		}

		const isValid = await bcrypt.compare(password,user.password) ;
		if(!isValid){
			res.status(401).json({
				message : 'Invalid password'
			})
			return ;
		}

		const payload = {
			sub : user._id ,
			email : user.email ,
			role : user.role
		} ;

		const token =  jwt.sign(payload,process.env.JWT_SECRET) ;

		res.json({
			token : token ,
			message : "signed in "
		})
	} catch (error) {
		res.status(500).json({
			message : "internal server error"
		})
	}
}
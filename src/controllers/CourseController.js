import { CourseModel } from "../models/CourseModel";

export const listCourses = async (req, res, next) => {
	try {
		const courses = await CourseModel.find().populate('instructor','name') ;
		res.json(courses) ;
	} catch (error) {
		
	}
}

export const getCourse = async (req , res , next) => {
	try {
		const id = req.params.id ;
		const course = await CourseModel.findById(id).populate('instructor','name email')
		if(!course){
			return res.status(404).json({
				message : 'Course not found'
			})
		}
		res.json(course) ; 
	} catch (error) {
		
	}
}

export const createCourse = async (req , res , next) => {
	try {
		const {title , description , price , tags} = req.body ;
		const instructorId = req.user.sub ;

		const course = await CourseModel.create({
			title : title ,
			description : description ,
			price : price ,
			tags : tags ,
			instructor : instructorId
		})

		res.status(201).json(course) ;
	} catch (error) {
		
	}
}
import {CourseModel} from '../models/CourseModel.js'

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

export const updateCourse = async (req , res , next) => {
	try {
		const {id}= req.params ;
		const updates = req.body ;

		const course = await CourseModel.findById(id) ;
		if(!course){
			return res.status(404).json({
				message : "course not found"
			})
		}
		if(req.user.sub !== course.instructor.toString()){
			return res.status(403).json({
				message : "you can not edit the course" 
			})
		}
		Object.assign(course,updates) ;
		await CourseModel.save() ;
		res.json(course) ;
	} catch (error) {
		
	}
}

export const deleteCourse = async (req, res, next) => {
	try {
		const {id} = req.params ;
		const course = await CourseModel.findById(id) ;
		if(!course){
			res.status(404).json({
				message : "course not found"
			})
		}
		if(req.user.sub !== course.instructor.toString()){
			return res.status(403).json({
				message : "you can not edit the course" 
			})
		}
		await course.remove() ;
		res.status(204).end() ;
	} catch (error) {
		
	}
}
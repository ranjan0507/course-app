import {z , ZodError} from "zod";

export const validate = (schema) => (req , res , next) => {
	try {
		req.body = schema.parse(req.body) ;
		next() ;
	} catch (error) {
		if(error instanceof ZodError){
			return res.status(400).json({
        	message: 'Validation failed',
       		issues: error.errors.map(e => ({
          			path:  e.path.join('.'),
          			message: e.message
					}))
			})
		}
		next(error) ;
	}
}

export const registerSchema = z.object({
	name : z.string().min(1,'name is required') ,
	email : z.string().email(1,'email is invalid') ,
	password: z.string().min(6, 'Password must be at least 6 characters'),
	role : z.enum(['student','instructor']).optional()
})

export const loginSchema = z.object({
  email:    z.string().email('Invalid email address'),
  password: z.string().min(1, 'Password is required'),
});
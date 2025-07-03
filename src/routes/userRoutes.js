import { Router } from "express";
import { register , login } from '../controllers/userController.js'
import { validate , registerSchema , loginSchema } from "../middlewares/validate.js";

const router = Router() ;

router.post('/register', validate(registerSchema) ,register) ;

router.post('/login', validate(loginSchema) ,login) ;

export default router ;
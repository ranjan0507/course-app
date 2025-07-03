import { Router } from "express";
import { getCourse , listCourses , createCourse , updateCourse , deleteCourse } from "../controllers/CourseController";
import { authenticate } from "../middlewares/auth";
import { authorize } from "../middlewares/authorize";

const router = Router() ;

router.get('/',listCourses) ;
router.get('/:id',getCourse) ;

router.post('/',authenticate,authorize('instructor'),createCourse) ;
router.patch('/:id',authenticate,authorize('instructor'),updateCourse) ;
router.delete('/:id',authenticate,authorize('instructor'),deleteCourse) ;

export default router ;
import { Router } from "express";
import { createOrder } from "../controllers/OrderController";
import { authenticate } from "../middlewares/auth";

const router = Router() ;

router.post('/',authenticate,createOrder)

export default router ;